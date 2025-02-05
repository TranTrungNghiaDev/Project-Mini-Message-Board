const express = require("express");
const indexRouter = require("./routers/indexRouter");
const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));

app.use("/", indexRouter);

const PORT = 8000;

app.listen(PORT, "0.0.0.0");