var fs = require('fs');
var http = require('http');
var url = require('url');
var ROOT_DIR = ".";
var vimcount = 0;
var emacscount = 0;
var windows = 0;
var mac = 0;
var linux = 0;
var before = 0;
var after = 0;
var pageloads = 0;
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
      var jsonresult = { vim: vimcount, emacs: emacscount, windows: windows, mac: mac, linux: linux, before: before, after: after, pageloads: pageloads};
      res.end(JSON.stringify(jsonresult));
  ////  });
  } else if (urlObj.pathname == "/emacs") {
    emacscount++;
    console.log("In REST SERVICE")
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    var jsonresult = { vim: vimcount, emacs: emacscount, windows: windows, mac: mac, linux: linux, before: before, after: after, pageloads: pageloads};
    res.end(JSON.stringify(jsonresult));
  } else if (urlObj.pathname == "/windows") {
    windows++;
    console.log("In REST SERVICE")
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    var jsonresult = { vim: vimcount, emacs: emacscount, windows: windows, mac: mac, linux: linux, before: before, after: after, pageloads: pageloads};
    res.end(JSON.stringify(jsonresult));
  } else if (urlObj.pathname == "/mac") {
    mac++;
    console.log("In REST SERVICE")
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    var jsonresult = { vim: vimcount, emacs: emacscount, windows: windows, mac: mac, linux: linux, before: before, after: after, pageloads: pageloads};
    res.end(JSON.stringify(jsonresult));
  } else if (urlObj.pathname == "/linux") {
    linux++;
    console.log("In REST SERVICE")
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    var jsonresult = { vim: vimcount, emacs: emacscount, windows: windows, mac: mac, linux: linux, before: before, after: after, pageloads: pageloads};
    res.end(JSON.stringify(jsonresult));
  } else if (urlObj.pathname == "/before") {
    before++;
    console.log("In REST SERVICE")
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    var jsonresult = { vim: vimcount, emacs: emacscount, windows: windows, mac: mac, linux: linux, before: before, after: after, pageloads: pageloads};
    res.end(JSON.stringify(jsonresult));
  } else if (urlObj.pathname == "/after") {
    after++;
    console.log("In REST SERVICE")
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    var jsonresult = { vim: vimcount, emacs: emacscount, windows: windows, mac: mac, linux: linux, before: before, after: after, pageloads: pageloads};
    res.end(JSON.stringify(jsonresult));
  } else if (urlObj.pathname == "/query") {
    console.log("In REST SERVICE")
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    var jsonresult = { vim: vimcount, emacs: emacscount, windows: windows, mac: mac, linux: linux, before: before, after: after, pageloads: pageloads};
    res.end(JSON.stringify(jsonresult));
  } else {
    fs.readFile(ROOT_DIR + /*urlObj.pathname*/"/voting.html", function(err, data) {
      if (err) {
        res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
      }
      pageloads++;
      res.writeHead(200);
      res.end(data);
    });
  }
}).listen(8080);
