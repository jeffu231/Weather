define(function(){
	var dsErrorMessage = function(msg, code){
		this.message=msg;
		this.code = code;
	};
	
	var dsResultContract = function(data, error){
		this.data = data;
		this.error = error;
	};
	
	var dsExecuteContract = function (data, currUser, doneCallback){
		this.data = data;
		this.currentUser = currUser;
		this.doneCallback = doneCallback;
	};
	
	return { dataserviceResult: dsResultContract,
		dataserviceError: dsErrorMessage,
		dsExecuteContract: dsExecuteContract
	};
		
});