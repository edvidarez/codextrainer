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