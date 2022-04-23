var express = require ('express');
var serveStatic = require ('serve-static');

var app = express ().use(serveStatic('/servestaticpages' 
    + '/public')).listen(3000);

