
const xml2js = require('xml2js')
const fs = require('fs')
const dic = fs.readFileSync("./dic.xml").toString()
console.log(dic)


xml2js.parseString(dic, function (err, result) {


    fs.writeFileSync("./dic.json", JSON.stringify(result))

})
// console.log(jsondic)