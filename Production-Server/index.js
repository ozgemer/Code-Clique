import express from "express";
import path from "path";
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

express()
    .use(express.static(path.join(__dirname, "../masterClient/build/static")))
    .get("*", (req, res) => {
        res.sendFile("remoteEntry.js", { root: "../masterClient/build/static" });  
    })
    .listen(9000, () => console.log("Production Server running on port 9000"));
