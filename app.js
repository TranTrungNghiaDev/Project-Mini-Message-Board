const express = require("express");
const messagesRouter = require("./routers/messagesRouter");
const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));

app.use("/", messagesRouter);

const PORT = process.env.PORT | 3000;
const HOST = process.env.HOST;

app.listen(PORT, HOST, () => {
    console.log(`Server is running on ${HOST}:${PORT}`);
});