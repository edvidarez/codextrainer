function Zumbador(gl,size,color){
		var vertices,colores,Indexes;
		this.bufferIDs = new Array();
		ds = size/4;
		vertices = [
			ds,0,0,
			0,0,ds,
			0,size,0,

			0,0,ds,
			0,0,-ds,
			0,size,0,

			-ds,0,0,
			0,0,-ds
			0,size,0,

			0,0,-ds,
			ds,0,0,
			0,size,0,



			ds,0,0,
			0,0,ds,
			0,-size,0,

			0,0,ds,
			0,0,-ds,
			0,-size,0,

			-ds,0,0,
			0,0,-ds
			0,-size,0,

			0,0,-ds,
			ds,0,0,
			0,-size,0,





		];
		for(var i=0;i<vertices.length;i++)
		{
			colores[i]=color[i%3];
		}
		this.bufferIDs[0] = gl.createBuffer();
		this.bufferIDs[1] = gl.createBuffer();

		gl.bindBuffer(gl.ARRAY_BUFFER.this.bufferIDs[0]);
		gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(this.vertices),gl.STATIC_DRAW);

		gl.bindBuffer(gl.ARRAY_BUFFER,this.bufferIDs[1]);
		gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(this.colores),gl.STATIC_DRAW);


}
function zumbadorBind(gl,c,vLoc,cLoc)
{
	gl.bindBuffer(gl.ARRAY_BUFFER.this.bufferIDs[0]);
	gl.enableVertexAttribArray(vLoc);
 	gl.vertexAttribPointer(vLoc, 3,gl.FLOAT,false,0,0);

	gl.bindBuffer(gl.ARRAY_BUFFER,c.bufferIDs[1]);
	gl.enableVertexAttribArray(cLoc);
 	gl.vertexAttribPointer(cLoc, 3,gl.FLOAT,false,0,0);
 	gl.enable(gl.DEPTH_TEST);
}
function zumbadorDraw(gl,z)
{
	gl.drawArrays(gl.TRIANGLES, 0, z.vertices.length);
}