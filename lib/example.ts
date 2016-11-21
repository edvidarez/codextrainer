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

transition=new transicion("2","2","2");

class estado {

	transiciones:string;
	constructor(){

	} 
}
class AP {
	states:Array<estado>;
}

alert(transition.t1);