const http = require("http");
const port = 3000;

const fs = require("fs");
const path = require("path");

http
  .createServer((req, res) => {
    switch (req.url) {
      case "/":
        req.url = "index.html";
        break;
      case "/cars":
        req.url = "cariMobil.html";
        break;
    }
    let path = "public/" + req.url;
    fs.readFile(path, (err, data) => {
      res.writeHead(200);
      res.end(data);
    });
  })
  .listen(port, "localhost", () => {
    console.log(
      "Server sudah berjalan, silahkan buka http://localhost:%d",
      port
    );
  });
