var express = require ('express'),
http= require ('http');

var app = express ().use(function(req,res,next)
                {
                    res.end('HELLO EXPRESS !');
                }
);
http.createServer(app).listen(3000);