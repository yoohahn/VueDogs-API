var server = require('../node_modules/punkapi-server/server');
var join = require('path').join;

var app = server.app();
var DIST_FOLDER = join(__dirname, '../dist');

app.get('/', function(req, res) {
  res.sendFile(join(DIST_FOLDER, 'index.html'));
});

/* serves all the static files */
/*
app.get(/^(.+)$/, function(req, res) {
  var file = req.params[0];
  var fullFilePath = join(DIST_FOLDER, req.params[0]);

  console.log('static file req: ' + file);
  res.sendFile(fullFilePath);
});
*/

/*
app.get(/^(.+)$/, function(req, res) {
  var file = req.params[0];
  var fullFilePath = join(DIST_FOLDER, req.params[0]);

  console.log('static file req: ' + file);
  res.sendFile(fullFilePath);
});
*/

app.use('/static', server.express().static(join(DIST_FOLDER, 'static')))
app.use('/images', server.express().static(join(DIST_FOLDER, 'images')))
server.start();