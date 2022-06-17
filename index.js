const http = require("http");

const PORT = 3000;

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.method === "GET" && (req.url === "/home" || req.url === "/")) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<title>Homepage</title>");
    res.write("<body>");
    res.write("<a href='/about'>About</a> <a href='/contact'>Contact</a>");
    res.write("<p>Name: Nafiu Adegbite</p>");
    res.write("<p>Email: youngguru23@gmail.com</p>");
    res.write("<p>Gender: Male</p>");
    res.write("<p>Qualification: Bsc. Physics</p>");
    res.write("<p>Areas of Interest: Reading, Programming and Traveling</p>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else if (req.method === "GET" && req.url === "/about") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<title>About</title>");
    res.write("<body>");
    res.write("<a href='/'>Home</a> <a href='/contact'>Contact</a> <br>");
    res.write(
      "<p>I am backend software programmer, passionate about learning, studying and teaching</p>"
    );
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else if (req.method === "GET" && req.url === "/contact") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<title>Contact</title>");
    res.write("<body>");
    res.write("<a href='/'>Home</a> <a href='/about'>About</a> <br>");
    res.write(
      "<a href='https://www.facebook.com/adegbitenafiu'>Facebook</a> <br>"
    );
    res.write(
      "<a href='https://www.twitter.com/AdegbiteNafiu'>Twitter</a> <br>"
    );
    res.write(
      "<a href='https://www.instagram.com/nafiuadegbite'>Instagram</a> <br>"
    );
    res.write(
      "<a href='https://www.linkedin.com/in/nafiu-adegbite-87199373'>LinkedIn</a> <br>"
    );
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
