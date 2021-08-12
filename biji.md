# vue.config.js SVG图标配置
```
configureWebpack: {
    module: {
        rules: [
            {
                test: /\.(svg)(\?.*)?$/,
                exclude: [resolve('src/assets/icons')],
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[name].[hash:8].[ext]',
                        },
                    },
                ],
            },
        ],
    },
},
chainWebpack(config) {
    config.module
        .rule('svg')
        .exclude.add(resolve('src/svg/icons'))
        .end()
    config.module
        .rule('icons')
        .test(/\.svg$/)
        .include.add(resolve('src/svg/icons'))
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
        symbolId: 'icon-[name]'
        })
        .end()
},
```