const webpackDevConfig = require('./webpack.dev.js');
const webpackProdConfig = require('./webpack.prod.js');

module.exports = function (grunt) {
    grunt.initConfig({

        webpack: {

            options: {
                stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development',
            },

            prod: webpackProdConfig,
            dev: Object.assign({ watch: true }, webpackDevConfig),
        },

        "webpack-dev-server": {
            dev: webpackDevConfig,
        },
        
    });
    grunt.loadNpmTasks("grunt-webpack");
};

