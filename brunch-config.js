module.exports = {
    files: {
        javascripts: {
            joinTo: 'vue-bootstrap.js'
        },
        templates: {
            joinTo: 'vue-bootstrap.js'
        }
    },
    plugins: {
        babel: {
            presets: ['es2015']
        }
    }
};
