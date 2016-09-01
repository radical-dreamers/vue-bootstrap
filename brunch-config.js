module.exports = {
    paths: {
        public: 'dist',
        watched: ['src', 'test', 'vendor']
    },
    files: {
        javascripts: {
            joinTo: {
                'vue-bootstrap.js': /^src/
            }
        },
        templates: {
            joinTo: {
                'vue-bootstrap.js': /^src/
            }
        }
    },
    plugins: {
        babel: {
            presets: ['es2015']
        },
        uglify: {
            mangle: false
        }
    }
};
