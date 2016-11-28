define(function()
{
var stats = new Stats();
    stats.showPanel( 0); // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild( stats.dom );
  var player,foco;
var fragment_shader;
var vertexBuffer;
var positionBuffer;
var motionType = 0,lightMotion = 0;
var cameraAngle = 0,cameraX=0,cameraZ=0,cameraY=0,cameraAngleY=0,cameraPosX=0,cameraPosY=0;
var  angleSpeed = 7,speed = 7, playerAction =0,playerStackMtx;
var then=0,deltaTime,idleAnimStat=1;
var playerMtx;
var lightX=10,lightY=10,lightZ=20;

var ambientLight  = [1.0, 1.0,  1.0];
var lightColor  = [0.0, 1.0,  1.0];
var lightPosition = [10.0, 10.0,  20.0];

var materialA     = [0.3, 0.3,  0.3];
var materialD     = [0.6, 0.6,  0.6];

var materialS     = [0.7,0.7,0.7];
var exponent      = 64.0;


 // playerMtx = Mat4();
 function getWorldHeight(x,y){
    if(x<0 || y<0 || x>=globalx || y>=globaly)
        return -1;
     return world[0]['world'][y*10+x].altura;
   
    //return 0;
 }
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
var vertexPosLoc,vertexColLoc,vertexNorLoc,modelMatrixLoc,projMatrixLoc,viewMatrixLoc;
var vertexPosLoc2,vertexColLoc2,modelMatrixLoc2,projMatrixLoc2,viewMatrixLoc2;
var ambientLigthLoc,diffuseLigthLoc,ligthPositionLoc,materialALoc,materialDLoc;
var materialSLoc,cameraPositionLoc,exponentLoc,lightColorLoc;
var program,program_texture;
var gl;
var width=document.getElementById("canvas_div").offsetWidth;
  var canvas = document.getElementById("canvas");
  canvas.width=width;
  canvas.height=width-200;
  gl = canvas.getContext("webgl");
  if(!gl){
    alert("no WebGL for you");
  }
function initShaders()
{	
  
    var vertexShaderSource = document.getElementById("2d-vertex-shader").text;
    var fragmentShaderSource = document.getElementById("2d-fragment-shader").text;
    
   
    	var  vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
   		var  fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
   
   
   

    //crea el programa con el vertex y el fragment shader
    program = createProgram(gl, vertexShader, fragmentShader);
    //localizacion
   
    vertexPosLoc   = gl.getAttribLocation(program, "vertexPosition");
    vertexColLoc   = gl.getAttribLocation(program, "vertexColor");
    vertexNorLoc   = gl.getAttribLocation(program, "vertexNormal");
    modelMatrixLoc = gl.getUniformLocation(program, "modelMatrix");
    projMatrixLoc  = gl.getUniformLocation(program, "projMatrix");
    viewMatrixLoc = gl.getUniformLocation(program,"viewMatrix");

    ambientLightLoc   = gl.getUniformLocation(program, "ambientLight");
 // diffuseLightLoc     = gl.getUniformLocation(program, "diffuseLight");
  lightColorLoc    = gl.getUniformLocation(program,"lightColor");
  lightPositionLoc    = gl.getUniformLocation(program, "lightPosition");
  materialALoc        = gl.getUniformLocation(program, "materialA");
  materialDLoc        = gl.getUniformLocation(program, "materialD");
  //espectacular
  materialSLoc        = gl.getUniformLocation(program, "materialS");
  cameraPositionLoc   = gl.getUniformLocation(program, "cameraPosition");
  exponentLoc         = gl.getUniformLocation(program, "exponent");
/*

    var vertexShaderSource2 = document.getElementById("2d-vertex-shader2").text;
    var fragmentShaderSource2 = document.getElementById("2d-fragment-shader2").text;
    
   
      var  vertexShader2 = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource2);
      var  fragmentShader2 = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource2);
   
   
   

    //crea el programa con el vertex y el fragment shader
    program2 = createProgram(gl, vertexShader2, fragmentShader2);
*/
    //faltan los loc
  gl.useProgram(program);
  gl.uniform3fv(ambientLightLoc,   ambientLight);
  gl.uniform3fv(lightColorLoc,  lightColor);
  gl.uniform3fv(lightPositionLoc,  lightPosition);
  gl.uniform3fv(materialALoc,      materialA);
  gl.uniform3fv(materialDLoc,      materialD);
  gl.uniform3fv(materialSLoc,      materialS);
  gl.uniform1f(exponentLoc,      exponent);
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
  gl.enable(gl.BLEND);
  }
  function up()
  {
    cameraY--;
  }
  function down()
  {
    cameraY++;
  }
  function rotateUp()
  {
    cameraAngleY+=angleSpeed*deltaTime;
  }
  function rotateDown()
  {
    cameraAngleY-=angleSpeed*deltaTime;
  }
function rotateLeft(){
  cameraAngle += angleSpeed*deltaTime;
  console.log(cameraAngle);
}
function moveForward(){
  cameraX -= Math.sin(toRadians(cameraAngle)) * speed*deltaTime;
  cameraZ -= Math.cos(toRadians(cameraAngle)) * speed*deltaTime;

}
function  rotateRight(){
  cameraAngle -= angleSpeed * deltaTime;
//  console.log(cameraAngle);

}
function moveBackward(){
  cameraX += Math.sin(toRadians(cameraAngle)) * speed*deltaTime;
  cameraZ += Math.cos(toRadians(cameraAngle)) * speed*deltaTime;
}
function moveRigth()
{
  //cameraPosX +=speed;
   cameraPosX -= Math.sin(toRadians(cameraAngle-90)) * speed*deltaTime;
  cameraPosY -= Math.cos(toRadians(cameraAngle-90)) * speed*deltaTime;
}
function moveLeft()
{
  cameraPosX -= Math.sin(toRadians(cameraAngle+90)) * speed*deltaTime;
  cameraPosY -= Math.cos(toRadians(cameraAngle+90)) * speed*deltaTime;
}
  var angleZ = 0;
   var projMat;
 var myMap = [];
 var global_radius=2;
function createMap(){
      for(var k in world[0])
      {
        console.log(k);
        for(var o in world[0][k])
        {
           var color = [Math.random(),Math.random(),Math.random()];
    
        //  console.log(world[0][k][o].description);
          myMap.push(new Cylinder(gl,
            world[0][k][o].altura*(2)*Math.sqrt(2),
            global_radius,global_radius,
            4,
            world[0][k][o].altura,
            color,color));
        }
      }
   }
   var idleStat = 0;
   function idle(){


     idleStat+=0.003*idleAnimStat;
      if(idleStat>0.05 || idleStat<0)
      {
       // idleStat=0;
        idleAnimStat*=-1;
      }
      playerMtx = Mat4();
      var px,py,ph;
      px=player.position[0];
      py=player.position[1];
      ph=player.position[2];
      wh = getWorldHeight(px,py);
      if(getWorldHeight(px,py)<player.position[2])
      {
        player.position[2]--;
      }
      var world_unit = global_radius*Math.sqrt(2);
      playerMtx = translate(playerMtx,px*world_unit,5*idleStat+1+ph*world_unit,py*world_unit);
   //   console.log(player.orientation);
      playerMtx = rotateY(playerMtx,90*player.orientation);

     // playerMtx = scale(playerMtx,1+idleStat,1+idleStat,1+idleStat);

   }
  function avanza()
  { 
      switch(player.orientation)
      {
        case 0: player.position[1]--; break;
        case 1: player.position[0]--; break;
        case 2: player.position[1]++; break;
        case 3: player.position[0]++; break;
      }
      var px,py,ph;
      px=player.position[0];
      py=player.position[1];
      playerAction =0;
      if(getWorldHeight(px,py)>player.position[2])
      {
        alert("Haz chocado!");
        atras();
        playerAction = -1;   
      }
      if(getWorldHeight(px,py)==-1)
      {
        alert("Te saliste del mundo!");
        playerAction = -1;   
      }

      


  }
  function atras(){
    
     switch(player.orientation)
      {
        case 0: player.position[1]++; break;
        case 1: player.position[0]++; break;
        case 2: player.position[1]--; break;
        case 3: player.position[0]--; break;
      }
  }
  function giraIzquierda(){
      
       //aumentar
       player.orientation=(player.orientation+1)%4;
        playerAction = 0;
        console.log("giraIzquierda");
  }
  function brinca(){

      player.position[2]++;
      avanza();
      //regresar a idle una vez acabada la animacion
      playerAction =0;
  }

 function display(now)
 {
  stats.begin();
    
  now *= 0.015;
  // Subtract the previous time from the current time
  deltaTime = now - then;
 
  // Remember the current time for the next frame.
  then = now;
gl.clear(gl.COLOR_BUFFER_BIT| gl.DEPTH_BUFFER_BIT);
 gl.clearColor(0.3, 0.3, 0.25, 1);
  switch(motionType) {
   // case 0:rotateRight();break;
    case 1: moveForward(); break;
    case 2: moveBackward();    break;
    case 3: rotateRight();   break;
    case 4: rotateLeft(); break;
    case 5: up(); break;
    case 6: down(); break;
    case 7: rotateUp(); break;
    case 8: rotateDown(); break;
    case 9: moveLeft(); break;
    case 10: moveRigth(); break;
  }
 switch(lightMotion){
  case 1:lightX--; break;
  case 2: lightX++; break;
  case 3: lightZ++; break;
  case 4: lightZ--; break;
  case 5:lightY--; break;
  case 6: lightY ++; break;
 }
 gl.uniform3fv(lightPositionLoc,  [lightX,lightY,lightZ]);
  gl.useProgram(program);
  var vMat = Mat4();
  vMat = rotateX(vMat,-cameraAngleY);

    vMat = rotateY(vMat, -cameraAngle);
    vMat = translate(vMat, -cameraX-cameraPosX, cameraY, -cameraZ-cameraPosY);
    vMat = translate(vMat, -12.5, -10, -50);


  gl.uniformMatrix4fv(projMatrixLoc,false, matValues(projMat));
  gl.uniformMatrix4fv(viewMatrixLoc, false, matValues(vMat));

// var focoMat = mat4();
//  focoMat = translate(focoMat,lightX,lightY,lightZ);
//  playerBind(gl,foco,);
  //playerDraw(gl,foco);
  var cont =0;
for(var k in world[0])
      {
      //  console.log(k);
        for(var o in world[0][k])
        {
          var csMat = Mat4();
        // csMat = rotateY (csMat,-angleZ*2);
       //   csMat = rotateX(csMat,89);
       
          var csx=world[0][k][o].description[3];
          var csy = world[0][k][o].description[1];
          var h = world[0][k][o].altura;
          csMat = translate(csMat,
                            csx*global_radius*Math.sqrt(2) ,//+ cont%globalx * 0.00001
                            h*global_radius*Math.sqrt(2)/2,
                            csy*global_radius*Math.sqrt(2) );//+ cont/globaly * 0.00001
          csMat = rotateY (csMat,45);
          cylinderBind(gl,myMap[cont],vertexPosLoc,vertexColLoc,vertexNorLoc);  
          gl.uniformMatrix4fv(projMatrixLoc,false, matValues(projMat));
          gl.uniformMatrix4fv(modelMatrixLoc,0, matValues(csMat));
          cylinderDraw(gl,myMap[cont]);

          cylinderBindTip(gl,myMap[cont],vertexPosLoc,vertexColLoc,vertexNorLoc);
          cylinderDrawTip(gl,myMap[cont++]);
        }
      }

/*var csMat2 = Mat4();
  //csMat2 = rotateY(csMat2,45);
 // csMat2 = scale(csMat2,3,1,1);
 //csMat2 = translate(csMat2,-1,0,0);
  csMat2 = rotateY (csMat2,angleZ++);
  csMat2 = rotateX(csMat2,89);
  csMat2 = rotateY (csMat2,angleZ);
  csMat2 = translate(csMat2,15,0,-50);

 
  
  cylinderBind(gl,myCylinder2,vertexPosLoc,vertexColLoc);
  gl.uniformMatrix4fv(projMatrixLoc,false, matValues(projMat));
  gl.uniformMatrix4fv(modelMatrixLoc,0, matValues(csMat2));
  cylinderDraw(gl,myCylinder2);

  cylinderBindTip(gl,myCylinder2,vertexPosLoc,vertexColLoc);
  cylinderDrawTip(gl,myCylinder2);*/

    //player
   // playerMtx = translate(playerMtx,5*global_radius*Math.sqrt(2),1,5*global_radius*Math.sqrt(2));
     switch(playerAction)
  {
    case 0 : idle();break;
    case 1 : avanza(); break;
    case 2 : giraIzquierda(); break;
    case 3 : brinca(); break;
    default : break;
  }
    playerBind(gl,player,vertexPosLoc,vertexColLoc,vertexNorLoc);
    gl.uniformMatrix4fv(projMatrixLoc,false, matValues(projMat));
    gl.uniformMatrix4fv(modelMatrixLoc,0, matValues(playerMtx));
    playerDraw(gl,player);

    //player face
 
    playerFaceBind(gl,player,vertexPosLoc,vertexColLoc,vertexNorLoc);
    gl.uniformMatrix4fv(projMatrixLoc,false, matValues(projMat));
    gl.uniformMatrix4fv(modelMatrixLoc,0, matValues(playerMtx));
    playerFaceDraw(gl,player);

    //player compass
    playerCompassMtx = rotateY(playerMtx,idleStat*100 - player.orientation*90);
    playerCompassBind(gl,player,vertexPosLoc,vertexColLoc,vertexNorLoc);
    gl.uniformMatrix4fv(projMatrixLoc,false, matValues(projMat));
    gl.uniformMatrix4fv(modelMatrixLoc,0, matValues(playerCompassMtx));
    playerCompassDraw(gl,player);



    stats.end();
   // setTimeout(function() {
    
     requestAnimationFrame(display);
    
   
  // },1000/67);
   
 }

 //MAIN
	
document.addEventListener("keydown", function(event) {
  var key = event.which;
  console.log(playerAction);
  switch(key) {
    case 65: motionType = 9; break; //A
    case 68: motionType = 10; break; //D
    case 87: motionType = 1; break; //W
    case 83: motionType = 2; break; //S
    case 85: motionType = 5; break; //U
    case 73: motionType = 7; break; //I
    case 74: motionType = 6; break; //J
    case 75: motionType = 8; break; //K
    case 81: motionType = 4; break; //Q
    case 69: motionType = 3; break; //E
   

   case 100: lightMotion = 1; break; //4
   case 98: lightMotion = 3; break;  //2
   case 104: lightMotion = 4; break;  //8
   case 102: lightMotion = 2; break;  //6
   case 99: lightMotion = 5; break;   //3
   case 105: lightMotion = 6; break;  //9

  }
  if(playerAction!=-1)
  {
    switch(key)
    {
       case 32: playerAction = 3; break; //--
    case 37: playerAction = 2; break; //<-
    case 38: playerAction = 1; break; //^
    }
  }
  console.log(event.which);

});
document.addEventListener("keyup", function(event){
  motionType=0;
  lightMotion=0;
}); 
$(document).ready(function(){
	 $.ajax({async:false,url: "shaders/vs/gourand2.c", success: function(result){

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

  projMat = matrixPerspective(45,aspect,-1,-1000);
  //projMat = matrixOrtho(-30,30,-30,30,-30,30);
  createMap();
  //
  var color11 = [0.9,0.4,0.7];
  var color21 = [0.3,0.1,0.2];
  var playerColor = [51/255,153/255,1];
  myCylinder = new Cylinder(gl,5,2,1,5,10,color11,color21);
  color1 = [0.4,0.2,0.7];
  color2 = [0.2,0.74,0.537];
  myCylinder2 = new Cylinder(gl,5,0.5,2,4,5,color11,color21);
  player = new Player(gl,1.1,playerColor,1,[2,2,0]);
  foco = new Player(gl,0.2,playerColor,1,[0,0,0]);
  console.log(myCylinder2.tapa_v.length);
  console.log(myCylinder2.tapa_c.length);
  //
  display();
  requestAnimationFrame(display);

  return{
  	avanzar:avanza(),
  	girarIzquierda:giraIzquierda();
  }
 
});
   
   // three 2d points

   
	








})