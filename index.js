var Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.createServer('localhost', '8000', {cors: true});

// Template Ending
server.views({
    path: './server/views',
    engines: {
        jade: require('jade')
    }
});

// Register plugins
require('./config/plugins')(server);

// Add the server routes
server.route(require('./config/routes'));

// Start the server
server.start(function() {
    console.log('Server running at:', server.info.uri);
});
