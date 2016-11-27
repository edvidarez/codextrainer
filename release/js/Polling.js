
define(function() {

   function Delayed() {this.id = null;}
    Delayed.prototype.set = function(ms, f) {
        clearTimeout(this.id);
        this.id = setTimeout(f, ms);
    };

    return{
        Delayed:Delayed
    }
});