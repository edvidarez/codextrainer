
<script src="http://webglfundamentals.org/webgl/resources/webgl-utils.js"></script>
<script src="http://webglfundamentals.org/webgl/resources/webgl-lessons-helper.js"></script>
<script src="jquery.js"></script>
<script type="text/javascript" src="Mat4.js"></script>
<script id="2d-vertex-shader" type="notjs"></script>
<script id="2d-fragment-shader" type="notjs"></script>


<script type="text/javascript">
var fragment_shader;
var vertexBuffer;
var positionBuffer;
var motionType = 0;
var cameraAngle = 0,cameraX=0,cameraZ=0;
var  angleSpeed = 1.5,speed = 1.5;;

function createShader(gl, type, source) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, source);
   //console.log(source);
    gl.compileShader(shader);
    var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (success) {
      return shader;
    }
     
    console.log(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    
}
function createProgram(gl, vertexShader, fragmentShader) {
  var program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  var success = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (success) {
    return program;
  }
 
  console.log(gl.getProgramInfoLog(program));
  gl.deleteProgram(program);
}
var vertexPosLoc,vertexColLoc,modelMatrixLoc,projMatrixLoc,viewMatrixLoc;
var program;
var gl;
function initShaders()
{	
  var width=document.getElementById("canvas_div").offsetWidth;
  var canvas = document.getElementById("canvas");
  canvas.width=width;
  canvas.height=width-200;
	gl = canvas.getContext("webgl");
	if(!gl){
		alert("no WebGL for you");
	}
    var vertexShaderSource = document.getElementById("2d-vertex-shader").text;
    var fragmentShaderSource = document.getElementById("2d-fragment-shader").text;
    
   
    	var  vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
   		var  fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
   
   
   

    //crea el programa con el vertex y el fragment shader
    program = createProgram(gl, vertexShader, fragmentShader);
    //localizacion
   
    vertexPosLoc   = gl.getAttribLocation(program, "vertexPosition");
    vertexColLoc   = gl.getAttribLocation(program, "vertexColor");
    modelMatrixLoc = gl.getUniformLocation(program, "modelMatrix");
    projMatrixLoc  = gl.getUniformLocation(program, "projMatrix");
    viewMatrixLoc = gl.getUniformLocation(program,"viewMatrix");
 }
 function createShape(){
    var squarePos = [ -2, -1,  3, //0
                    -2,  1,  3,//1
                     2, -1,  3,//2
                     2,  1,  3,//3


                     2, -1,  3,
                     2,  1,  3,
                     2, -1, -3,                 
                     2,  2, -3,


                     2,  1,  3,
                    -2,  1,  3,
                     2,  2, -3,
                    -2,  2, -3,

                    -2, -1, -3,
                    -2,  2, -3,
                    -2, -1,  3,
                    -2,  1,  3,



              -2,2,-3,
              -2,-1,-3,

              2,2,-3,
              2,-1,-3,

              -2,-1,-3,
              -2,-1,3,
              2,-1,-3,
              2,-1,3



  ];

  var squareCol= [ 0,  0,  1,
                   0,  0,  1,
                   0,  0,  1,
                   0,  0,  1,

               1,  0,  0,
               1,  0,  0,
               1,  0,  0,
               1,  0,  0,

               1,  1,  0,
               1,  1,  0,
               1,  1,  0,
               1,  1,  0,

               0,  1,  1,
               0,  1,  1,
               0,  1,  1,
               0,  1,  1
  ];
  var roomPos = [    -15,  5, -35,   // Muro frontal (azul)
                     -15, -5, -35,
                      15,  5, -35,
                      15, -5, -35,

                      15,  5,  35,
                      15, -5,  35,
                     -15,  5,  35,  // Muro atrás del observador (rojo)
                     -15, -5,  35,

                     -15, -5, -35,  // Piso (amarillo)
                     -15, -5,  35,  //
                      15, -5, -35,  //
                      15, -5,  35,  //

                    15,  5, -35,  // Techo (morado)
                    15,  5,  35,  //
                   -15,  5, -35,  //
                   -15,  5,  35,  //
  ];

  var squareIndex = [  0,  1,  2,  3, 3,4,
                          4,  5,  6,  7, 7, 8,
                          8,  9, 10, 11, 11,12,
                         12, 13, 14, 15
  ];

  positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer); 
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(roomPos), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(vertexPosLoc);
  gl.vertexAttribPointer(vertexPosLoc, 3,gl.FLOAT,false,0,0);

  var colorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER,colorBuffer);
  gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(squareCol),gl.STATIC_DRAW);
  gl.enableVertexAttribArray(vertexColLoc);
  gl.vertexAttribPointer(vertexColLoc, 3,gl.FLOAT,false,0,0);



  vertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,vertexBuffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(squareIndex),gl.STATIC_DRAW);
  
  //gl.enable(gl.CULL_FACE);
 //gl.frontFace(gl.CW);
  gl.enable(gl.DEPTH_TEST);

  }
function rotateLeft(){
  cameraAngle += angleSpeed;
  console.log(cameraAngle);
}
function moveForward(){
  cameraX -= Math.sin(toRadians(cameraAngle)) * speed;
  cameraZ -= Math.cos(toRadians(cameraAngle)) * speed;

}
function  rotateRight(){
  cameraAngle -= angleSpeed;
//  console.log(cameraAngle);

}
function moveBackward(){
  cameraX += Math.sin(toRadians(cameraAngle)) * speed;
  cameraZ += Math.cos(toRadians(cameraAngle)) * speed;
}
  var angleZ = 0;
   var projMat
 function display()
 {


 
  switch(motionType) {
    case 1: moveForward(); break;
    case 2: moveBackward();    break;
    case 3: rotateRight();   break;
    case 4: rotateLeft();
  }
  gl.useProgram(program);
  var vMat = Mat4();
    vMat = translate(vMat, -cameraX, 0, -cameraZ);

  vMat = rotateY(vMat, -cameraAngle);
 
  gl.uniformMatrix4fv(projMatrixLoc,false, matValues(projMat));
  gl.uniformMatrix4fv(viewMatrixLoc, false, matValues(vMat));

  
  var csMat = Mat4();
	gl.clearColor(0, 0.550, 0.25, 1);
	gl.clear(gl.COLOR_BUFFER_BIT| gl.DEPTH_BUFFER_BIT);
	

 // gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vertexBuffer); 
  //console.log(matValues(projMat));
  gl.uniformMatrix4fv(modelMatrixLoc,false, matValues(csMat));
  gl.drawElements(gl.TRIANGLE_STRIP,22, gl.UNSIGNED_SHORT, 0);
  //gl.drawArrays(gl.TRIANGLE_STRIP,0,4);
    

     requestAnimationFrame(display);
   
 }

 //MAIN
	
document.addEventListener("keydown", function(event) {
  var key = event.which;
  switch(key) {
    case 65: motionType = 4; break; //A
    case 68: motionType = 3; break; //D
    case 87: motionType = 1; break; //W
    case 83: motionType = 2; break; //S
  }
  //console.log(event.which);
});
document.addEventListener("keyup", function(event){
  motionType=0;
}); 
$(document).ready(function(){
	 $.ajax({async:false,url: "shaders/vs/camera.c", success: function(result){

        $("#2d-vertex-shader").html(result);
    }});
    $.ajax({async:false,url: "shaders/fs/color.c", success: function(result){
    	
        $("#2d-fragment-shader").html(result);
        	initShaders();
        	
    }});
  createShape();


  projMat = Mat4();
  var aspect =  gl.canvas.width / gl.canvas.height;
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  projMat = matrixPerspective(53,aspect,-1,-1000);


  display();
     requestAnimationFrame(display);
 
});
   
   // three 2d points

   
	









</script>
</html>