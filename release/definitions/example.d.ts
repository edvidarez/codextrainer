declare var stack: any[];
declare class transicion {
    t1: string;
    t2: string;
    t3: string;
    constructor(t1: string, t2: string, t3: string);
}
declare class estado {
    transiciones: string;
    constructor();
}
declare class AP {
    states: Array<estado>;
}
