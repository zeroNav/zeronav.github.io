/*
 * @Created by zeronet on 2018-08-17 15:00:52
 * @Last Modified time: 2018-08-17 15:01:26
 * Main Enterpoint
 */

const fs = require('fs')
// const util = require('util')
const FS = require('fs-extra')
const PATH = require('path')
const YAML = require('yamljs')

/* CONST CONFIGS */
const CONFIG = YAML.parse(fs.readFileSync(PATH.resolve(__dirname, './config.yml')).toString())
const SRC = PATH.join(__dirname, '../source')
const DEST = PATH.join(__dirname, `../${ CONFIG.folder }`)

/* FUNCTIONS */
const copyFolder = () => new Promise((resolve, reject) => {
    if (!fs.existsSync(DEST)){
        fs.mkdirSync(DEST)
    }

    FS.copy(SRC, DEST, err => {
        if (err){
            reject(err)
        }
        else {
            console.log('Copy completed!')
            resolve()
        }
    })
})


/* INITIAL Vuepress Configure */
const initVuepress = () => new Promise(resolve => {
    const { vuepress, extra } = CONFIG
    const nav = []
    const folder = `${ DEST }/.vuepress`

    if (!fs.existsSync(folder)){
        fs.mkdirSync(folder)
    }

    fs.readdirSync(SRC).forEach(d => {
        if (!extra.includes(d)){
            nav.push({
                text: d,
                link: `/${ d }/`,
                exact: false
            })
        }
    })
    vuepress.themeConfig.nav = nav
    vuepress.chainWebpack = 'chain'

    /* Write configure file content to config.js */
    const ctx = JSON.stringify(vuepress, null, 2).replace(/"(.+?)": /g, '$1: ').replace(/"(chain)"/, '$1')

    fs.writeFileSync(
        `${ folder }/config.js`,
        `/*
* Vuepress Configuration Genetated Automaticallly
* Author: ZeroNav
* */
const chain = require('../../bin/chain.js')
module.exports = ${ ctx }`
    )

    resolve()
})

/* 1. build folder for build */

/* RUN */
copyFolder().then(() => {
    initVuepress()
}).catch(err => {
    console.error(err)
})
