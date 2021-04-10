const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const path=require("path");
const hbs=require("hbs");
// public staric path
const staticpath=path.join(__dirname,"../public");
// console.log(staticpath);
const template_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");

app.set('view engine','hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path);
app.use(express.static(staticpath));//to serve static page
// routing
app.get("", (req, res) => {
    res.render('index')
})
app.get("/courses", (req, res) => {
    res.render('courses');
})
app.get("/research", (req, res) => {
    res.render("research");
})
app.get("/project", (req, res) => {
    res.render("project");
})
app.get("/faculty", (req, res) => {
    res.render("faculty");
})
app.get("*", (req, res) => {
    res.render("404");
})
app.listen(port, () => {
    console.log(`runing on ${port} port`);
}); 