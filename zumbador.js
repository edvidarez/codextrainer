function Zumbador(gl,size,color){
		var vertices,colores,Indexes,bufferIDs;
		this.bufferIDs = new Array();
		this.colores= new Array();
		ds = size/4.0;
		this.vertices = [
			ds,0,0,
			0,0,ds,
			0,size,0,

		
			0,0,-ds,
			-ds,0,0,
			0,-size,0,





		];
		for(var i=0;i<this.vertices.length;i++)
		{
		//	console.log(color[i%3]);
			this.colores[i]=color[i%3];
		}
		this.Indexes = [
			0,1,2,0,3,2,4,1,2,4,3,2,
			0,1,5,0,3,5,4,1,5,4,3,5
		];
		this.bufferIDs[0] = gl.createBuffer();
		this.bufferIDs[1] = gl.createBuffer();
		this.bufferIDs[2] = gl.createBuffer();

		gl.bindBuffer(gl.ARRAY_BUFFER,this.bufferIDs[0]);
		gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(this.vertices),gl.STATIC_DRAW);

		gl.bindBuffer(gl.ARRAY_BUFFER,this.bufferIDs[1]);
		gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(this.colores),gl.STATIC_DRAW);

		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.bufferIDs[2]);
   		 gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(this.Indexes),gl.STATIC_DRAW);

}
function zumbadorBind(gl,c,vLoc,cLoc)
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
function zumbadorDraw(gl,z)
{
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,z.bufferIDs[2]);
	gl.drawElements(gl.TRIANGLES,z.Indexes.length,gl.UNSIGNED_SHORT,0);

}