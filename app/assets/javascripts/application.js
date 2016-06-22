// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require underscore
//= require backbone
//= require moment
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers
//= require_tree .
//= require websocket_rails/main
//= require init.js

$(function() {
  var dayFun = function () {
    var day = moment().format('dddd');
    $("#dayName").text(day);
  };

  var dateFun = function () {
    var date = moment().format("MMM Do");
    $("#dayDate").text(date);
  };

  var timeFun = function () {
    var timeYo = moment().format('h:mm a');
    $("#timeYo").val(timeYo);
  };

  var userTarget = $("#user_target").val()
  var curChannel = '/messages/new/' + userTarget

  var faye = new Faye.Client('http://localhost:9292/faye');
  faye.subscribe(curChannel, function (data) {
    app.messages.add(data);
  });
});
