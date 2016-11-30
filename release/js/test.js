define(function (require) {
    var test= require("automata");
    var interaccion = require("interaccion");
    test.analizar([
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
                    ]);
    $("#preview_world").on("click",function(){
        //alert(toJson(getWorld()));


        interaccion.main();
        setTimeout(function(){
            interaccion.avanza();
            interaccion.display(0,1);
        },3000);
        setTimeout(function(){
            interaccion.avanza();

            interaccion.display(0,1);
        },5000);


        $('#areaGrid').hide();
        $('#canvasArea').show();
    });


})