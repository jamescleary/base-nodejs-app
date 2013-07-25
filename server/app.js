
/**
 * Module dependencies.
 */

var express = require('express')
  , urls = require('./urls')
  , http = require('http')
  , path = require('path');

var app = express();
//var liveReloadPort;
//module.exports.liveReloadPort = liveReloadPort= 35729;

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
// middleware
//app.use(require('connect-livereload')({
//    port: liveReloadPort,
//}));
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, '../app')));

// routes
urls(app);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
