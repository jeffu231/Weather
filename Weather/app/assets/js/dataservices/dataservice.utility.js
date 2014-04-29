'use strict';

/* global define:true*/
define(function () {
	
	var amplifyXHRDecoder = function (data, status, xhr, success, error) {
		if (status === 'success') {
			success(data);
		} else {
			error(xhr);
		}
	};
	
	return {
		amplifyAjaxResponse: amplifyXHRDecoder
	};
});