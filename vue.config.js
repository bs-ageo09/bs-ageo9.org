const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
    configureWebpack: () => {
        return {
            plugins: [
                new PrerenderSPAPlugin({
                    staticDir: path.join(__dirname, '/dist'),
                    routes: [
                      '/',
                      '/contact'
                  ]
                })
            ]
        }
    }
}