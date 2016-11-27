/**
 * Created by Arturo Hernandez on 26/11/2016.
 */

define(function(require){
    var $= require('jquery');
    var config= require('config');
    var tokens=require('tokens');
    var poll=require('polling');
    var matcher=require('matcher');
    var code=config.getCode();
    var pollingO=new poll.Delayed();
    var iniciarPrograma=false;
    var iniciarEjecucion=false;
    var Matcher=new matcher.Matcher();
    var flag=false;
    pollingExecute=function(){
        var children=$('.CodeMirror-code').children("div");
        var doc = code.getDoc();

        for(var i=0;i<doc.lineCount();i++){
            var lineDoc=doc.getLine(i);
            console.log(lineDoc+ " linea documento");
            var firstChar=lineDoc[0];
            var expression="";
            if(firstChar=="m"){
                expression=lineDoc.slice(8,lineDoc.length-5);
            }else if(firstChar=="r"){
                expression=lineDoc.slice(6,lineDoc.length-5);
            }else if(firstChar=="s"){
                expression=lineDoc.slice(1,lineDoc.length-8);
            }
        }
        $.each(children,function(index, val){
            // $(this).find("div.CodeMirror-gutter-wrapper").append("<i class='fa fa-times'></i>");
            var $this=$(this).children('pre').children('span').children('span');
            var lineText=$this.text();
            Matcher.checkWrongWord($this,tokens.identifySubset($this.text()))
            //$(this).children('pre').children('span').prepend("<i class='fa fa-times' style='color:red;'></i>")
        });
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


});