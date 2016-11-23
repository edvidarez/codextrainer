
function Player(gl,size, color) {
	console.log("color:"+color);
	var vertices,colores,nVertices,nIndices,Indexes;
	this.bufferIDs = new Array();
	this.vertices = new Array();
	this.colores = new Array();
	this.Indexes = new Array();

	this.bufferIDs[0] = gl.createBuffer();   //vertices
	this.bufferIDs[1] = gl.createBuffer();   //color
	this.bufferIDs[2] = gl.createBuffer();	//index


	//console.log("stacks: ",stacks);
	
	k=0;

	var ik=0,vk=0;
	
		// 4 vertices frontales
		this.vertices[k++] = -size;
		this.vertices[k++] = -size;
		this.vertices[k++] = -size;

		this.colores[k-3] = color[0];
		this.colores[k-2] = color[1];
		this.colores[k-1] = color[2];

		this.vertices[k++] = -size;
		this.vertices[k++] = size;
		this.vertices[k++] = -size;

		this.colores[k-3] = color[0];
		this.colores[k-2] = color[1];
		this.colores[k-1] = color[2];

		this.vertices[k++] = size;
		this.vertices[k++] = -size;
		this.vertices[k++] = -size;

		this.colores[k-3] = color[0];
		this.colores[k-2] = color[1];
		this.colores[k-1] = color[2];

		this.vertices[k++] = size;
		this.vertices[k++] = size;
		this.vertices[k++] = -size;

		this.colores[k-3] = color[0];
		this.colores[k-2] = color[1];
		this.colores[k-1] = color[2];

		//4 vertices traseros

		this.vertices[k++] = -size;
		this.vertices[k++] = -size;
		this.vertices[k++] = size;

		this.colores[k-3] = color[0];
		this.colores[k-2] = color[1];
		this.colores[k-1] = color[2];

		this.vertices[k++] = -size;
		this.vertices[k++] = size;
		this.vertices[k++] = size;

		this.colores[k-3] = color[0];
		this.colores[k-2] = color[1];
		this.colores[k-1] = color[2];

		this.vertices[k++] = size;
		this.vertices[k++] = -size;
		this.vertices[k++] = size;

		this.colores[k-3] = color[0];
		this.colores[k-2] = color[1];
		this.colores[k-1] = color[2];

		this.vertices[k++] = size;
		this.vertices[k++] = size;
		this.vertices[k++] = size;

		this.colores[k-3] = color[0];
		this.colores[k-2] = color[1];
		this.colores[k-1] = color[2];
		//console.log(k/3,"(",(currentRadius) * Math.round(Math.cos(currentAng)),			-length/2.0 + stackHeigth * (currentStack),			(currentRadius) * Math.round(Math.sin(currentAng)),")");
		
		this.Indexes= [0,1,2,3,6,7,4,5,0,1  ,1,5,3,7,7 ,0,0,4,2,6]; //
	
	gl.bindBuffer(gl.ARRAY_BUFFER,this.bufferIDs[0]);  
	gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(this.vertices),gl.STATIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER,this.bufferIDs[1]);
	gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(this.colores),gl.STATIC_DRAW);

	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.bufferIDs[2]);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(this.Indexes),gl.STATIC_DRAW);


}

function  playerBind(gl,c,vLoc,cLoc)
{

	gl.bindBuffer(gl.ARRAY_BUFFER,c.bufferIDs[0]);
	gl.enableVertexAttribArray(vLoc);
 	gl.vertexAttribPointer(vLoc, 3,gl.FLOAT,false,0,0);
	gl.bindBuffer(gl.ARRAY_BUFFER,c.bufferIDs[1]);
	gl.enableVertexAttribArray(cLoc);
 	gl.vertexAttribPointer(cLoc, 3,gl.FLOAT,false,0,0);
 	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,c.bufferIDs[2]);
    gl.enable(gl.DEPTH_TEST);
}

function playerDraw(gl,c)
{

	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,c.bufferIDs[2]);
	gl.drawElements(gl.TRIANGLE_STRIP,c.Indexes.length,gl.UNSIGNED_SHORT,0);
}

