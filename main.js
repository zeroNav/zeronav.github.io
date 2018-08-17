/*
 * @Created by zeronet on 2018-08-17 15:00:52
 * @Last Modified time: 2018-08-17 15:01:26
 * Main Enterpoint
 */

const fs = require('fs')
const PATH = require('path')
const YAML = require('yamljs')

/* CONFIG */
const config = YAML.parse(fs.readFileSync(PATH.resolve(__dirname, './config.yml')).toString())

/* FUNCTIONS */
const copyFolder = () => {
    /**
     * Build a new folder for generate the public pages
     */
    const from = PATH.join(__dirname, './source'),
          to = PATH.join(__dirname, `./${ config.folder }`)

    if (!fs.existsSync(to)){
        fs.mkdirSync(to)
    }
}

/* TEST */
console.log(config)
