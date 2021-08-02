const express = require("express");
const path = require("path");
const app = express();
const hbbs = require("hbs");
const port = 4000;

// Public static path

const staticpath = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");

app.set("views", template_path);

hbbs.registerPartials(partials_path);

app.use(express.static(staticpath));

//routing
app.get("/", (req, res) => {
  res.render("index.hbs");
});

app.get("/about", (req, res) => {
  res.render("about.hbs");
});

app.get("/weather", (req, res) => {
  res.render("weather.hbs");
});

app.get("*", (req, res) => {
  res.render("404error.hbs", {
    errormsge: "Opps ! Error Not Found",
  });
});

app.listen(port, () => {
  console.log(`Server is running on the port ${port}`);
});
