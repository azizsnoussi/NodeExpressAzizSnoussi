var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(req,res)
{
    var params = querystring.parse(url.parse(req.url).query);
    res.writeHead(200,{"Content-Type":"text/plain"});
    if('id' in params && 'login' in params) {
        res.write('votre id est '+ params['id']+
        ' et votre login '+params['login']);
    }
    else
    {
        res.writeHead(404,{"Content-Type":"text/plain"});
        res.write('Not found');
    }
    res.end();
});
server.listen(8080);

