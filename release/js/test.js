define(function (require) {
    var automata= require("automata");
    
    var main = require("main");


   
    /*
    [
                    "iniciar_programa",
                    "inicia_ejecucion",
                    "avanza;",
                    "gira_izquierda;",
                    "sifrente_libreentonces",
                    "si(frente_libreyorientado_al_sur)ofrente_libreentonces",
                    "inicio",
                    "siorientado_al_surentonces",
                    "mientrasfrente_librehacer",
                    "fin;",
                    "repetir54veces",
                    "apagate;",
                    "finaliza_ejecucion",
                    "finalizar_programa"
                    ]
    */
    $("#preview_world").on("click",function(){
        //alert(toJson(getWorld()));

		 var code = main.getCodeResult();
	    automata.analizar(code);
        
      


        $('#areaGrid').hide();
        $('#canvasArea').show();
    });


})