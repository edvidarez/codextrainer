declare var stack: any[];
declare class transicion {
    estadoF: estado;
    t1: string;
    t2: string;
    t3: string;
    name: string;
    constructor(name: string, t1: string, t2: string, t3: string, est: estado);
}
declare var analizador_flag: boolean;
declare var q0: any, q1: any, qErr: any, qf1: any, qff: any, qm1: any;
declare class estado {
    type: number;
    transiciones: Array<transicion>;
    constructor(type: any, transiciones: any);
    exec(s: string): estado;
}
declare class AP {
    states: Array<estado>;
    current_state: estado;
    constructor(code: Array<string>);
}
declare var instructions: (string | (() => string))[];
declare var expresions: string[];
