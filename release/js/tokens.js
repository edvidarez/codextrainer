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
        "e":["entonces"],
        "h":["hacer"],
        "v":["veces"]
    };

    var SpecialTokens={
        "r":"repetir",
        "m":"mientras",
        "s":"si"};

    var tokenColor={
        "i": "cm-blue",
        "o": "cm-purple",
        "n": "cm-blue",
        "d": "cm-yellow",
        "f" :"cm-gray"
    }

    var tokenBlocksWords={
        "finalizar_programa":"iniciar_programa",
        "termina_ejecucion":"inicia_ejecucion"
    }

    return{

        getTokenBlockWords: function () {
          return tokenBlocksWords;
        },

        getTokenClass:function(key){
            return tokenColor[key];
        },
        identifySubset:function(wordToCheck){
            var wordToCheck=wordToCheck.trim();
            var flag=true;
            if(typeof SpecialTokens[wordToCheck[0]]!="undefined"){
                var token=SpecialTokens[wordToCheck[0]];
                wordToCheck=wordToCheck.replace(token,"");
                if(token=="repetir"){
                  for(var l in wordToCheck){
                    if(!isNaN(parseFloat(l)) && isFinite(l)){
                        wordToCheck=wordToCheck.replace(l,"");
                    }else{
                        break;
                    }
                  }
                    while(flag){
                        flag=false;
                        if(typeof(tokensExpression[wordToCheck[0]])!="undefined"){
                            var subset=tokensExpression[wordToCheck[0]]
                            for(var f in subset ){
                                console.log(subset[f]);
                                if(wordToCheck.indexOf(subset[f])!=-1){
                                    wordToCheck=wordToCheck.replace(subset[f],"");
                                    flag=true;
                                }
                            }
                        }else{
                            flag=false;
                        }
                    }

                }else{
                    wordToCheck=wordToCheck.replace(token,"");
                    while(flag){
                        flag=false;
                        if(typeof(tokensExpression[wordToCheck[0]])!="undefined"){
                            var subset=tokensExpression[wordToCheck[0]]
                            for(var f in subset ){
                                console.log(subset[f]);
                                if(wordToCheck.indexOf(subset[f])!=-1){
                                    wordToCheck=wordToCheck.replace(subset[f],"");
                                    flag=true;
                                }
                            }
                        }else{
                            flag=false;
                        }
                    }

                }


                console.log(wordToCheck+ "final word");
                if(wordToCheck=="")
                    return true;
                return false;

            }else{
                if(typeof(tokensExpression[wordToCheck[0]])!="undefined"){
                    var subsetOfInstructions=tokensExpression[wordToCheck[0]];
                    for(var index in subsetOfInstructions){
                        var instruction=subsetOfInstructions[index];
                        if(instruction==wordToCheck.trim())
                            return true;
                    }
                    return false;
                } 
            }

        }
    }


});