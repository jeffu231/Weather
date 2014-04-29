define(function(){
	var readingApiUrl = "api";
	var viewModelConfiguration = function(url, type){
		this.url = readingApiUrl;
		this.type = type ? type : "GET";
	};
	
	return viewModelConfiguration;
});