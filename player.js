
function Player(gl,size, color) {
	console.log("color:"+color);
	var vertices,colores,nVertices,nIndices,Indexes,brujula_vetices,brujula_color,brujula_indexes;
	this.bufferIDs = new Array();
	this.vertices = new Array();
	this.colores = new Array();
	this.Indexes = new Array();

	this.bufferIDs[0] = gl.createBuffer();   //vertices
	this.bufferIDs[1] = gl.createBuffer();   //color
	this.bufferIDs[2] = gl.createBuffer();	//index

	this.bufferIDs[3] = gl.createBuffer();   //vertices
	this.bufferIDs[4] = gl.createBuffer();   //color
	this.bufferIDs[5] = gl.createBuffer();	//index


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

		for(i = 0;i<24;i++)
		{
			this.colores[i]= color[i%3];
		}
		
		//console.log(k/3,"(",(currentRadius) * Math.round(Math.cos(currentAng)),			-length/2.0 + stackHeigth * (currentStack),			(currentRadius) * Math.round(Math.sin(currentAng)),")");
		
		this.Indexes= [0,1,2,3,6,7,4,5,0,1  ,1,5,3,7,7 ,0,0,4,2,6]; //


		this.brujula_vetices=[
								-size*0.2, size+0.001,0,
								0,	size+0.001,	size*0.8,
								size*0.2, size+0.001,0,
								size*0.2, size+0.001,0,
								0,	size+0.001,	-size*0.8,
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
		this.brujula_indexes = [0,1,2,3,4,5];
	
	gl.bindBuffer(gl.ARRAY_BUFFER,this.bufferIDs[0]);  
	gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(this.vertices),gl.STATIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER,this.bufferIDs[1]);
	gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(this.colores),gl.STATIC_DRAW);

	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.bufferIDs[2]);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(this.Indexes),gl.STATIC_DRAW);

	// brujula
	gl.bindBuffer(gl.ARRAY_BUFFER,this.bufferIDs[3]);  
	gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(this.brujula_vetices),gl.STATIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER,this.bufferIDs[4]);
	gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(this.brujula_color),gl.STATIC_DRAW);

	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.bufferIDs[5]);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(this.brujula_indexes),gl.STATIC_DRAW);

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

function  playerCompassBind(gl,c,vLoc,cLoc)
{

	gl.bindBuffer(gl.ARRAY_BUFFER,c.bufferIDs[3]);
	gl.enableVertexAttribArray(vLoc);
 	gl.vertexAttribPointer(vLoc, 3,gl.FLOAT,false,0,0);

	gl.bindBuffer(gl.ARRAY_BUFFER,c.bufferIDs[4]);
	gl.enableVertexAttribArray(cLoc);
 	gl.vertexAttribPointer(cLoc, 3,gl.FLOAT,false,0,0);
 	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,c.bufferIDs[5]);

    gl.enable(gl.DEPTH_TEST);
}

function playerCompassDraw(gl,c)
{

	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,c.bufferIDs[5]);
	gl.drawElements(gl.TRIANGLE_STRIP,c.brujula_indexes.length,gl.UNSIGNED_SHORT,0);
	console.log("playerCompassDraw");
}

