<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>TurboXLab | Lenguaje</title>

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="font-awesome/css/font-awesome.css" rel="stylesheet">

    <link href="css/plugins/iCheck/custom.css" rel="stylesheet">
    <link href="css/animate.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">

 <!-- CodeMirror -->
   <!--  <link rel=stylesheet href="js/plugins/codemirror/doc/docs.css"> -->
    <script src="js/plugins/codemirror/lib/codemirror.js"></script>
    <script src="js/plugins/codemirror/mode/clike/clike.js"></script>
    <script src="js/plugins/codemirror/addon/edit/matchbrackets.js"></script>
    <script src="js/plugins/codemirror/addon/edit/closebrackets.js"></script>
    <script src="js/plugins/codemirror/addon/hint/show-hint.js"></script>
    <link href="js/plugins/codemirror/lib/codemirror.css" rel="stylesheet">
    <link href="js/plugins/codemirror/addon/hint/show-hint.css" rel="stylesheet">
    <link href="css/plugins/codemirror/monokai.css" rel="stylesheet">


<style>.CodeMirror {border: 5px inset #dee;}</style>



</head>

<body>

      <?php 
            include "left_bar.php";
            include("nav.php");
         ?>


<div class="wrapper wrapper-content">
    <div class="row animated fadeInDown">
        <div class="row">
                <div class="col-lg-12">
                    <div class="ibox ">
                        <div class="ibox-title">
                            <h5>CodeEditor|Hola mundo</h5>
                        </div>
                        <div class="ibox-content">

                            <p  class="m-b-lg">
                                <strong>Lenguaje</strong><br>
                                Aqui se podrá analizar el codigo dado.
                                <button id="new">Nuevo</button>
                                <button id="ok">Revisar</button>

                            </p>


<textarea id="code">
asd
</textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>




<?php 
    include "footer.php";
 ?>
</div>

</div>

<!-- Mainly scripts -->
<script src="js/jquery-2.1.1.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/plugins/metisMenu/jquery.metisMenu.js"></script>
<script src="js/plugins/slimscroll/jquery.slimscroll.min.js"></script>

<!-- Custom and plugin javascript -->
<script src="js/inspinia.js"></script>
<script src="js/plugins/pace/pace.min.js"></script>

<!-- jQuery UI custom -->
<script src="js/jquery-ui.custom.min.js"></script>
<!-- iCheck -->
<script src="js/plugins/iCheck/icheck.min.js"></script>
<script src="release/js/example.js"></script>
  <script>
        //console.log(instructions[11]());
         $(document).ready(function(){
            
             var code = CodeMirror.fromTextArea(document.getElementById("code"), {
                 lineNumbers: true,
                 matchBrackets: true,
                 autoCloseBrackets:true,
                 mode: "text/x-c++src",
                 theme:"monokai"
             });
             var mac = CodeMirror.keyMap.default == CodeMirror.keyMap.macDefault;
             CodeMirror.keyMap.default[(mac ? "Cmd" : "Ctrl") + "-Space"] = "autocomplete";
             var code;
             
             $('#ok').on("click",function(){
              //  alert(code.getValue());
                var myCode = code.getValue().split(/\n|\t| /);
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
                code.setValue("iniciar-programa\n\tinicia-ejecucion\n\t\tapagate;\n\ttermina-ejecucion\nfinalizar-programa");
             });
         }); 

</script>
</body>

</html>
