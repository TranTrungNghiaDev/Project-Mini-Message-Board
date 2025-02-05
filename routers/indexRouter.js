const {Router} = require("express");
const path = require("path");
const indexRouter = Router();


const messages = [
    {
        text: "Hi there!",
        user: "Nghia",
        added: new Date().toISOString().split('T')[0]
    },
    {
        text: "I love you",
        user: "Ngan",
        added: new Date().toISOString().split('T')[0]
    }
];

indexRouter.get("/", (req, res) => {
    res.render("index", {title: "Mini Message", messages: messages});
})

indexRouter.get("/new", (req, res) => {
    res.render("form/form");
})

indexRouter.post("/new", (req, res) => {
    messages.push({text: req.body.message, user: req.body.author, added: new Date().toISOString().split('T')[0]});
    res.redirect("/");
})

indexRouter.post("/detail", (req, res) => {
    const message = {};
    message.user = req.body.user;
    message.text = req.body.message;
    message.added = req.body.added;

    res.render("MessageDetail/messageDetail", {message: message});
})

module.exports = indexRouter;