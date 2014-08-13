// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require vendors/underscore
//= require vendors/backbone
//= require vendors/custom-functions

// Demo namespace for backbone
window.Demo        = {};

Demo.Actions = {
  Users : {}
};

Demo.Collections = {
  Users : {}
};

Demo.Models = {
  Users : {}
};

Demo.Views = {
  Users : {}
};

window.app         = {};
window.views       = {};
window.models      = {};
window.collections = {};

$(document).ready( function() {
  _.templateSettings = {
        interpolate : /\{\{([\s\S]+?)\}\}/g
  };

  Demo.CSRFToken = $('meta[name="csrf-token"]').attr('content');
});
