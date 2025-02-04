const express = require("express");
const indexRouter = require("./routers/indexRouter");
const newRouter = require("./routers/newRouter");
const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/new", newRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Project Mini Message Board - listening on PORT : ${PORT}`);
})