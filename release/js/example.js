var stack = [];
var transicion = (function () {
    function transicion(t1, t2, t3) {
        this.t1 = t1;
        this.t2 = t2;
        this.t3 = t3;
    }
    return transicion;
}());
var estado = (function () {
    function estado() {
    }
    return estado;
}());
var AP = (function () {
    function AP(code) {
        for (var w in code) {
            console.log(code[w]);
        }
    }
    return AP;
}());
var instructions = [
    "apagate",
    "avanza",
    "gira-izquierda",
    "si",
    "entonces",
    "mientras",
    "hacer",
    "iniciar-programa",
    "inicia-ejecucion",
    "termina-ejecucion",
    "finalizar-programa",
    function getUserDeclaredFunctions() {
        return "si se declararon funciones del usuario esta funcion deberia de buscarlas para revisar que esten dentro";
    },
    "inicio",
    "fin",
    "repetir",
    "no",
    "y",
    "o"
];
var expresions = [
    "frente-libre",
    "frete-bloqueado",
    "orientado-al-norte",
    "orientado-al-este",
    "orientado-al-sur",
    "orientado-al-oeste"
];
