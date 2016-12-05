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
    var stack=[];
    var doc = code.getDoc();
    var stackIndexes=[];
    var children;


    var node=function(index,content){
        this.index=index;
        this.content=content;
    }


    pollingExecute=function() {
        children=$('.CodeMirror-code').children("div");
        stack=[];

        $.each(children,function(index, val){
            // $(this).find("div.CodeMirror-gutter-wrapper").append("<i class='fa fa-times'></i>");
            var $this=$(this).children('pre').children('span').children('span.cm-variable');
            var lineText=$this.text();
            Matcher.checkWrongWord($this,tokens.identifySubset($this.text()));
            //$(this).children('pre').children('span').prepend("<i class='fa fa-times' style='color:red;'></i>")
        });

        var tokenBlocksComplementary = tokens.getTokenBlockWords();
        var flagErrorEndNotFound=false;

        var tokenBlocksA=["iniciar_programa","inicia_ejecucion"];
        var specialTokensSyntax=["mientras","si", "repetir"];
        var specialBlocks=["inicio","fin"];

        var j=0;
        var i=0;

        while(i<doc.lineCount()){
            var lineDoc=doc.getLine(i).trim().replace(/\s+/g, '');
            //console.log(lineDoc);
            if(typeof tokenBlocksComplementary[lineDoc]!="undefined"){
                console.log(tokenBlocksComplementary[lineDoc]);
                console.log((stack[stack.length-1]).content);
                if(tokenBlocksComplementary[lineDoc]==(stack[stack.length-1]).content){
                    console.log('pop de'+(stack[stack.length-1]).content);
                    stack.pop();
                }

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
                    stack.push(new node(i,"comodin2"));
                    break;
                    i++;
                }
                else if((lineDoc.slice(0,8)=="mientras" &&
                    lineDoc.slice(lineDoc.length-5,lineDoc.length)=="hacer") ||
                    (lineDoc.slice(0,2)=="si" &&
                    lineDoc.slice(lineDoc.length-8,lineDoc.length)=="entonces" ) ||
                    (lineDoc.slice(0,7)=="repetir" &&
                    lineDoc.slice(lineDoc.length-5,lineDoc.length)=="veces")){
                    //se tiene que afectar i en caso de que todo este bien
                    stack.push(new node(i,"comodin"));
                    i=checkSpecial(i);

                    if(stack.length>0){

                        for(var st in stack){
                            $(children[stack[st].index]).find("div.CodeMirror-gutter-wrapper")
                                .append("<i class='fa fa-times' style='color:red;z-index:6;position:absolute;'></i>");
                        }
                    }else{
                        $(children).
                        find("div.CodeMirror-gutter-wrapper").children("i").remove();
                    }
                }
                else{
                    if($.inArray(lineDoc, tokenBlocksA) > -1){
                        stack.push(new node(i,lineDoc));
                    }
                    i++;
                }

            }
            //console.log(lineDoc+ " linea documento");
        }

        if(stack.length>0) {
            $(children).
            find("div.CodeMirror-gutter-wrapper").children("i").remove();
            for (var h in stack) {
                console.log("stack");
                console.log(h);

                $(children[stack[h].index]).find("div.CodeMirror-gutter-wrapper").children("i").remove();
                $(children[stack[h].index]).find("div.CodeMirror-gutter-wrapper")
                    .append("<i class='fa fa-times prueba' title='hola' style='color:red;z-index:6;position:absolute;'></i>");
            }
        }else if(stack.length==0) {
            $(children).
            find("div.CodeMirror-gutter-wrapper").children("i").remove();
        }


        //console.clear();

        console.log("inicio:");
        for(var ii in stack){

            console.log(stack[ii]);
        }
        console.log("fin:");




    };


    function checkSpecial(i){
        for(j=i+1;j<doc.lineCount();j++){
            var lineInner=doc.getLine(j).trim().replace(/\s+/g, '');
            //console.log(lineInner+"linea siguiente de especial");
            if(lineInner!=""){
                if( lineInner=="inicio"){
                    //console.log("push inicio");
                    stack.push(new node(j,"inicio"));
                }else if(lineInner=="fin"){
                    if(stack[stack.length-1].content=="inicio"){
                        console.log("pop de los dos");
                        stack.pop();
                        stack.pop();
                        return j;
                    }else{
                        $(children[stack[stack.length-1].index]).find("div.CodeMirror-gutter-wrapper")
                            .append("<i class='fa fa-times' style='color:red;z-index:6;position:absolute;'></i>");
                    }
                }else if((lineInner.slice(0,8)=="mientras" &&
                    lineInner.slice(lineInner.length-5,lineInner.length)!="hacer") ||
                    (lineInner.slice(0,2)=="si" &&
                    lineInner.slice(lineInner.length-8,lineInner.length)!="entonces" ) ||
                    (lineInner.slice(0,7)=="repetir" &&
                    lineInner.slice(lineInner.length-5,lineInner.length)!="veces") ) {
                    $(children[j]).find("div.CodeMirror-gutter-wrapper")
                        .append("<i class='fa fa-times' style='color:red;z-index:6;position:absolute;'></i>");
                    stack.push(new node(j,"comodin2"));
                    break;
                }else if((lineInner.slice(0,8)=="mientras" &&
                    lineInner.slice(lineInner.length-5,lineInner.length)=="hacer") ||
                    (lineInner.slice(0,2)=="si" &&
                    lineInner.slice(lineInner.length-8,lineInner.length)=="entonces" ) ||
                    (lineInner.slice(0,7)=="repetir" &&
                    lineInner.slice(lineInner.length-5,lineInner.length)=="veces")){

                    stack.push(new node(j,"comodin"));

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
    return {
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