define(['amplify', 'app/model.dataserviceAPI', 'app/dataservice.utility'], function(amplify, dsModel,dsUtil){
	
	var url = 'http://morpheus.kb9kld.org:8080/jtwx-web/api/v1/samples/outdoor/latest';
	var completeCallback;
	
	
	var getReading = function(prms){
		_init(prms);
		_getReading();
	};
	
	var _init = function(prms){
		completeCallback = prms.doneCallback;
	};
	
	var _getReading = function(){
		return amplify.request({
			resourceId:'reading.getReading',
			success: _getReadingSuccess,
			error: _getReadingFail
		});
	};
	
	var setupDataFetches = function(){
		amplify.request.define('reading.getReading','ajax',
				{
					url:url,
					type:'GET',
					dataType:'json',
					decoder:dsUtil.amplifyAjaxResponse
				}
		);
		
	};
	
	var _getReadingSuccess = function(reading){
		_executeCompleteCallback(reading, false);
	};
	
	var _getReadingFail = function(xhr){
		_executeCompleteCallback(null, true, xhr.responseText ,xhr.status)
	};
	
	var _executeCompleteCallback = function(data, fail, errorMessage, errorCode){
		if(typeof completeCallback === 'function'){
			var objData = {
					result:data,
					error:fail
			};
			var objError = fail ? new dsModel.dataserviceError(errorMessage, errorCode) : null;
			
			var objReturn = new dsModel.dataserviceResult(objData, objError);
			
			completeCallback(objReturn);
		}
		
		
	};
	
	setupDataFetches();
	
	return {
		initialize:getReading
	};
});