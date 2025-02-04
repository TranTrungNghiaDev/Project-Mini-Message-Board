const {Router} = require("express");
const path = require("path");
const indexRouter = Router();


const messages = [
    {
        text: "Hi there!",
        user: "Nghia",
        added: new Date()
    },
    {
        text: "I love you",
        user: "Ngan",
        added: new Date()
    }
];

indexRouter.get("/", (req, res) => {
    res.render("index", {title: "Mini Message", messages: messages});
})

module.exports = indexRouter;