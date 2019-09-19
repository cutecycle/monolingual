
const xml2js = require('xml2js')
const fs = require('fs')
const dic = fs.readFileSync("./dic.xml").toString()
console.log(dic)

const jsondic = xml2js.parseString(dic)
fs.writeFile(jsondic)
// console.log(jsondic)