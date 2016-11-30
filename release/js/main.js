/**
 * Created by Arturo Hernandez on 26/11/2016.
 */

define(['jquery','config','tokens',
    'polling','matcher','jBox'],function($,config,tokens,poll,matcher) {
    var code = config.getCode();
    var pollingO = new poll.Delayed();
    var iniciarPrograma = false;
    var iniciarEjecucion = false;
    var Matcher = new matcher.Matcher();
    var flag = false;
    var pre_dictionary = {};
    var stackSpecial=[];
    var doc = code.getDoc();
    var dictionarySpecial={};
    var stackIndexes=[];
    var children;


    var node=function(index,content){
        this.index=index;
        this.content=content;
    }


    pollingExecute=function() {
        children=$('.CodeMirror-code').children("div");
        stackSpecial=[];
        dictionarySpecial={};

        $.each(children,function(index, val){
            // $(this).find("div.CodeMirror-gutter-wrapper").append("<i class='fa fa-times'></i>");
            var $this=$(this).children('pre').children('span').children('span');
            var lineText=$this.text();
            Matcher.checkWrongWord($this,tokens.identifySubset($this.text()));
            //$(this).children('pre').children('span').prepend("<i class='fa fa-times' style='color:red;'></i>")
        });

        var tokenBlocksComplementary = tokens.getTokenBlockWords();
        var stack = [];
        var dictionary={};

        var flagErrorEndNotFound=false;

        var tokenBlocksA=["iniciar_programa","inicia_ejecucion"];
        var specialTokensSyntax=["mientras","si", "repetir"];
        var specialBlocks=["inicio","fin"];

        var j=0;
        var i=0;

        while(i<doc.lineCount()){
            var lineDoc=doc.getLine(i).trim().replace(/\s+/g, '');

                console.log(lineDoc);
            if(typeof tokenBlocksComplementary[lineDoc]!="undefined"){
                console.log(tokenBlocksComplementary[lineDoc]);
                console.log((stack[stack.length-1]).content);
                if(tokenBlocksComplementary[lineDoc]==(stack[stack.length-1]).content)
                    stack.pop();
                else{
                    flagErrorEndNotFound=true;
                    $(children[(stack[stack.length-1]).index]).
                    find("div.CodeMirror-gutter-wrapper").children("i").remove();
                    $(children[(stack[stack.length-1]).index]).
                    find("div.CodeMirror-gutter-wrapper")
                        .append("<i  class='fa fa-times'style='color:red;'></i>");
                }
                i++;
            }else if($.inArray(lineDoc, specialBlocks) > -1){
                flagErrorEndNotFound=true;
                $(children[i]).
                find("div.CodeMirror-gutter-wrapper").children("i").remove();
                $(children[i]).
                find("div.CodeMirror-gutter-wrapper")
                    .append("<i onclick='Discover(this)' class='fa fa-times'style='color:red;'></i>");
                i++;
            }
            else{
                if((lineDoc.slice(0,8)=="mientras" &&
                    lineDoc.slice(lineDoc.length-5,lineDoc.length)!="hacer") ||
                    (lineDoc.slice(0,2)=="si" &&
                    lineDoc.slice(lineDoc.length-8,lineDoc.length)!="entonces" ) ||
                    (lineDoc.slice(0,7)=="repetir" &&
                    lineDoc.slice(lineDoc.length-5,lineDoc.length)!="veces") ) {
                    $(children[i]).find("div.CodeMirror-gutter-wrapper")
                        .append("<i class='fa fa-times' style='color:red;z-index:6;position:absolute;'></i>");
                    flagErrorEndNotFound=true;

                    i++;
                }
                else if((lineDoc.slice(0,8)=="mientras" &&
                    lineDoc.slice(lineDoc.length-5,lineDoc.length)=="hacer") ||
                    (lineDoc.slice(0,2)=="si" &&
                    lineDoc.slice(lineDoc.length-8,lineDoc.length)=="entonces" ) ||
                    (lineDoc.slice(0,7)=="repetir" &&
                    lineDoc.slice(lineDoc.length-5,lineDoc.length)=="veces")){
                    //se tiene que afectar i en caso de que todo este bien
                    stackSpecial.push(new node(i,"comodin"));
                    i=checkSpecial(i);

                    if(stackSpecial.length>0){

                        for(var st in stackSpecial){
                            $(children[stackSpecial[st].index]).find("div.CodeMirror-gutter-wrapper")
                                .append("<i class='fa fa-times' style='color:red;z-index:6;position:absolute;'></i>");
                        }
                    }else{
                        $(children).
                        find("div.CodeMirror-gutter-wrapper").children("i").remove();
                    }
                }
                else{
                    if($.inArray(lineDoc, tokenBlocksA) > -1){
                        dictionary[i]=lineDoc;
                        stack.push(new node(i,lineDoc));
                    }
                    i++;
                }
            }

            //console.log(lineDoc+ " linea documento");
        }
        if(!flagErrorEndNotFound){
            if(stack.length>0) {
                for (var h in stack) {
                    $(children[stack[h].index]).find("div.CodeMirror-gutter-wrapper").children("i").remove();
                    $(children[stack[h].index]).find("div.CodeMirror-gutter-wrapper")
                        .append("<i class='fa fa-times prueba' title='hola' style='color:red;z-index:6;position:absolute;'></i>");
                }
            }else if(stackSpecial.length==0) {
                $(children).
                find("div.CodeMirror-gutter-wrapper").children("i").remove();
            }
        }

        //console.clear();

        console.log("inicio Especial:");
        for(var ii in stackSpecial){

            console.log(stackSpecial[ii]);
        }
        console.log("fin Especial:");

        console.log("inicio :");
        for(var ii in stack){

            console.log(stack[ii]);
        }
        console.log("fin :");


    };


    function checkSpecial(i){
        var flagFindStart=false;
        for(j=i+1;j<doc.lineCount();j++){
            if(stackSpecial.length ==0)
            {
                return j;
            }
            var lineInner=doc.getLine(j).trim().replace(/\s+/g, '');
            //console.log(lineInner+"linea siguiente de especial");
            if(lineInner!=""){
                if( lineInner=="inicio"){
                    //console.log("push inicio");
                    stackSpecial.push(new node(j,"inicio"));
                }else if(lineInner=="fin"){
                    if(stackSpecial[stackSpecial.length-1].content=="inicio"){
                        console.log("pop de los dos");
                        stackSpecial.pop();
                        stackSpecial.pop();
                      //  break;
                    }else{
                        $(children[stackSpecial[stackSpecial.length-1].index]).find("div.CodeMirror-gutter-wrapper")
                            .append("<i class='fa fa-times' style='color:red;z-index:6;position:absolute;'></i>");
                    }
                }

                if((lineInner.slice(0,8)=="mientras" &&
                    lineInner.slice(lineInner.length-5,lineInner.length)!="hacer") ||
                    (lineInner.slice(0,2)=="si" &&
                    lineInner.slice(lineInner.length-8,lineInner.length)!="entonces" ) ||
                    (lineInner.slice(0,7)=="repetir" &&
                    lineInner.slice(lineInner.length-5,lineInner.length)!="veces") ) {
                    $(children[j]).find("div.CodeMirror-gutter-wrapper")
                        .append("<i class='fa fa-times' style='color:red;z-index:6;position:absolute;'></i>");
                }else if((lineInner.slice(0,8)=="mientras" &&
                    lineInner.slice(lineInner.length-5,lineInner.length)=="hacer") ||
                    (lineInner.slice(0,2)=="si" &&
                    lineInner.slice(lineInner.length-8,lineInner.length)=="entonces" ) ||
                    (lineInner.slice(0,7)=="repetir" &&
                    lineInner.slice(lineInner.length-5,lineInner.length)=="veces")){

                    stackSpecial.push(new node(j,"comodin"));

                    j=checkSpecial(j);
                }

            }
        }
    }
    
    code.on("change",function(changeObj){
        pollingO.set(60,pollingExecute);
    });

    $('#ok').on("click",function(){
        //  alert(code.getValue());
        var myCode = code.getValue().split(/\n|\t|/);
        for(var w=0;w<myCode.length;w++)
            if(myCode[w].length==0)
            {
                console.log("delete "+w+"   "+myCode[w]);
                myCode.splice(w,1);
                w--;
            }
            else
            {
                console.log("stay "+w+ "  "+myCode[w]);
            }
        console.log(myCode);
        var automata = new AP(myCode);

    });
    $("#new").on("click",function(){
        code.setValue("iniciar_programa\ninicia_ejecucion\napagate;\ntermina_ejecucion\niniciar_programa");
    });

    return{
        getCodeResult:function()
        {
           var codigo = [];
           var i=0;
           while(i<doc.lineCount())
           {
             codigo.push(doc.getLine(i).trim().replace(/\s+/g, ''));
             i++;
           }
           return codigo;
        }
    }
});