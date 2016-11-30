
const int N = 3;

struct Light {
  vec3 lightColor;
  vec3 lightPosition;
  float exponent;
  vec3 direction;
  float cutoff;
  float subCutoff;
};

uniform LightBlock {
   Light lights[N];
};

attribute vec3 worldVertexPosition;
attribute vec3 worldVertexNormal;

uniform vec3 cameraPosition;
uniform vec3 ambientLight;

uniform vec3 materialA;
uniform vec3 materialD;
uniform vec3 materialS;

attribute vec2 vertexTexcoordVF;
uniform sampler2D myTexture;

varyng vec4 pixelColor;

void main() {
  vec3 n  = normalize(worldVertexNormal);
  vec3 tempPixelColor = ambientLight *  materialA;
  vec3 l, r;
  float factorD, factorS;
  vec3 v = normalize(cameraPosition - worldVertexPosition);

  int i;
  for(i = 0; i < N; i++) {
    vec3 D = normalize(lights[i].direction);
    
    vec3 V = normalize(worldVertexPosition - lights[i].lightPosition);
    float dist = length(worldVertexPosition - lights[i].lightPosition);
    float lightDirectionFactor = 1;
    float attenuationFactor = 1/(dist*.1);
    float dotDV = dot(D, V); 
    if( dotDV >= lights[i].cutoff){
      if(dotDV < lights[i].subCutoff ){
        lightDirectionFactor = (dotDV -lights[i].cutoff)/(lights[i].subCutoff-lights[i].cutoff);
      }
    }else
      lightDirectionFactor = 0.02;
    
    l = normalize(lights[i].lightPosition - worldVertexPosition);   
    factorD = clamp(dot(l, n), 0, 1);
    r = normalize((2 * n)  * dot(n, l) - l);
    factorS = clamp(pow(dot(r, v), lights[i].exponent), 0, 1);
  tempPixelColor += attenuationFactor * lightDirectionFactor * lights[i].lightColor * (materialD * factorD + materialS * factorS);
  
  }

  pixelColor = vec4(clamp(tempPixelColor, 0, 1), 1) *
               texture(myTexture, vertexTexcoordVF);
}

