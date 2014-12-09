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
    }
}
