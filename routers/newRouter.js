const {Router} = require("express");

const newRouter = Router();

newRouter.get("/", (req, res) => {
    res.render("form/form");
})

module.exports = newRouter;