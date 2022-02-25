const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const readFile = promisify(fs.readFile)


const getWordsData = async (lang = 'en') => {
    const filePath = path.join(__dirname, `../../../db/words/${lang}.json`)
    const words = await readFile(filePath, "utf-8")
    return words ? JSON.parse(words) : [{ name: "", id: "", createAt: "" }]
}


module.exports = getWordsData