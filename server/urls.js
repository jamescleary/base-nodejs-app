'use strict';
var main = require('./controllers/index')
  , user = require('./controllers/user');

module.exports = function(app) {
    app.get('/', main.index);
    app.get('/users', user.list);
}

