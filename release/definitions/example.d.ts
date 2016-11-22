declare var stack: any[];
declare class transicion {
    t1: string;
    t2: string;
    t3: string;
    constructor(t1: string, t2: string, t3: string);
}
declare class estado {
    transiciones: Array<transicion>;
    constructor();
}
declare class AP {
    states: Array<estado>;
    constructor(code: Array<string>);
}
declare var instructions: (string | (() => string))[];
declare var expresions: string[];
