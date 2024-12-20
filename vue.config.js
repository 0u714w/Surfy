module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/vue-surf-app/' : '/',
    devServer: {
        port: 8080,
        open: true
    }
};