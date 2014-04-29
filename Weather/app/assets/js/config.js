'use strict';

require.config({
	paths: {
		'bower_components': '../../bower_components',
		'jquery': '../../bower_components/jquery/dist/jquery',
		'sammy': '../../bower_components/sammy/lib/sammy',
		'knockout.validation': '../../bower_components/knockout.validation/Dist/knockout.validation',
		'jquery.bootstrap': '../../bower_components/bootstrap-sass/dist/js/bootstrap',
		'models': '../../assets/js/models',
		'utils': '../../assets/js/util',
		'dataservices': '../../assets/js/dataservices',
		'amplify': '../../bower_components/amplify/lib/amplify.min',
	},
	shim: {
		'jquery.bootstrap': {
			deps: ['jquery']
		},
		'knockout.validation': {
			deps: ['knockout']
		},
		'amplify': {
			deps: ['jquery'],
			exports: 'amplify'
		},
	},
	map: {
		'*': {
			'knockout': '../../bower_components/knockout.js/knockout',
			'ko': '../../bower_components/knockout.js/knockout'
		}
	}
});

//Use the debug version of knockout in development only
/* global window:true*/
if (window.knockoutBootstrapDebug) {
	require.config({
		map: {
			'*': {
				'knockout': '../../bower_components/knockout.js/knockout.debug.js',
				'ko': '../../bower_components/knockout.js/knockout.debug.js'
			}
		}
	});
}

if (!window.requireTestMode) {
	require(['app'], function (App) {
		new App();
	});
}
