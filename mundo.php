<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>TurboXLab |World</title>

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
                <div class="col-lg-8">
                    <div class="ibox ">
                        <div class="ibox-title">
                            <h5>World|Example</h5>
                        </div>
                        <div class="ibox-content" id="canvas_div">

                            <p  class="m-b-lg">
                                <strong>World</strong><br>
                                Aqui podras ver el resultado de tu codigo y tu generador de mundos.
                            </p>
                            <canvas id="canvas" ></canvas>

                        </div>
                    </div>
                </div>
                   <div class="col-lg-4">
                    <div class="ibox ">
                        <div class="ibox-title">
                            <h5>WorldEditor|Inspector</h5>
                        </div>
                        <div class="ibox-content">

                            <p  class="m-b-lg">
                                <strong>Inspector</strong><br>
                                Aqui puedes editar los atributos del mapa.
                            </p>
                            <div class="row">
                                    <div class="col-md-12">

                                        <p class="font-bold">
                                           Altura:
                                        </p>

                                        <input class="touchspin1" type="text" value="0" id="inspector_altura">
                                    </div>
                                    <div class="col-md-12">

                                        <p class="font-bold">
                                            Zumbadores
                                        </p>

                                        <input class="touchspin1" type="text" value="0" id="inspector_zumbadores">
                                    </div>
                                </div>
                               

                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>




<?php 
    include "footer.php";
    include "ejemplo.php";
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
<style type="text/css">
    #canvas{
        position:relative;
        left: -20px;
    }
</style>
</body>

</html>
