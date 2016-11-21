var stack = [];
var transicion = (function () {
    function transicion(t1, t2, t3) {
        this.t1 = t1;
        this.t2 = t2;
        this.t3 = t3;
    }
    return transicion;
}());
transition = new transicion("2", "2", "2");
var estado = (function () {
    function estado() {
    }
    return estado;
}());
var AP = (function () {
    function AP() {
    }
    return AP;
}());
alert(transition.t1);
