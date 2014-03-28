//the require library is configuring paths
require.config({
	baseUrl: 'js/libs',
    //how long the it tries to load a script before giving up, the default is 7
    waitSeconds: 10,
    paths: {
        //tries to load jQuery from Google's CDN first and falls back
        //to load locally
        "jquery": ["http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min",
                    "jquery/jquery"],
        "underscore": "underscore-amd/underscore-min",
        "backbone": "backbone-amd/backbone-min",
        "amplify": "amplify/lib/amplify.min",
        "knockout" : "knockout.js/knockout",
        app: "../app"
    },
    shim: {
        "backbone": {
                        //loads dependencies first
            deps: ["jquery", "underscore"],
                        //custom export name, this would be lowercase otherwise
            exports: "Backbone"
        },
        "amplify" : {
        	deps: ["jquery"],
        	exports: "amplify"
        }
    }
    
    
});
//requiring the scripts in the first argument and then passing the library namespaces into a callback
//you should be able to console log all of the callback arguments
require(['jquery', 'underscore', 'backbone', 'app/app'], function(jquery, _, Backbone, App){
    new App;
});