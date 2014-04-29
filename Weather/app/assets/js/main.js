'use strict';

/* global define:true*/
define(['jquery',
    'knockout',
    'models/appViewModel',
    'jquery.bootstrap'
    ], function ($, ko, AppViewModel) {

  var UI = new AppViewModel();

  ko.applyBindings(UI);

});
