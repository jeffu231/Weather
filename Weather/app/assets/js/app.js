'use strict';

/* global define:true*/
define(['knockout', 'models/viewmodel.current-conditions'], function (ko, currentConditionsModel) {
	return function start() {
		ko.applyBindings(currentConditionsModel);
		currentConditionsModel.init();
	};
	 
});