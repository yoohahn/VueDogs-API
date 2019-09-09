// var server = require("../node_modules/punkapi-server/index");
// var join = require("path").join;

// //var app = server.app();
// var DIST_FOLDER = join(__dirname, "../dist");

// server.get("/", function(req, res) {
//   res.sendFile(join(DIST_FOLDER, "index.html"));
// });

// server.use("/static", server.express().static(join(DIST_FOLDER, "static")));
// server.use("/images", server.express().static(join(DIST_FOLDER, "images")));
// server.start();

require("dotenv").config();

const express = require("express");
const join = require("path").join;
const system = require("../node_modules/punkapi-server/system");
const useCors = require("../node_modules/punkapi-server/lib/cors");
const rateLimit = require("../node_modules/punkapi-server/lib/rateLimit");
const {
  errorHandler,
  notFoundError
} = require("../node_modules/punkapi-server/lib/errorHandler");

const app = express();
const port = system.getPort();
const DIST_FOLDER = join(__dirname, "../dist");

app.use(require("helmet")());
app.use(require("express-validator")());

app.use(
  "/api/v2",
  useCors(),
  rateLimit,
  require("../node_modules/punkapi-server/routes")
);
app.use("/static", express.static(join(DIST_FOLDER, "static")));
app.use("/images", express.static(join(DIST_FOLDER, "images")));

app.use("/", function(req, res) {
  res.sendFile(join(DIST_FOLDER, "index.html"));
});

app.use("*", (req, res, next) =>
  next(notFoundError(`No endpoint found that matches '${req.originalUrl}'`))
);

app.use(errorHandler);

const server = app.listen(port, function(error) {
  if (error) throw error;

  process.once("SIGTERM", system.shutdown(server));
  console.info(`Listening on http://localhost:${port}`);
});

module.exports = server;
