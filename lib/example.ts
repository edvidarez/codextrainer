var stack = [];

class transicion{
	//var t1,t2,t3; // lo que entra, lo que esta en la pila, como dejara la pila
	estadoF:estado;	
	t1:string;
	t2:string;
	t3:string;
	name:string;
	constructor(name:string,t1:string,t2:string,t3:string,est:estado){
		this.name=name;
		this.t1 = t1;
		this.t2 = t2;
		this.t3 = t3;
		this.estadoF=est;
	}
	
}
var analizador_flag=false;
var q0,q1,qErr;
class estado {

	type:number;  //0 inicial,1 normal, 2 final
	transiciones:Array<transicion>;
	constructor(type,transiciones){
		this.type=type;
		this.transiciones=transiciones;
	} 
	exec(s:string)
	{
		var t;
		for(t in this.transiciones)
		{
			if(this.transiciones[t].name === s)
			{
				return this.transiciones[t].estadoF;
			}
		}
		//algo por aqui esta mal
		analizador_flag=true;
		return new estado(2,[
		new transicion("",'.','.','.',qErr)
		]);
	}
}


	q1 = new estado(2,[
			new transicion("inicia-ejecucion",'.','.','.',q1)
		]);
	q0 = new estado(0,[
		new transicion("iniciar-programa",'.','.','.',q1)
	]);
	qErr = new estado(2,[
		new transicion("Error",'.','.','.',qErr)
	]);

class AP {
	states:Array<estado>;
	current_state:estado;
	constructor(code:Array<string>){
		this.current_state = q0;
		for(var w in code)
		{
				//console.log(code[w]);	
				try{
					this.current_state=this.current_state.exec(code[w]);
					if(analizador_flag)
					{
						alert("error de sintaxis cerca de :"+ code[w]);
						break;
					}
					else
					{
						console.log("paso exitosamente:"+code[w]);
					}
				}
				catch(e)
				{
					console.log(e);
				}
				
		}
		try{
			if(!analizador_flag && this.current_state.type==2)
			{
				alert("codigo OK");
			}
		}
		catch(e)
		{
			console.log(e);
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