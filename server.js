const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, "index.html");
  console.log("Lecture du fichier :", filePath);

  fs.readFile(filePath, (err, content) => {
    if (err) {
      console.error("Erreur lecture fichier :", err);
      res.writeHead(500);
      res.end("Erreur serveur");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    }
  });
});

server.listen(3000, () => {
  console.log("Serveur lancé sur http://localhost:3000");
});