const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Wellcome to my home page");
  }
  if (req.url === "/about") {
    res.end(
      "It is no secret that I am a great cook, but have you tried it? If not I encourage you to try it! You will love it"
    );
  }
  res.end(`<h1> Oops! </h1>
    <p>It seems like we cannot find what you're looking for</p>
    <a href="/">Back to home page </a>`);
});

server.listen(5500);
