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
                console.log(element.altura);
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
                selected:false

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
            context.fillStyle = element.colour;
        }
        context.fillRect(element.left, element.top, element.width, element.height);
        context.fillStyle = '#FFFFFF';
        context.fillRect(element.left+2, element.top+2, element.width-4, element.height-4);
        context.fillStyle = '#000000';
        context.fillText(element.altura,element.left+20,element.top+20);
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
attribute vec3 vertexPosition;
attribute vec3 vertexColor;
attribute vec3 vertexNormal;

uniform mat4 modelMatrix;
uniform mat4 projMatrix;
uniform mat4 viewMatrix;

varying vec3 worldVertexPosition;
varying vec3 worldVertexNormal;
varying highp vec3 vertexColorVF;
mat4 inverse(mat4 m) {
    float
        a00 = m[0][0], a01 = m[0][1], a02 = m[0][2], a03 = m[0][3],
        a10 = m[1][0], a11 = m[1][1], a12 = m[1][2], a13 = m[1][3],
        a20 = m[2][0], a21 = m[2][1], a22 = m[2][2], a23 = m[2][3],
        a30 = m[3][0], a31 = m[3][1], a32 = m[3][2], a33 = m[3][3],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32,

        det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    return mat4(
        a11 * b11 - a12 * b10 + a13 * b09,
        a02 * b10 - a01 * b11 - a03 * b09,
        a31 * b05 - a32 * b04 + a33 * b03,
        a22 * b04 - a21 * b05 - a23 * b03,

        a12 * b08 - a10 * b11 - a13 * b07,
        a00 * b11 - a02 * b08 + a03 * b07,
        a32 * b02 - a30 * b05 - a33 * b01,
        a20 * b05 - a22 * b02 + a23 * b01,

        a10 * b10 - a11 * b08 + a13 * b06,
        a01 * b08 - a00 * b10 - a03 * b06,
        a30 * b04 - a31 * b02 + a33 * b00,
        a21 * b02 - a20 * b04 - a23 * b00,

        a11 * b07 - a10 * b09 - a12 * b06,
        a00 * b09 - a01 * b07 + a02 * b06,
        a31 * b01 - a30 * b03 - a32 * b00,
        a20 * b03 - a21 * b01 + a22 * b00) / det;
}
mat4 transpose(mat4 m) {
    return mat4(m[0][0], m[1][0], m[2][0], m[3][0],
                m[0][1], m[1][1], m[2][1], m[3][1],
                m[0][2], m[1][2], m[2][2], m[3][2],
                m[0][3], m[1][3], m[2][3], m[3][3]);
}
void main() {
  vertexColorVF = vertexColor;
  vec4 worldPosition = modelMatrix * vec4(vertexPosition, 1);
  gl_Position = projMatrix * viewMatrix * worldPosition;

  worldVertexPosition = worldPosition.xyz;

  mat4 G  = transpose(inverse(modelMatrix));
  worldVertexNormal = (G * vec4(vertexNormal, 0)).xyz;
}
</script>
<script id="2d-fragment-shader" type="notjs">

varying highp vec3 worldVertexPosition;
varying highp vec3 worldVertexNormal;
varying highp vec3 vertexColorVF;
uniform highp vec3 cameraPosition;
uniform highp vec3 ambientLight;

uniform highp vec3 lightColor;
uniform highp vec3 lightPosition;
uniform highp float exponent;

uniform highp vec3 materialA;
uniform highp vec3 materialD;
uniform highp vec3 materialS;


highp vec3  clamp_v(highp vec3 v, highp float minVal, highp float maxVal)
{
  return vec3(min(max(v[0], minVal), maxVal),min(max(v[1], minVal), maxVal),min(max(v[2], minVal), maxVal));
}

highp float clamp_f(highp float x, highp float minVal, highp float maxVal)
{
  return min(max(x, minVal), maxVal);
}

void main()
{
  highp vec3 n  = normalize(worldVertexNormal);

  highp vec3 tempPixelColor = vec3(0, 0, 0);

  highp vec3 l;
  highp float factorD;
  highp vec3 v = normalize(cameraPosition - worldVertexPosition);
  highp vec3 r;
  highp float factorS;


	l = normalize(lightPosition - worldVertexPosition);
	factorD = clamp_f(dot(l, n), 0.0, 1.0);
	r = normalize((n * 2.0 )  * dot(n, l) - l);
	factorS = clamp_f(pow(dot(r, v), exponent), 0.0, 1.0);
	tempPixelColor += (ambientLight *  materialA +
                lightColor * (materialD * factorD + materialS * factorS)).rgb;


  gl_FragColor =  vec4(clamp_v(tempPixelColor, 0.0, 1.0), 1.0);
}
</script>
<script id="2d-vertex-shader2" type="notjs"></script>
<script id="2d-fragment-shader2" type="notjs"></script>
<script type="text/javascript" src="cylinder.js"></script>
<script type="text/javascript" src="player.js"></script>
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