define(['jquery', 'knockout', 'app/model.dataserviceAPI', 'app/dataservice.reading', 'app/binding.ko.utility'], function($, ko, dsModel, dsReading, bind){
	
	bind();
	
	function currentConditionsViewModel(){
		var self = this;
		self.name = 'current-conditions';
		self.reading = ko.observable();
		self.lastUpdate = ko.observable();
		self.incrementLastUpdate = function(){
			self.lastUpdate(self.lastUpdate() + 1);
		};
		self.imageRotateCss = ko.observable('rotate(' + self.reading.windDirection + 'deg)');
		self.init = function(){
			var prms = new dsModel.dsExecuteContract(null, null, self.processData);
			dsReading.initialize(prms);
		};
		
		self.processData = function(prms){
			if(prms.data.error && prms.error.code && prms.error.code > 0){
				alert("Error!");
			}else{
				self.reading(prms.data.result);
				self.lastUpdate(0);
			}
		};
	}
	
	var model = new currentConditionsViewModel();
	
	var timer = setInterval(function(){
		model.incrementLastUpdate();
	}, 1000);
	
	var interval = setInterval(function(){
		//model.init();
	}, 30000);
	
	return model;
	
});