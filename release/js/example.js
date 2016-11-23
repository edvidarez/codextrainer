var stack = [];
var transicion = (function () {
    function transicion(name, t1, t2, t3, est) {
        this.name = name;
        this.t1 = t1;
        this.t2 = t2;
        this.t3 = t3;
        this.estadoF = est;
    }
    return transicion;
}());
var analizador_flag = false;
var q0, q1, qErr, qf1, qff, qm1;
var estado = (function () {
    function estado(type, transiciones) {
        this.type = type;
        this.transiciones = transiciones;
    }
    estado.prototype.exec = function (s) {
        var t;
        for (t in this.transiciones) {
            if (this.transiciones[t].name === s) {
                return this.transiciones[t].estadoF;
            }
        }
        //algo por aqui esta mal
        analizador_flag = true;
        return new estado(2, [
            new transicion("", '.', '.', '.', qErr)
        ]);
    };
    return estado;
}());
qff = new estado(2, [
    new transicion("finalizar-programa", '.', '.', '.', qErr)
]);
qf1 = new estado(0, [
    new transicion("termina-ejecucion", '.', '.', '.', qff)
]);
qm1 = new estado(0, [
    new transicion("apagate;", '.', '.', '.', qf1)
]);
qm1.transiciones.push(new transicion("avanza;", '.', '.', '.', qm1));
qm1.transiciones.push(new transicion("gira-izquierda;", '.', '.', '.', qm1));
qm1.transiciones.push(new transicion("brincar;", '.', '.', '.', qm1));
qm1.transiciones.push(new transicion(";", '.', '.', '.', qm1));
q1 = new estado(0, [
    new transicion("inicia-ejecucion", '.', '.', '.', qm1)
]);
q0 = new estado(0, [
    new transicion("iniciar-programa", '.', '.', '.', q1)
]);
qErr = new estado(2, []);
var AP = (function () {
    function AP(code) {
        analizador_flag = false;
        this.current_state = q0;
        //console.log(code.length);
        for (var w in code) {
            //  console.log(Number(w)+1);	
            try {
                if (Number(w) + 1 < code.length) {
                    this.current_state = this.current_state.exec(code[w]);
                    console.log("paso exitosamente:" + code[w]);
                }
            }
            catch (e) {
                analizador_flag = true;
                alert("error de sintaxis cerca de " + code[w]);
                break;
            }
        }
        console.log(analizador_flag);
        console.log(this.current_state.type);
        try {
            if (!analizador_flag && this.current_state.type == 2) {
                alert("codigo OK");
            }
        }
        catch (e) {
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
