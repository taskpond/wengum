module.exports = function(server) {

    var goodOptions = {
        opsInterval: 1000,
        reporters: [{
            reporter: require('good-console'),
            args: [{
                log: '*',
                request: '*',
                error: '*',
                log: '*'
            }]
        }]
    };

    server.pack.register(
        [{
            // Registe good
            plugin: require('good'),
            options: goodOptions
        }, {
            // Register hapi-named-routes
            plugin: require("hapi-named-routes")
        }],
        function(err) {

            if (err) throw err;

        });

};
