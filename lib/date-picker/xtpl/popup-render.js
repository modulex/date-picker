var tpl = require("./popup");
var XTemplateRuntime = require("xtemplate/runtime");
var instance = new XTemplateRuntime(tpl);
module.exports = function(){
return instance.render.apply(instance,arguments);
};