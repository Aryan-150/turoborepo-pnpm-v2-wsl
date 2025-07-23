import express from "express";
import { prisma } from "@repo/db/client";
import userMiddleware from "./middlewares/usermiddleware.js";

const app = express();

app.get("/",userMiddleware, async (req, res) => {
    const users = await prisma.user.findMany({})

    res.json({
        users
    })
})


app.listen(8080, () => {
    console.log(`server is listening at port:8080`);
})