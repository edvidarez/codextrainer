/**
 * Created by Arturo Hernandez on 26/11/2016.
 */


define(function(require){
    var matcher=require('matcher');
    var Matcher=new matcher.Matcher();

    var code = CodeMirror.fromTextArea(document.getElementById("code"), {
        lineNumbers: true,
        matchBrackets: true,
        autoCloseBrackets:true,
        mode: "text/x-c++src",
        theme:"monokai",
        extraKeys:{
            Enter: function(){
                console.log("here");
                var doc = code.getDoc();
                var cursor = doc.getCursor(); // gets the line number in the cursor position
                var noLine=cursor.line;
                var line = doc.getLine(cursor.line);
                var children=$('.CodeMirror-code').children("div");

                if(Matcher.isMatchingWord(line)){
                    console.log(line+ "linea");
                    console.log(Matcher.isSpecialToken(line));
                    console.log(noLine+ " numero linea");
                    if(Matcher.isSpecialToken(line)){
                        var pos = {
                            line: cursor.line,
                            ch: line.length
                        }
                        doc.replaceRange(Matcher.matchSpecialToken(line), pos);
                    }
                    
                    if(!Matcher.isMatchedAlready(line,children)){
                        code.replaceSelection( "\n"+Matcher.matchWord(line), "end" );
                    }
                }
                return CodeMirror.Pass;
            }
        }
    });
    var mac = CodeMirror.keyMap.default == CodeMirror.keyMap.macDefault;
    CodeMirror.keyMap.default[(mac ? "Cmd" : "Ctrl") + "-Space"] = "autocomplete";
    return{
            getCode:function(){
            return code;
        }
    }
});