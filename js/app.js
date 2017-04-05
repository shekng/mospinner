'use strict';

//Configure require.js
require.config({
  shim: {
    mospinner: {
        deps: [
            'jquery'
        ],
        exports: 'mospinner'
    }
  },
  paths: {
      jquery: 'jquery-2.0.3.min',
      mospinner: 'jquery.mo.spinner',      
  }
});

//Start up our App
require([
    'jquery',
    'mospinner'
], 
function ($, mospinner) {
    $("#spinner").mospinner({
        min: 3,
        max: 10,
        value: 4,
        onChange: function(iValue) {
            console.log(iValue);
        }
    });    

    $("#spinner").data("mospinner").set(5);
    alert($("#spinner").data("mospinner").val());
});