module.exports = {
    index: {
        handler: function(request, reply) {
            reply.view('./index', {
                title: 'Wengum'
            });
        },
        app: {
            name: 'index'
        }
    },
    welcome: {
        handler: function(request, reply) {
            reply.view('./welcome', {
                title: 'Wengum'
            });
        },
        app: {
            name: 'welcome'
        }
    }
}
