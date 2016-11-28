<?php 
session_start();

    if(isset($_SESSION['tmp_world']))
    {
      //echo $_SESSION['x'];
    //  echo $_SESSION['tmp_world'];
     // var_dump(json_decode($_SESSION['tmp_world']));
      
   ?>
<!-- CodeMirror -->
   <!--  <link rel=stylesheet href="js/plugins/codemirror/doc/docs.css">-->
    <script src="js/plugins/codemirror/lib/codemirror.js"></script>
    <script src="js/plugins/codemirror/mode/clike/clike.js"></script>
    <script src="js/plugins/codemirror/addon/edit/matchbrackets.js"></script>
    <script src="js/plugins/codemirror/addon/edit/closebrackets.js"></script>
    <script src="js/plugins/codemirror/addon/hint/show-hint.js"></script>

    <link href="js/plugins/codemirror/lib/codemirror.css" rel="stylesheet">
    <link href="js/plugins/codemirror/addon/hint/show-hint.css" rel="stylesheet">
    <link href="css/plugins/codemirror/monokai.css" rel="stylesheet">

    <script src="js/jquery-2.1.1.js"></script>
<script src="js/bootstrap.min.js"></script>
<script data-main="release/js/common" src="js/require.js"></script>

   <script type="text/javascript">

     var world = '<?php echo $_SESSION['tmp_world']; ?>';
     var globalx = '<?php echo $_SESSION['x']; ?>';
      var globaly = '<?php echo $_SESSION['y']; ?>';
     world= JSON.parse(world);
     console.log(world);
     //console.log( globalx,globaly,world);
    
   </script>
<!DOCTYPE html>
<html>
<head>
  <title></title>
</head>
<body>
<div>
<textarea id="code">

</textarea>
</div>
<div id = "canvas_div">
  <canvas id="canvas"></canvas>
  
</div>

</body>
<!-- <script src="http://webglfundamentals.org/webgl/resources/webgl-utils.js"></script>
<script src="http://webglfundamentals.org/webgl/resources/webgl-lessons-helper.js"></script> -->
<script src="jquery.js"></script>
<script type="text/javascript" src="Mat4.js"></script>
<script id="2d-vertex-shader" type="notjs"></script>
<script id="2d-fragment-shader" type="notjs"></script>
<script id="2d-vertex-shader2" type="notjs"></script>
<script id="2d-fragment-shader2" type="notjs"></script>
<script type="text/javascript" src="cylinder.js"></script>
<script type="text/javascript" src="player.js"></script>
<script type="text/javascript" src="stats.js"></script>
<script type="text/javascript" src="webgl_utils.js"></script>
<script type="text/javascript" src="webgl_helper.js"></script>

<script type="text/javascript">


</script>
</html>
<?php 
 }
 else
 {
    echo "nada";
 }
   ?> 
