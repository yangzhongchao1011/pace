var {Cc, Ci} = require('chrome');
var { ToggleButton } = require('sdk/ui/button/toggle');
var { ActionButton } = require("sdk/ui/button/action");
var panels = require("sdk/panel");
var self = require("sdk/self");
var tabs = require("sdk/tabs");
var data = require("sdk/self").data;

var button = ToggleButton({
  id: "pace",
  label: "优雅的进度条",
  icon: data.url("img/ico-64.png"),
});

var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "*",
  contentScriptFile: data.url("js/pace.js")
});

pageMod.PageMod({
  include: "*",
  contentStyleFile: data.url("css/pace.css")
});