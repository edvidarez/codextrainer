/*function initTextures() {
  cubeTexture = gl.createTexture();
  cubeImage = new Image();
  cubeImage.onload = function() { 
  	handleTextureLoaded(cubeImage, cubeTexture); 
  }
  cubeImage.src = "cubetexture.png";
}*/

/*function handleTextureLoaded(image, texture) {
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
  gl.generateMipmap(gl.TEXTURE_2D);
  gl.bindTexture(gl.TEXTURE_2D, null);
}*/
function Player(gl,size, color,orientation,position) {
	//console.log("color:"+color);
	var vertices,colores,nVertices,nIndices,Indexes;
	var brujula_vetices,brujula_color,brujula_indexes;
	var cara_vertices,cara_colores,cara_indexes;
	var orientation,position,brujula_normals;
	var normals;
	this.brujula_normals = new Array();
	this.bufferIDs = new Array();
	this.vertices = new Array();
	this.normals = new Array();
	this.colores = new Array();
	this.Indexes = new Array();
	this.cara_colores = new Array();
	this.position = position;
	this.orientation = orientation;  //1: norte, 2:oeste, 3:sur, 4:este
	this.bufferIDs[0] = gl.createBuffer();   //vertices
	this.bufferIDs[1] = gl.createBuffer();   //color
	this.bufferIDs[2] = gl.createBuffer();	//index
	this.bufferIDs[10] = gl.createBuffer();	//index

	this.bufferIDs[3] = gl.createBuffer();   //vertices
	this.bufferIDs[4] = gl.createBuffer();   //color
	this.bufferIDs[5] = gl.createBuffer();	//index
	this.bufferIDs[11] = gl.createBuffer();	//index

	this.bufferIDs[6] = gl.createBuffer();   //vertices
	this.bufferIDs[7] = gl.createBuffer();   //color
	this.bufferIDs[8] = gl.createBuffer();	//index

	this.bufferIDs[9] = gl.createBuffer();	//texture



	//console.log("stacks: ",stacks);
	
	k=0;

	var ik=0,vk=0;
	
		// 4 vertices frontales
		this.vertices = [
							-size,	-size,	-size,
							-size,	 size,	-size,
							 size,	-size,	-size,
							 size,	 size,	-size,

							-size,	-size,	size,
							-size, 	 size,	size,
							 size,	-size,	size,
							 size,	 size,	size
		];

		this.normals = [	
							-1,-1,-1,
							-1,1,-1,
							1,-1,-1,
							1,1,-1,

							-1,-1,1,
							-1,1,1,
							1,-1,1,
							1,1,1
							];

		for(i = 0;i<24;i++)
		{
			this.colores[i]= color[i%3];
		}
		
		//console.log(k/3,"(",(currentRadius) * Math.round(Math.cos(currentAng)),			-length/2.0 + stackHeigth * (currentStack),			(currentRadius) * Math.round(Math.sin(currentAng)),")");
		
		this.Indexes= [0,1,2,3,6,7,4,5,0,1  ,1,5,3,7,7 ,0,0,4,2,6]; //


		this.brujula_vetices=[
								-size*0.2, size+0.001,0,
								0,	size+0.001,	-size*0.8,
								size*0.2, size+0.001,0,
								size*0.2, size+0.001,0,
								0,	size+0.001,	size*0.8,
								-size*0.2, size+0.001,0
		];
		this.brujula_color = [
								1,0,0,
								1,0,0,
								1,0,0,
								1,1,1,
								1,1,1,
								1,1,1
		];
		this.brujula_normals = [
								0,1,0,
								0,0,1,
								0,1,0,
								0,1,0,
								0,0,1,
								0,1,0
								];
		this.brujula_indexes = [0,1,2,3,4,5];


		/*
			-size,	-size,	-size,
			-size,	 size,	-size,
			 size,	-size,	-size,
			 size,	 size,	-size,
		*/
		var pz = size/6;  //unidades para mantener la proporcion de la cara con respecto del tamaño
		this.cara_vertices= [
			-4*pz, pz, -size-0.01,
			-4*pz, 4*pz, -size-0.01,
			-pz, pz, -size-0.01,
			-pz, 4*pz, -size-0.01,  

			pz, pz, -size-0.01,
			pz, 4*pz, -size-0.01,  
			4*pz, pz, -size-0.01,
			4*pz, 4*pz, -size-0.01,

			-4*pz, -4*pz, -size-0.01,
			-4*pz, -pz, -size-0.01,
			4*pz, -4*pz, -size-0.01,
			4*pz, -pz, -size-0.01
			
		];

		this.cara_indexes = [0,1,2,3,3,4,4,5,6,7,7,8,8,9,10,11];
		for(i=0;i<36;i++)
		{
			this.cara_colores[i] = 1;
		}



	  
	var textureCoordinates = [
	  // Front
	  0.0,  0.0,
	  1.0,  0.0,
	  1.0,  1.0,
	  0.0,  1.0,
	  // Back
	  0.0,  0.0,
	  1.0,  0.0,
	  1.0,  1.0,
	  0.0,  1.0,
	  // Top
	  0.0,  0.0,
	  1.0,  0.0,
	  1.0,  1.0,
	  0.0,  1.0,
	  // Bottom
	  0.0,  0.0,
	  1.0,  0.0,
	  1.0,  1.0,
	  0.0,  1.0,
	  // Right
	  0.0,  0.0,
	  1.0,  0.0,
	  1.0,  1.0,
	  0.0,  1.0,
	  // Left
	  0.0,  0.0,
	  1.0,  0.0,
	  1.0,  1.0,
	  0.0,  1.0
	];
	/*gl.bindBuffer(gl.ARRAY_BUFFER, this.bufferIDs[9]);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordinates),gl.STATIC_DRAW);*/
	
	
	gl.bindBuffer(gl.ARRAY_BUFFER,this.bufferIDs[0]);  
	gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(this.vertices),gl.STATIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER,this.bufferIDs[1]);
	gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(this.colores),gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER,this.bufferIDs[10]);
	gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(this.normals),gl.STATIC_DRAW);



	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.bufferIDs[2]);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(this.Indexes),gl.STATIC_DRAW);

	// brujula
	gl.bindBuffer(gl.ARRAY_BUFFER,this.bufferIDs[3]);  
	gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(this.brujula_vetices),gl.STATIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER,this.bufferIDs[4]);
	gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(this.brujula_color),gl.STATIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER,this.bufferIDs[11]);
	gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(this.brujula_normals),gl.STATIC_DRAW);

	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.bufferIDs[5]);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(this.brujula_indexes),gl.STATIC_DRAW);




    gl.bindBuffer(gl.ARRAY_BUFFER,this.bufferIDs[6]);  
	gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(this.cara_vertices),gl.STATIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER,this.bufferIDs[7]);
	gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(this.cara_colores),gl.STATIC_DRAW);

	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.bufferIDs[8]);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(this.cara_indexes),gl.STATIC_DRAW);


}

function  playerBind(gl,c,vLoc,cLoc,nLoc)
{

	gl.bindBuffer(gl.ARRAY_BUFFER,c.bufferIDs[0]);
	gl.enableVertexAttribArray(vLoc);
 	gl.vertexAttribPointer(vLoc, 3,gl.FLOAT,false,0,0);

	gl.bindBuffer(gl.ARRAY_BUFFER,c.bufferIDs[1]);
	gl.enableVertexAttribArray(cLoc);
 	gl.vertexAttribPointer(cLoc, 3,gl.FLOAT,false,0,0);

	gl.bindBuffer(gl.ARRAY_BUFFER,c.bufferIDs[10]);
	gl.enableVertexAttribArray(nLoc);
 	gl.vertexAttribPointer(nLoc, 3,gl.FLOAT,false,0,0);

 	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,c.bufferIDs[2]);
 	


    gl.enable(gl.DEPTH_TEST);
}

function playerDraw(gl,c)
{

	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,c.bufferIDs[2]);
	gl.drawElements(gl.TRIANGLE_STRIP,c.Indexes.length,gl.UNSIGNED_SHORT,0);
}

function  playerCompassBind(gl,c,vLoc,cLoc,nLoc)
{
	//console.log("a");
	gl.bindBuffer(gl.ARRAY_BUFFER,c.bufferIDs[3]);
	gl.enableVertexAttribArray(vLoc);
 	gl.vertexAttribPointer(vLoc, 3,gl.FLOAT,false,0,0);

	gl.bindBuffer(gl.ARRAY_BUFFER,c.bufferIDs[4]);
	gl.enableVertexAttribArray(cLoc);
 	gl.vertexAttribPointer(cLoc, 3,gl.FLOAT,false,0,0);


	gl.bindBuffer(gl.ARRAY_BUFFER,c.bufferIDs[11]);
	gl.enableVertexAttribArray(nLoc);
 	gl.vertexAttribPointer(nLoc, 3,gl.FLOAT,false,0,0);

 	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,c.bufferIDs[5]);


    gl.enable(gl.DEPTH_TEST);
}

function playerCompassDraw(gl,c)
{

	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,c.bufferIDs[5]);
	gl.drawElements(gl.TRIANGLE_STRIP,c.brujula_indexes.length,gl.UNSIGNED_SHORT,0);
	//console.log("playerCompassDraw");
}
function  playerFaceBind(gl,c,vLoc,cLoc)
{

	gl.bindBuffer(gl.ARRAY_BUFFER,c.bufferIDs[6]);
	gl.enableVertexAttribArray(vLoc);
 	gl.vertexAttribPointer(vLoc, 3,gl.FLOAT,false,0,0);

	gl.bindBuffer(gl.ARRAY_BUFFER,c.bufferIDs[7]);
	gl.enableVertexAttribArray(cLoc);
 	gl.vertexAttribPointer(cLoc, 3,gl.FLOAT,false,0,0);
 	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,c.bufferIDs[8]);

    gl.enable(gl.DEPTH_TEST);
}

function playerFaceDraw(gl,c)
{

	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,c.bufferIDs[8]);
	gl.drawElements(gl.TRIANGLE_STRIP,c.cara_indexes.length,gl.UNSIGNED_SHORT,0);
	//console.log("playerCompassDraw");
}
