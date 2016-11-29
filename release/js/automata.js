/**
 * Created by Edmundo on 28/11/2016.
 */
define(function () {
    var expresiones_logicas = [
        "frente_libre",
        "frente_bloqueado",
        "izquierda_libre",
        "izquierda_bloqueada",
        "derecha_bloqueada",
        "derecha_libre",

        "orientado_al_norte",
        "no_orientado_al_norte",
        "orientado_al_este",
        "no_orientado_al_este",
        "orientado_al_sur",
        "no_orientado_al_sur",
        "orientado_al_oeste",
        "no_orientado_al_oeste"
    ];
    var Estado = function(){

        return{
            "transiciones": [],
            "inicial": false,
            "final": false,
            "name" : ""
        }
    };

    var Transicion = function(palabra,estado){

        return {

            "estado" : estado,
            "palabra" : palabra
        }
    };
    var TransicionPila = function (palabra,estado,func) {

        return {
            "estado" : estado,
            "palabras" : palabra,
            "func" : func,
            "name" :name
        }

    }

   /* var q0 = new Estado(); // Estado inicial*/
    var IP = new Estado(); // Iniciar Programa
    var IE = new Estado(); // Inicia ejecucion
    var IDLE = new Estado(); // idle

    /*var AV = new Estado();  //avanza;
    var GI = new Estado();  //gira_izquierda;
    var BR = new Estado();  //brinca;
    var AP = new Estado();  //apagate;*/

    var FE = new Estado(); // Finaliza ejecucion
    var FP = new Estado(); // Finalizar PRograma
    IP['inicial'] = true;
    IP['transiciones'].push(new Transicion("iniciar_programa",IE));
    IE['transiciones'].push(new Transicion("inicia_ejecucion",IDLE));


    IDLE['transiciones'].push(new Transicion("avanza;",IDLE));
    IDLE['transiciones'].push(new Transicion("gira_izquierda;",IDLE));
    IDLE['transiciones'].push(new Transicion("apagate;",IDLE));
    IDLE['transiciones'].push(new Transicion("brinca;",IDLE));
    IDLE['transiciones'].push(new Transicion("inicio",IDLE));
    IDLE['transiciones'].push(new Transicion("fin;",IDLE));
    //IDLE['transiciones'].push(new Transicion("brinca;",IDLE));

    IDLE['transiciones'].push(new Transicion("finaliza_ejecucion",FE));
    FE['transiciones'].push(new Transicion("finalizar_programa",FP));

    FP['final'] = true;

    var Sstack;
    var Sq0 = new Estado();
    var Sq1 = new Estado();
    var Sq2 = new Estado();
    var Sq3 = new Estado();
    var Sq4 = new Estado();
    Sq0.name = "q0";
    Sq1.name = "q1";
    Sq2.name = "q2";
    Sq3.name = "q3";
    Sq4.name = "q4";

    Sq0['transiciones'].push(new TransicionPila(["("],Sq0, function(w){
                            Sstack="("+Sstack;
                            return true;
                    }));
    Sq0['transiciones'].push(new TransicionPila(expresiones_logicas,Sq1, function(w){
        return true;
    }));
    Sq1['transiciones'].push(new TransicionPila(['y','o'],Sq2,function (w) {
                                if(Sstack.length==0)
                                {
                                    Sstack = w;
                                }
                                else {
                                    if(!(Sstack[0] == 'y' || Sstack[0] =='o'))
                                    {
                                        Sstack = w + Sstack;
                                    }

                                }
                                return true;
                    }));


    Sq2['transiciones'].push(new TransicionPila(["y","o"],Sq0, function(w){
        return true;
    }));
    Sq2['transiciones'].push(new TransicionPila(["("],Sq2, function(w){
                    if(!(Sstack[0] == 'y' || Sstack[0] =='o')) // posible cambio mas adelante
                    {
                        Sstack = w + Sstack;
                    }
                    else {
                        Sstack[0]='('; // quita lo que este en el top y pone parentecis
                    }
        return true;
    }));
    Sq2['transiciones'].push(new TransicionPila(expresiones_logicas,Sq3, function(w){
        return true;
    }));
    Sq3['transiciones'].push(new TransicionPila(")",Sq3,function (w) {
        if((Sstack[0]=='o' || Sstack[0]=='y') && Sstack[1] == '(')
        {
            Sstack = Sstack.slice(2,Sstack.length);
        }
        else {
            if(Sstack[0] == "(")
            {
                Sstack = Sstack.slice(1,Sstack.length);
            }
        }
        return true;
    }));
    Sq3['transiciones'].push(new TransicionPila(["y","o"],Sq2, function(w){

        if(Sstack[0]=="(")
        {
            Sstack=w+Sstack;
        }
        else {
            if(!(Sstack[0] == 'y' || Sstack[0] =='o') && Sstack.length ==0)
            {
                Sstack = w;
            }
        }
                    if(w=='y')
                    {
                        switch (Sstack)
                        {
                            case "":
                            case "(":
                            case "y": return true; break;
                        }
                    }
                    if(w=='o')
                    {
                        switch (Sstack)
                        {
                            case "":
                            case "(":
                            case "y": return true; break;
                        }
                    }

                    return false;




                }));

    Sq3['transiciones'].push(new TransicionPila("***",Sq4,function(w){
                if(Sstack=='y' || Sstack =='o' || Sstack =='')
                {
                    RESPONSESI = true;
                    console.log("cambio al final");
                    Sstack = '';
                }
                else {
                    console.log("Antes del final"+Sstack);
                }
    }));
    Sq1['transiciones'].push(new TransicionPila("***",Sq4,function(w){
        if( Ssack =='')
        {
            RESPONSESI = true;
            console.log("cambio al final");
            Sstack = '';
        }
        else {
            console.log("Antes del final"+Sstack);
        }
    }));
    Sq4['final'] = true;





    function getMatch(str,pos)
    {
        var bandera=0;
        for(el in expresiones_logicas)
        {
            var bandera2=1;
            for(var i =0;  i<expresiones_logicas[el].length;i++)
            {
                if((pos+i)>=str.length)
                {
                    bandera2=0;
                   // console.log(str.slice(pos,i));
                    break;
                }
                if(str[pos+i] != expresiones_logicas[el][i])
                {
                   // console.log(str.slice(pos,i));
                    bandera2=0;
                }
            }
            if(bandera2)
            {
                bandera=1;
                break;
            }

        }
        if(bandera)
        {
            console.log("Se encontro EXP_LOG: "+expresiones_logicas[el]);
            return expresiones_logicas[el];
        }
        else {
            console.log("no se encontro '"+str[pos]+"'");
            return '-1';
        }
        //buscara la expresion logica dentro del automata si existe, si no retorna -1
    }

    var RESPONSESI =false;
    function analizarSi(exp,current_state,pos) {
        console.log("Actual State: "+current_state.name);
        if(pos>exp.length)
        {
            console.log(pos+">"+exp.length);
            console.log(typeof current_state['final']);
            console.log(current_state['final']);
            /*if(current_state['final'] === true)
            {
                console.log("true");
                return 1;
            }
            else {
                console.log("false");
                return 0;
            }*/
            if( current_state['final'])
            {
                RESPONSESI = true;
            }
        }
        else
        {
            var toTest;
            var el;
            if(pos<exp.length)
            {
                el = getMatch(exp,pos);
                if(el !=='-1') {
                    toTest = el;
                }
                else {
                    toTest=exp[pos];
                }
            }
            else {
                toTest='***';
            }


            console.log("ToTest: '"+toTest+"'");
            for(k in current_state['transiciones'])
            {
               // console.log(current_state['transiciones'][k]['palabras']);
                var p=current_state['transiciones'][k]['palabras'].indexOf(toTest);

                if(p!= -1)
                {
                    console.log("Se cambio de estado a "+current_state['transiciones'][k]['estado'].name);
                    var StashStack = Sstack;
                    current_state['transiciones'][k]['func'](toTest);
                    console.log("Stack "+Sstack);
                    if(current_state['transiciones'][k]['func'](toTest))
                        analizarSi(exp,current_state['transiciones'][k]['estado'],pos+toTest.length);
                    Sstack = StashStack;
                }
               // console.log(p);
            }
        }


    }


    return {
        analizar : function (txt) {
            var current_state=IP;
            for(l in txt)
            {
                var line = txt[l];

                if(line[0]==='r' && line[1]==='e' && line[2]==='p' && line[3]==='e' && line[4]==='t' && line[5]==='i' && line[6]==='r')
                {
                    exp = line.slice(7,line.length-5);
                    if(!isNaN(exp))
                    {
                        console.log("error en repetir");
                    }
                }
                else
                if(line[0]==='m' && line[1]==='i' && line[2]==='e' && line[3]==='n' && line[4]==='t' && line[5]==='r' && line[6]==='a' && line[7]==='s')
                {
                    Sstack="";
                    RESPONSESI = false;
                    exp = line.slice(8,line.length-5);

                    analizarSi(exp,Sq0,0);

                    console.log(RESPONSESI);
                    if(  RESPONSESI == true)
                    {
                        console.log("si acepatdo");
                    }
                    else {
                        console.log("Error lógico en linea: "+l);
                    }
                }
                else
                if(line[0] === 's' && line[1] ===  'i')
                {
                    Sstack="";
                    RESPONSESI = false;
                    exp = line.slice(2,line.length-8);

                    analizarSi(exp,Sq0,0);

                    console.log(RESPONSESI);
                    if(  RESPONSESI == true)
                    {
                        console.log("si acepatdo");
                    }
                    else {
                        console.log("Error lógico en linea: "+l);
                    }
                }
                else {


                    for (t in current_state['transiciones']) {
                        //  console.log(current_state['transiciones'][t]['palabra'] + "===" + line);

                        if (current_state['transiciones'][t]['palabra'] === line) {
                            console.log("entro en: " + line);
                            current_state = current_state['transiciones'][t]['estado'];
                        }
                    }

                }

            }
        }
    }
});