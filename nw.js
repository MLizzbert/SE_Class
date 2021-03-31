const http = require("http");
const port = 3800;

const server = http.createServer ((res, req) => {
    res.statusCode = 201;
    //res.setHeader("Content-Type", "text/plain");
    //res.end("Hello Lizzy");
});

server.listen(port, () => {
    console.log(`The server is now ready at: ${port}`);
});