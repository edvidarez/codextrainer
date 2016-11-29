/**
 * Created by Arturo Hernandez on 26/11/2016.
 */
define(function(){

    var tokensExpression= {
        "a":["apagate","avanza"],
        "b":["brincar"],
        "i":["izquierda_libre","izquierda_bloqueada","iniciar_programa","inicia_ejecucion","inicio"],
        "o":["orientado_al_norte","orientado_al_sur","orientado_al_este","orientado_al_oeste"],
        "n":["no_orientado_al_norte","no_orientado_al_sur","no_orientado_al_este","no_orientado_al_oeste"],
        "d":["derecha_libre","derecha_bloqueada"],
        "f":["frente_libre","frente_bloqueado","finalizar_programa","fin"],
        "g":["gira_izquierda","gira_derecha"],
        "t":["termina_ejecucion"],
        "r":["repetir"],
        "e":["entonces"],
        "h":["hacer"],
        "m":["mientras"],
        "v":["veces"]
    };
  
    var tokenColor={
        "i": "cm-blue",
        "o": "cm-purple",
        "n": "cm-blue",
        "d": "cm-yellow",
        "f" :"cm-gray"
    }

    return{
        getTokenClass:function(key){
            return tokenColor[key];
        },
        identifySubset:function(wordToCheck){
            var wordToCheck=wordToCheck.trim();
            if(typeof(tokensExpression[wordToCheck[0]])!="undefined"){
                var subsetOfInstructions=tokensExpression[wordToCheck[0]];
                for(var index in subsetOfInstructions){
                    var instruction=subsetOfInstructions[index];
                    if(instruction==wordToCheck.trim())
                        return true;
                }
                return false;
            }
            return false;
        }
    }


});