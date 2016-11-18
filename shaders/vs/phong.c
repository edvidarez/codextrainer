attribute vec3 vertexNormal;
attribute vec3 vertexPosition;

uniform mat4 modelMatrix;
uniform mat4 projMatrix;
uniform mat4 viewMatrix;

varying vec3 worldVertexPosition; 
varying vec3 worldVertexNormal; 
void main()
{
	vec4 worldPosition = modelMatrix * vec4(vertexPosition,1);
	gl_Position = projMatrix*viewMatrix*worldPosition;
	worldVertexPosition = worldPosition.xyz;

	mat4 G = transpose(inverse(modelMatrix));
	worldVertexNormal = (G * vec4(vertexNormal,0)).xyz;
}