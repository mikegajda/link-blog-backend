const express = require("express");
const os = require("os");
const app = express();
require('dotenv').config();
const fs = require("fs");
const https = require("https");
const http = require("http")

var apiRouter = require("./controllers/api.js");


app.use(express.static("dist"));
app.use("/api", apiRouter);

// const httpsOptions = {
//     key: fs.readFileSync('./ssl/key.pem'),
//     cert: fs.readFileSync('./ssl/cert.pem')
// };

// const server = https.createServer(httpsOptions, app).listen(process.env.serverPort, () => {
//     console.log('server running at ' + process.env.serverPort)
// });

const server = http.createServer(app).listen(process.env.serverPort, () => {
    console.log('server running at ' + process.env.serverPort)
});
