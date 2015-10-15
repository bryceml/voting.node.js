var fs = require('fs');
var http = require('http');
var url = require('url');
var ROOT_DIR = ".";
var vimcount = 0;
var emacscount = 0;
http.createServer(function(req, res) {
  var urlObj = url.parse(req.url, true, false);
  console.log("opening" + ROOT_DIR + urlObj.pathname);
  console.log(urlObj);
  if (urlObj.pathname == "/vim") {
    vimcount++;
    console.log("In REST SERVICE")
    res.writeHead(200);
    //res.end("<html><body><h1>Hello World</h1></body></html>");
    //  var cities;// = [{city:'Provo'},{city:'Price'}]
    var jsonresult;
    ////var myReg = new RegExp("^" + urlObj.query["q"]);
    //console.log(myReg)
    ////fs.readFile('cities.dat.txt', function(err, data) {
    ////  if (err) throw err;
      ////cities = data.toString().split("\n");
      /*for (var i = 0; i < cities.length; i++) {
        var result = cities[i].search(myReg);
        if (result != -1) {
          jsonresult.push({
            city: cities[i]
          });
        }
      }*/
      jsonresult = { vim: vimcount, emacs: emacscount};
      res.end(JSON.stringify(jsonresult));
  ////  });
  } else if (urlObj.pathname == "/emacs") {
    emacscount++;
    console.log("In REST SERVICE")
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    var jsonresult = { vim: vimcount, emacs: emacscount};
    res.end(JSON.stringify(jsonresult));
  } else if (urlObj.pathname == "/query") {
    console.log("In REST SERVICE")
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    var jsonresult = { vim: vimcount, emacs: emacscount};
    res.end(JSON.stringify(jsonresult));
  } else {
    fs.readFile(ROOT_DIR + urlObj.pathname, function(err, data) {
      if (err) {
        res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
      }
      res.writeHead(200);
      res.end(data);
    });
  }
}).listen(8080);
