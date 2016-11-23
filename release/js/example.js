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
var q0, q1, qErr, qf1, qff, qm1, s1;
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
        console.log("error");
        return new estado(2, [
            new transicion("Error", '.', '.', '.', qErr)
        ]);
    };
    return estado;
}());
s1 = new estado(0, [
    new transicion("", '.', '.', '.', qErr)
]);
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
qm1.transiciones.push(new transicion("si", '.', '.', '.', s1));
q1 = new estado(0, [
    new transicion("inicia-ejecucion", '.', '.', '.', qm1)
]);
q0 = new estado(0, [
    new transicion("iniciar-programa", '.', '.', '.', q1)
]);
qErr = new estado(2, []);
qErr.transiciones.push(new transicion("", '.', '.', '.', qErr));
var AP = (function () {
    function AP(code) {
        console.log(code);
        //	console.log(code.clean(""));
        analizador_flag = false;
        this.current_state = q0;
        //console.log(code.length);
        for (var w in code) {
            //  console.log(Number(w)+1);	
            try {
                if (Number(w) + 1 < code.length) {
                    this.current_state = this.current_state.exec(code[w]);
                }
                else {
                    if (code[w] !== "finalizar-programa") {
                        console.log("else");
                        analizador_flag = true;
                        alert("Error en finalizar-programa");
                        break;
                    }
                }
                if (this.current_state.transiciones[0].name != "Error") {
                    console.log("paso exitosamente:" + code[w]);
                }
                else {
                    console.log(this.current_state.transiciones[0].name);
                    analizador_flag = true;
                    alert("error de sintaxis cerca de " + code[w]);
                    break;
                }
            }
            catch (e) {
                analizador_flag = true;
                alert("error de sintaxis cerca de_ " + code[w]);
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
