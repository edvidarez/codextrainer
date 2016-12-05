<?php 
    session_start();
    if(false)  // lo quite
    {
     //   header("location:index.php");
    }
    else
    {
 ?>
<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>TurboXLab | World-Editor</title>

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="font-awesome/css/font-awesome.css" rel="stylesheet">

    <link href="css/plugins/iCheck/custom.css" rel="stylesheet">
    <link href="css/animate.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">

<script src="js/jquery-2.1.1.js"></script>

<script src="js/bootstrap.min.js"></script>


<script src="js/plugins/metisMenu/jquery.metisMenu.js"></script>

<script src="js/plugins/touchspin/jquery.bootstrap-touchspin.min.js"></script>
<script src="js/plugins/slimscroll/jquery.slimscroll.min.js"></script>


 <!-- CodeMirror -->
   <!--  <link rel=stylesheet href="js/plugins/codemirror/doc/docs.css"> -->
<!--     <script src="js/plugins/codemirror/lib/codemirror.js"></script>
    <script src="js/plugins/codemirror/mode/clike/clike.js"></script>
    <script src="js/plugins/codemirror/addon/edit/matchbrackets.js"></script>
    <script src="js/plugins/codemirror/addon/edit/closebrackets.js"></script>
    <script src="js/plugins/codemirror/addon/hint/show-hint.js"></script>
    <link href="js/plugins/codemirror/lib/codemirror.css" rel="stylesheet">
    <link href="js/plugins/codemirror/addon/hint/show-hint.css" rel="stylesheet">
    <link href="css/plugins/codemirror/monokai.css" rel="stylesheet">
 -->

<style>
canvas {
    border: 2px solid #111;
    margin: 30px;
}
</style>



</head>

<body>

      <?php 
           /* include "left_bar.php";
            include("nav.php");*/
         ?>


<div class="wrapper wrapper-content">
    <div class="row animated fadeInDown">
        <div class="row">
                <div class="col-lg-6">
                    <div class="ibox" id="areaGrid">
                        <div class="ibox-title">
                            <h5>WorldEditor|Hola mundo</h5>

                        </div>
                        <div class="ibox-content" id="canvas_div">

                            <p class="m-b-lg">
                                <strong>Ejemplo1</strong><br>
                                En este apartado seras capaz de crear Mundos en 2D, no te preocupes en la aplicacion se verá en 3D ;).<br>
                                <div class="row">
                                    <div class="col-md-3">

                                        <p class="font-bold">
                                            Columnas
                                        </p>

                                        <input class="touchspin1" type="text" value="10" id="col">
                                    </div>
                                    <div class="col-md-3">

                                        <p class="font-bold">
                                            Filas
                                        </p>

                                        <input class="touchspin1" type="text" value="10" id="row">
                                    </div>
                                    <div class="col-md-3">
                                    <p> Título</p>
                                        <input class="input_title" placeholder="Título" id="titulo"></input>
                                    </div>
                                    </div>
                                    <div class="row">
                                    <div class="col-md-3">

                                        <p class="font-bold">
                                           Altura:
                                        </p>

                                        <input class="touchspin1" type="text" value="0" id="inspector_altura">
                                    </div>
                                    <div class="col-md-3">

                                        <p class="font-bold">
                                            Zumbadores
                                        </p>

                                        <input class="touchspin1" type="text" value="0" id="inspector_zumbadores">
                                    </div>
                                    <div class="col-md-3">
                                   
                                    <button type="button" class="btn btn-w-m btn-info" id="preview_world">Ver</button>
                                        <button type="button" class="btn btn-w-m btn-success" id="save">Guardar</button>

                                    </div>
                                </div>
                            </p>

                                <canvas id="myCanvas" width="500" height="500" />

                        </div>
                    </div>
                
                         <div id="canvasArea" class="row" style="display: none;">
                            <div class="col-lg-12">
                                <div id = "canvas_div" >
                                  <canvas id="canvas"></canvas>
                                  
                                </div>
                                
                            </div>
                    </div>       
                </div>
                <div class="col-lg-6">
                    <div class="ibox ">
                        <div class="ibox-title">
                            <h5>WorldEditor|Inspector</h5>
                        </div>
                        <div class="ibox-content">

                            <p  class="m-b-lg">
                                
                                <strong>Inspector




                                </strong><br>

                                Aqui puedes editar los atributos del mapa.
                            </p>
                            

                            <textarea id="code"></textarea>
                               

                        </div>
                    </div>
                </div>

            </div>
            
        </div>
        
    </div>




<?php 
   // include "footer.php";
 ?>
</div>

</div>

<!-- Mainly scripts -->


<!-- Custom and plugin javascript -->

  <script>
   var colums = document.getElementById("col").value;
  var rows = document.getElementById("row").value;
  var inspector_altura = document.getElementById("inspector_altura");
  inspector_altura.value=0;
  var titulo = document.getElementById("titulo");
  titulo.value='';
var inspector_zumbadores = document.getElementById("inspector_zumbadores");
inspector_zumbadores.value=0;
    var element = document.getElementById('myCanvas');
    var elem = $("#myCanvas");
    var selecteds = [],ligths = []; 
    var context = element.getContext('2d');
    element.width = 50*colums;
    element.height = 50 * rows;
 
  $("#row").change(function(){
    rows = document.getElementById("row").value;
    console.log(rows);
     element.height = 50 * rows;
   // colums=$("#row").value;
   drawGrid();
  });
  $("#col").on("change",function(){
    colums = document.getElementById("col").value;
    console.log(colums);
    element.width = 50*colums;
    drawGrid();
  });
$("#inspector_altura").on("change",function(){
    inspector_altura = document.getElementById("inspector_altura");
    console.log(inspector_altura);
    selecteds.forEach(function(selected){
        selected.altura = inspector_altura.value;
        renderGrid();
    });
   
});
      $("#inspector_zumbadores").on("change",function(){
    inspector_zumbadores = document.getElementById("inspector_zumbadores");
    console.log(inspector_zumbadores);
    selecteds.forEach(function(selected){
        selected.zumbadores = inspector_zumbadores.value;
        console.log("zumbadores++");
        renderGrid();
    });
   
});
      


    
    
    elements = [];

    var ctrl=false;
document.addEventListener("keydown", function(event) {
  var key = event.which;
  switch(key) {
    case 17: ctrl = true; 
            console.log("entraste en control");
            break;  
  }
  //console.log(event.which);
});
document.addEventListener("keyup", function(event){
  var key = event.which;
  switch(key) {
    case 17: ctrl = false; 
            console.log("saliste de control");
            break;  
  }
}); 

var canvas_div = document.getElementById("myCanvas");
// Add event listener for `click` events.
canvas_div.addEventListener('click', function(event) {
    var canvasOffset = $("#myCanvas").offset();
    var offsetX = canvasOffset.left;
    var offsetY = canvasOffset.top;

    var x = event.pageX - offsetX ,
        y = event.pageY - offsetY;
   // console.log(offsetX);
   // console.log(offsetY);

  //  console.log(x, y);
    elements.forEach(function(element) {
        if (y > element.top && y < element.top + element.height && x > element.left && x < element.left + element.width) {
            if(ctrl)
            {
                selecteds.push(element);
                element.selected=true;
                renderGrid();
               /* context.fillStyle = '#FF0500';
                context.fillRect(element.left, element.top, element.width, element.height);
                context.fillStyle = '#FFFFFF';
                context.fillRect(element.left+2, element.top+2, element.width-4, element.height-4);*/
                console.log("an element was added");
            }
            else
            {
                selecteds = [];
                selecteds.push(element);
                elements.forEach(function(e)
                {
                    e.selected=false;
                });
                element.selected=true;
                renderGrid();
                
                inspector_altura.value=element.altura;
                 inspector_zumbadores.value=element.zumbadores;
               // console.log(element.altura);
            }
            console.log('clicked an element '+element.description);
        }
        else
            if(x<0 || x>50*colums|| y<0 ||y>50*rows)
        {
            selecteds = [];
            elements.forEach(function(e)
            {
                e.selected=false;
            });
            console.log("te saliste de "+element.width + " "+ element.height);
           renderGrid();
        }
    });

}, false);

function drawGrid()
{
    elements=[];
    for(i=0;i<rows;i++)
    {
        for(j=0;j<colums;j++)
        {
           elements.push({
               // colour: '#111111',
                width: 50,
                height: 50,
                top: 50*i,
                left: 50*j,
                description: "("+i+","+j+")",
                altura:0,
                selected:false,
                zumbadores:0

            }); 
        }
    }
    renderGrid();
}
drawGrid();
/*elements.push({
    colour: '#FF5500',
    width: 50,
    height: 50,
    top: 2,
    left: 50,
    description:"rojo"
});
elements.push({
    colour: '#33FF55',
    width: 10,
    height: 10,
    top: 27,
    left: 79,
    description:"verde"
});*/
// Render elements.
function renderGrid()
{
    elements.forEach(function(element) {
        if(element.selected)
        {
            context.fillStyle= '#FF0000';
        }
        else
        {
            context.fillStyle = '#000000';
        }
        context.fillRect(element.left, element.top, element.width, element.height);
        context.fillStyle = '#FFFFFF';
        context.fillRect(element.left+2, element.top+2, element.width-4, element.height-4);
        context.fillStyle = '#000000';
        context.fillText(element.altura,element.left+20,element.top+20);
         if(element.zumbadores>0)
        {
          context.fillStyle = '#00FF00';
          context.fillText(element.zumbadores,element.left+20,element.top+40);
          context.fillStyle = '#000000';
        }
    });
}
renderGrid();
function toJson(e)
{
    var response=(JSON.stringify(e));
    //console.log(response);
    return response;
}

$(".touchspin1").TouchSpin({
                buttondown_class: 'btn btn-white',
                buttonup_class: 'btn btn-white',
                initval: 0
            });

$("#save").on("click",function()
    {
        titulo = document.getElementById("titulo");
       // console.log(titulo.value);
        if(titulo.value == '')
        {
            alert("Escribe un título");
        }
        else
        {
            var myWorld = getWorld();
            $.ajax({
                url:'ajax.php?cmd=guardarMundo',
                method:"POST",
                data: {world:toJson(getWorld()).replace('\n',''),ligths:ligths,titulo:titulo.value},
                datatype:"json",
                success:function(response)
                {
                   // console.log(response);
                    if(response==1)
                    {
                    alert("Se guardó exitosamente");
                    }
                    else
                    {
                    alert("Error en la insercion a la BD");
                    }
                }


            });
        }
    });
 
</script>
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

<script type="text/javascript" src="Mat4.js"></script>
<script id="2d-vertex-shader" type="notjs">
attribute vec3 vertexColor;
attribute vec3 vertexPosition;
varying vec3 vertexColorVF; 
uniform mat4 modelMatrix;
uniform mat4 projMatrix;
uniform mat4 viewMatrix;
void main()
{
    vertexColorVF=vertexColor;  
    gl_Position = projMatrix*viewMatrix*modelMatrix*vec4(vertexPosition,1); // se quito la projMatrix y multiplica antes del modelMatrix
    
}
</script>
<script id="2d-fragment-shader" type="notjs">

varying highp vec3 vertexColorVF;
void main()
{
    gl_FragColor= vec4(vertexColorVF,1);
}

</script>
<script id="2d-vertex-shader2" type="notjs"></script>
<script id="2d-fragment-shader2" type="notjs"></script>
<script type="text/javascript" src="cylinder.js"></script>
<script type="text/javascript" src="player.js"></script>
<script type="text/javascript" src="zumbador.js"></script>
<script type="text/javascript" src="stats.js"></script>
<script type="text/javascript" src="webgl_utils.js"></script>
<script type="text/javascript" src="webgl_helper.js"></script>


<script src="js/plugins/pace/pace.min.js"></script>
<!-- TouchSpin -->

<!-- jQuery UI custom -->
<!-- <script src="js/jquery-ui.custom.min.js"></script> -->
<!-- iCheck -->
<script src="js/plugins/iCheck/icheck.min.js"></script>
<script data-main="release/js/common" src="js/require.js"></script>
<!-- <script src="js/inspinia.js"></script> -->
</body>
<style type="text/css">
    .input_title{
        box-sizing: border-box;
       line-height: 1.42857143;
        font-size: 14px;
        padding: 6px 12px;
        height: 34px;
    }
    #myCanvas{
        margin:30px 30px 30px 0px;
    }
</style>
<script type="text/javascript">
    $(function(){
    //    alert("asdasdasd");
        $(document.body).tooltip({ selector: "[i]" });

    });

</script>

    <link rel="stylesheet" href="css/jBox.css">

</html>
<?php } ?>