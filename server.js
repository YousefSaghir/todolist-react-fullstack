var express = require("express"),
  app = express(),
  port = process.env.PORT || 3001,
  mongoose = require("mongoose"),
  Task = require("./api/models/todoListModel"), //created model loading here
  bodyParser = require("body-parser");
// mongoose instance connection url connection
mongoose.connect("mongodb://localhost/Tododb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require("./api/routes/todoListRoutes"); //importing routes
routes(app); //register the routes
app.listen(port);
console.log("Todo list RESTful API server started on: " + port);
