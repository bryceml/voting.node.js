var fs = require('fs');
var http = require('http');
var url = require('url');
var ROOT_DIR = "./";
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
  if (urlObj.pathname == "/vim") {
    vimcount++;
    res.writeHead(200);
      var jsonresult = { vim: vimcount, emacs: emacscount, windows: windows, mac: mac, linux: linux, before: before, after: after, pageloads: pageloads};
      res.end(JSON.stringify(jsonresult));
  } else if (urlObj.pathname == "/emacs") {
    emacscount++;
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    var jsonresult = { vim: vimcount, emacs: emacscount, windows: windows, mac: mac, linux: linux, before: before, after: after, pageloads: pageloads};
    res.end(JSON.stringify(jsonresult));
  } else if (urlObj.pathname == "/windows") {
    windows++;
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    var jsonresult = { vim: vimcount, emacs: emacscount, windows: windows, mac: mac, linux: linux, before: before, after: after, pageloads: pageloads};
    res.end(JSON.stringify(jsonresult));
  } else if (urlObj.pathname == "/mac") {
    mac++;
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    var jsonresult = { vim: vimcount, emacs: emacscount, windows: windows, mac: mac, linux: linux, before: before, after: after, pageloads: pageloads};
    res.end(JSON.stringify(jsonresult));
  } else if (urlObj.pathname == "/linux") {
    linux++;
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    var jsonresult = { vim: vimcount, emacs: emacscount, windows: windows, mac: mac, linux: linux, before: before, after: after, pageloads: pageloads};
    res.end(JSON.stringify(jsonresult));
  } else if (urlObj.pathname == "/before") {
    before++;
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    var jsonresult = { vim: vimcount, emacs: emacscount, windows: windows, mac: mac, linux: linux, before: before, after: after, pageloads: pageloads};
    res.end(JSON.stringify(jsonresult));
  } else if (urlObj.pathname == "/after") {
    after++;
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    var jsonresult = { vim: vimcount, emacs: emacscount, windows: windows, mac: mac, linux: linux, before: before, after: after, pageloads: pageloads};
    res.end(JSON.stringify(jsonresult));
  } else if (urlObj.pathname == "/query") {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    var jsonresult = { vim: vimcount, emacs: emacscount, windows: windows, mac: mac, linux: linux, before: before, after: after, pageloads: pageloads};
    res.end(JSON.stringify(jsonresult));
  } else if (urlObj.pathname == "/") {
    fs.readFile(ROOT_DIR + /*urlObj.pathname*/"/votingLocked.html", function(err, data) {
      if (err) {
        res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
      }
      pageloads++;
      res.writeHead(200);
      res.end(data);
    });
  } else {
    fs.readFile(ROOT_DIR + urlObj.pathname, function(err, data) {
      if (err) {
        res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
      }
      if (urlObj.pathname == "/voting.html") pageloads++;
      res.writeHead(200);
      res.end(data);
    });
  }
}).listen(3002);
console.log("Listening on port 3002");
