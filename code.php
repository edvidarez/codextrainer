<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>TurboXLab | Code-Editor</title>

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
                                <strong>Ejemplo1</strong><br>
                                En este apartado seras capaz de escribir, compilar y probar codigo, individual o colectivamente, empieza escribiendo un hola mundo.
                            </p>

<textarea id="code1">
#include<stdio.h>
int main()
{
    printf("Hola mundo");
    return 0;
}
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
  <script>
         $(document).ready(function(){
            
             var editor_one = CodeMirror.fromTextArea(document.getElementById("code1"), {
                 lineNumbers: true,
                 matchBrackets: true,
                 autoCloseBrackets:true,
                 mode: "text/x-c++src",
                 theme:"monokai"
             });
             var mac = CodeMirror.keyMap.default == CodeMirror.keyMap.macDefault;
             CodeMirror.keyMap.default[(mac ? "Cmd" : "Ctrl") + "-Space"] = "autocomplete";
         });

</script>
</body>

</html>
