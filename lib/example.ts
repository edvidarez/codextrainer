var stack = [];

class transicion{
	//var t1,t2,t3; // lo que entra, lo que esta en la pila, como dejara la pila
	t1:string;
	t2:string;
	t3:string;
	constructor(t1:string,t2:string,t3:string){
		this.t1 = t1;
		this.t2 = t2;
		this.t3 = t3;
	}
}

class estado {

	transiciones:Array<transicion>;
	constructor(){

	} 
}
class AP {
	states:Array<estado>;
	constructor(code:Array<string>){
		for(var w in code)
		{
				console.log(code[w]);	
		}
		
	}
}

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
                            function getUserDeclaredFunctions()
                            {
                                return"si se declararon funciones del usuario esta funcion deberia de buscarlas para revisar que esten dentro";
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