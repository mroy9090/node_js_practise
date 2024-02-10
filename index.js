var fs=require('fs');
var http=require('http');


var server = http.createServer(function(req, res) {
    if(url="/"){
        fs.readFile("home.html",function(err,data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
});

server.listen(4040);
console.log("server starting successfully");
