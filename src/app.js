// const { hasSubscribers } = require("diagnostics_channel");
const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const partial_path = path.join(__dirname, "../views/partials")
app.use(express.static(static_path));

// hbs view engine set-up
app.set("view engine", "hbs");
hbs.registerPartials(partial_path);

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/weather", (req, res) => {
    res.render("weather");
});

app.get("/api", (req, res) => {
    res.render("api");
});

app.get("/*", (req, res) => {
    res.render("404");
});

app.listen(port, ()=>{
    console.log(`app started and listening to port no. ${port}.`);
});


