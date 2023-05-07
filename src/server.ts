import express from "express";
import router from "./router";

const server = express()

server.use(router)

server.listen(1999, ()=> {
    console.log(`Server start at 1999`)
})