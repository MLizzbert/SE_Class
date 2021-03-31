const { stat } = require("fs/promises");
const http = require("http");
//const { url } = require("node:inspector");
const port = 3200; 

const game = [
    {id: 1, name: "Nintendo"},
    {id: 2, name: "Sega"},
    {id: 3, name: "XBox"},
    {id: 4, name: "PS"},
];


const server = http.createServer((req, res) => {
    //console.log("Hello");
    console.log(req.headers.authorization);
//to read a json file
//sending value to the header and consuming it
    const bodySection = [];
//to display the data in the array
    req.on("data", chunk => {
        bodySection.push(chunk)
    }).on("end", () => {
        body = Buffer.concat(bodySection).toString();
        //console.log(body);

        let status = 404;
        const response = {
            report: false,
            data: null
        }
    });
    //res.statusCode = 206;
    //res.setHeader("Content-Type", "Application/json")    
    
    res.writeHead(210, { "Content-Type": "Application/json" }); 
    //if (method === "GET" && url === "/") {
     //   res.write("Hello Lizzy");
    //}
    let status = 404
    const response = {
        report: false,
        data: null
    }

    //to get the data from the database, this is the code to use
    //if(method === "GET" && url === "/") {
     //   status = 200;
     //   response.report = true;
     //   response.data = game;
    //}

    if (method === "POST" && url === "/") {
        const { id, name } = JSON.parse(body);

        if(!id || !name) {
            status = 404;
            response.report = false;
            response.mgs = "You should enter both id and name";
            response.data = null;
        } else {
            game.push({ id, name });

            status = 201;
            response.report = true;
            response.data = game;
        }
       }

    //    game.push({ id, name });

    //    status = 201;
    //    response.report = true;
    //   response.data = game;
    //}

        res.writeHead(status, {"Content-Type": "Application/json" });
          res.end(JSON.stringify(response));
    });

        //res.write("Hello Lizzy");
    //res.end();

    //res.end(
    //    JSON.stringify({
            //status: "success",
    //        message: "success",
    //        data: game,
    //    })
    //);

}
//| is url, GET is method
//How to deconstruct - const { method, url} = req


server.listen(port,() => {
    console.log(port);
});
//quest is backend, while res is for front end
//in json data is an array of object

//To write to the body
//Express is used to consume the API
//backend needs to know how to create an API, while 
//assignment- using the http server, create 5 - 8 routes