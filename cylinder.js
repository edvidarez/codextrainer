
function Cylinder(gl,length,bottomRadius,topRadius,slices,stacks, bottomColor, topColor) {
	var vertices,colores,nVertices,nIndices,vertexID,Indexes,tapa_v,tapa_c,tapa_x;
	this.bufferIDs = new Array();
	this.vertices = new Array();
	this.colores = new Array();
	this.Indexes = new Array();
	this.tapa_v = new Array();
	this.tapa_c = new Array();
	this.tapa_x = new Array();
	this.bufferIDs[0] = gl.createBuffer();   //vertices
	this.bufferIDs[1] = gl.createBuffer();   //color
	this.bufferIDs[2] = gl.createBuffer();	//index

	this.bufferIDs[3] = gl.createBuffer();  //tapa_v
	this.bufferIDs[4] = gl.createBuffer();  //tapa_c
	this.bufferIDs[5] = gl.createBuffer();  //tapa_x

	this.nVertices = stacks * 2 * (slices+1);
	this.nIndices = nVertices + (stacks-1);
	//console.log("stacks: ",stacks);
	stackHeigth = 1.0*length/stacks;
	currentAng = 0.0;
	k=0;
	currentRadius = bottomRadius;
	RadiusDelta = (topRadius-bottomRadius)/stacks;
	currentStack = 0 ;
	var i;
	currentIndex =0;
	var currentSlice =0;
	var currentLength = -length/2.0;
	var ik=0,vk=0;
	for(i=0;i<this.nVertices/2;i++)
	{
		currentAng=currentSlice++*( 2*Math.PI)/(slices) ;
		this.vertices[k++] = currentRadius * (Math.cos(currentAng));
		this.vertices[k++] = currentLength;
		this.vertices[k++] = currentRadius * (Math.sin(currentAng));

		this.colores[k-3] = (bottomColor[0]-topColor[0])/stacks * currentStack +bottomColor[0];
		this.colores[k-2] = (bottomColor[1]-topColor[1])/stacks * currentStack +bottomColor[1];
		this.colores[k-1] = (bottomColor[2]-topColor[2])/stacks * currentStack +bottomColor[2];
		//console.log(k/3,"(",(currentRadius) * Math.round(Math.cos(currentAng)),			-length/2.0 + stackHeigth * (currentStack),			(currentRadius) * Math.round(Math.sin(currentAng)),")");
		
		this.vertices[k++] = (currentRadius + RadiusDelta) * Math.cos(currentAng);
		this.vertices[k++] = currentLength + length/stacks;
		this.vertices[k++] = (currentRadius+RadiusDelta) * Math.sin(currentAng);
		//console.log(k/3,"(",(currentRadius) * Math.round(Math.cos(currentAng)),-length/2.0 + stackHeigth * (currentStack+1),(currentRadius) * Math.round(Math.sin(currentAng)),")");
		
		this.Indexes[ik++]=vk++;
		this.Indexes[ik++]=vk++;
		
		//console.log(k/3);

		this.colores[k-3] = (bottomColor[0]-topColor[0])/stacks * currentStack +bottomColor[0];
		this.colores[k-2] = (bottomColor[1]-topColor[1])/stacks * currentStack +bottomColor[1];
		this.colores[k-1] = (bottomColor[2]-topColor[2])/stacks * currentStack +bottomColor[2];

		
		if(currentSlice == (slices+1))
		{
			this.Indexes[ik++]=vk-1;
			this.Indexes[ik++]=vk;
			
			//console.log("se llego al limite se slices");
			currentStack++;
			currentRadius += RadiusDelta;
			currentSlice=0;
			currentLength += length/stacks;
		}
	}
	var t=0,tx=0;
	this.tapa_v[t++] = 0;
	this.tapa_v[t++] = length/2;;
	this.tapa_v[t++] = 0;
	this.tapa_c[t-3] = (topColor[0]);
	this.tapa_c[t-2] = (topColor[1]);
	this.tapa_c[t-1] = (topColor[2]);
	currentSlice=0;
	this.tapa_x[tx]=tx++;
	for(i=0;i<=slices;i++)
	{
		currentAng=currentSlice++*( 2*Math.PI)/(slices) ;
		this.tapa_v[t++] = topRadius * (Math.cos(currentAng));
		this.tapa_v[t++] = length/2;
		this.tapa_v[t++] = topRadius * (Math.sin(currentAng));
		console.log(currentAng);
		this.tapa_c[t-3] = (topColor[0]);
		this.tapa_c[t-2] = (topColor[1]);
		this.tapa_c[t-1] = (topColor[2]);
		this.tapa_x[tx]=tx++;

		
		
		
	}
	
	gl.bindBuffer(gl.ARRAY_BUFFER,this.bufferIDs[0]);  
	gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(this.vertices),gl.STATIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER,this.bufferIDs[1]);
	gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(this.colores),gl.STATIC_DRAW);

	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.bufferIDs[2]);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(this.Indexes),gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER,this.bufferIDs[3]);
	gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(this.tapa_v),gl.STATIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER,this.bufferIDs[4]);
	gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(this.tapa_c),gl.STATIC_DRAW);

	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.bufferIDs[5]);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(this.tapa_x),gl.STATIC_DRAW);
}

function cylinderBind(gl,c,vLoc,cLoc)
{

	gl.bindBuffer(gl.ARRAY_BUFFER,c.bufferIDs[0]); 
	//gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(c.vertices),gl.STATIC_DRAW);
	gl.enableVertexAttribArray(vLoc);
 	gl.vertexAttribPointer(vLoc, 3,gl.FLOAT,false,0,0);
	//bind color buffer
	gl.bindBuffer(gl.ARRAY_BUFFER,c.bufferIDs[1]);
	//gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(c.colores),gl.STATIC_DRAW);
	gl.enableVertexAttribArray(cLoc);
 	gl.vertexAttribPointer(cLoc, 3,gl.FLOAT,false,0,0);

 	//element buffer
 	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,c.bufferIDs[2]);
   // gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(c.Indexes),gl.STATIC_DRAW);
   // gl.enable(gl.CULL_FACE);
   // gl.frontFace(gl.CW);
    gl.enable(gl.DEPTH_TEST);
}
function cylinderBindTip(gl,c,vLoc,cLoc)
{
	//tapa_v
 	gl.bindBuffer(gl.ARRAY_BUFFER,c.bufferIDs[3]);
	//gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(c.tapa_v),gl.STATIC_DRAW);
	gl.enableVertexAttribArray(vLoc);
 	gl.vertexAttribPointer(vLoc, 3,gl.FLOAT,false,0,0);
	//tapa_c
	gl.bindBuffer(gl.ARRAY_BUFFER,c.bufferIDs[4]);
	//gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(c.tapa_c),gl.STATIC_DRAW);
	gl.enableVertexAttribArray(cLoc);
 	gl.vertexAttribPointer(cLoc, 3,gl.FLOAT,false,0,0);
 //	console.log("bind");
 	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,c.bufferIDs[5]);
    //gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(c.tapa_x),gl.STATIC_DRAW);
   // gl.enable(gl.CULL_FACE);
   // gl.frontFace(gl.CW);
    gl.enable(gl.DEPTH_TEST);
}
function cylinderDraw(gl,c)
{
	//gl.enable(gl.CULL_FACE);
    //gl.frontFace(gl.CCW);
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,c.bufferIDs[2]);
	gl.drawElements(gl.TRIANGLE_STRIP,c.Indexes.length-2,gl.UNSIGNED_SHORT,0);
}
function cylinderDrawTip(gl,c)
{
	//gl.frontFace(gl.CCW);
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,c.bufferIDs[5]);
	gl.drawElements(gl.TRIANGLE_FAN,c.tapa_x.length,gl.UNSIGNED_SHORT,0);
}
