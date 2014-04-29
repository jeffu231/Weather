define(['knockout', 'app/viewmodel.current-conditions'], function(ko, currentConditionsModel){
	return function start(){
		ko.applyBindings(currentConditionsModel);
		currentConditionsModel.init();
	};
	 
});