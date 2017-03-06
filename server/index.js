var server = require('../node_modules/punkapi-server/server');
var join = require('path').join;

var app = server.app();
var DIST_FOLDER = join(__dirname, '../dist');

app.get('/', function(req, res) {
  res.sendFile(join(DIST_FOLDER, 'index.html'));
});

app.use('/static', server.express().static(join(DIST_FOLDER, 'static')))
app.use('/images', server.express().static(join(DIST_FOLDER, 'images')))
server.start();