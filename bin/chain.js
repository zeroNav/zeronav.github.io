module.exports = (config, isServer) => {
    if (isServer === false){
        config.node.set('Buffer', false)

        config.optimization.splitChunks({
            maxInitialRequests: 5,
            cacheGroups: {
                vue: {
                    test: /[\\/]node_modules[\\/](vue|vue-router)[\\/]/,
                    name: 'vendor.vue',
                    chunks: 'all'
                },
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    name: 'vendor.commons',
                    chunks: 'all'
                }
            }
        })
    }
}
