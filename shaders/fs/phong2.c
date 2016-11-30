
varying highp vec3 worldVertexPosition;
varying highp vec3 worldVertexNormal;

uniform highp vec3 cameraPosition;
uniform highp vec3 ambientLight;

uniform highp vec3 lightColor;
uniform highp vec3 lightPosition;
uniform highp float exponent;

uniform highp vec3 materialA;
uniform highp vec3 materialD;
uniform highp vec3 materialS;


highp vec3  clamp_v(highp vec3 v, highp float minVal, highp float maxVal)
{
  return vec3(min(max(v[0], minVal), maxVal),min(max(v[1], minVal), maxVal),min(max(v[2], minVal), maxVal));
}

highp float clamp_f(highp float x, highp float minVal, highp float maxVal)
{
  return min(max(x, minVal), maxVal);
}

void main() 
{
  highp vec3 n  = normalize(worldVertexNormal);
  
  highp vec3 tempPixelColor = vec3(0, 0, 0);
  
  highp vec3 l;
  highp float factorD;
  highp vec3 v = normalize(cameraPosition - worldVertexPosition);
  highp vec3 r;
  highp float factorS;
  

	l = normalize(lightPosition - worldVertexPosition); 
	factorD = clamp_f(dot(l, n), 0.0, 1.0);
	r = normalize((n * 2.0 )  * dot(n, l) - l);
	factorS = clamp_f(pow(dot(r, v), exponent), 0.0, 1.0);
	tempPixelColor += (ambientLight *  materialA + 
                lightColor * (materialD * factorD + materialS * factorS)).rgb;

  
  gl_FragColor =  vec4(clamp_v(tempPixelColor, 0.0, 1.0), 1.0);
}