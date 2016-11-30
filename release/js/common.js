/**
 * Created by Arturo Hernandez on 26/11/2016.
 */
requirejs.config({
    "baseUrl": 'js',
    "paths": {
        "jquery":"jquery",
        "polling":'../release/js/polling',
        "main":'../release/js/main',
        "codemirror":"plugins/codemirror/lib/codemirror",
        "config":'../release/js/config',
        "tokens":'../release/js/tokens',
        "matcher":'../release/js/matcher',
        "interaccion":'../release/js/interaccion',
        "test":'../release/js/test',
        "automata":'../release/js/automata',
        "jBox":"jBox",
    },
    shim: {
        "codemirror": ['plugins/codemirror/mode/clike/clike',
            'plugins/codemirror/addon/edit/matchbrackets',
            'plugins/codemirror/addon/edit/closebrackets',
            'plugins/codemirror/addon/hint/show-hint'],
        "jBox":{
            deps: ['jquery'],
            exports: '$.jBox'
        }
},
    waitSeconds: 200
});

requirejs(['test']);