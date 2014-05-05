'use strict';

/* global define:true*/
define(['jquery', 'knockout', 'dataservices/model.dataserviceAPI', 'dataservices/dataservice.reading', 'moment', 'util/binding.ko-format'],
		function ($, ko, dsModel, dsReading, moment) {
	
	function CurrentConditionsViewModel() {
		var self = this;

		// Example observable
		self.status = ko.observable('active');

		self.name = 'current-conditions';
		self.reading = ko.observable();
		self.lastUpdate = ko.observable();
		self.imageRotateCss = ko.computed({
			read: function () {
				return 'rotate(' + self.reading().windDirection + 'deg)';
			},
			deferEvaluation: true
		});
		
		self.tempFeel = ko.computed({
			read: function () {
				if (self.reading().temperature < 60) {
					return 'wx-cold';
				} else if (self.reading().temperature >= 90) {
					return 'wx-hot';
				} else {
					return 'wx-warm';
				}
			},
			deferEvaluation: true
		});
		
		self.init = function () {
			var prms = new dsModel.dsExecuteContract(null, null, self.processData);
			dsReading.initialize(prms);
		};

		self.processData = function (prms) {
			if (prms.data.error && prms.error.code && prms.error.code > 0) {
				//alert('Error!');
			} else {
				self.reading(prms.data.result);
				self.lastUpdate(moment().format('h:mm:ss a'));
			}
		};
	}
	
	var model = new CurrentConditionsViewModel();
	
	setInterval(function () {
		model.init();
	}, 3000);
	
	return model;
	
});