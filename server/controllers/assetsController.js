// This is the assets controller to serve css, js, partials, images, or bower packages.
module.exports = {
    images: {
        handler: {
            directory: {
                path: './server/images'
            }
        },
        app: {
            name: 'images'
        }
    },
    css: {
        handler: {
            directory: {
                path: './server/css'
            }
        },
        app: {
            name: 'css'
        }
    },
    js: {
        handler: {
            directory: {
                path: './server/js'
            }
        },
        app: {
            name: 'js'
        }
    },
    bower: {
        handler: {
            directory: {
                path: './server/bower_components'
            }
        },
        app: {
            name: 'bower'
        }
    },
    dist: {
        handler: {
            directory: {
                path: './server/dist'
            }
        },
        app: {
            name: 'dist'
        }
    }
}
