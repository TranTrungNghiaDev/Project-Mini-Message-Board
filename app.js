const express = require("express");
const indexRouter = require("./routers/indexRouter");
const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));

app.use("/", indexRouter);

const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.listen(PORT, HOST, () => {
    console.log(`Server is running on ${HOST}:${PORT}`);
});