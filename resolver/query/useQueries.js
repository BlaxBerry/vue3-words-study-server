const exampleUser = require("./exampleUser/exampleUser")
const getWordsList = require("./list/getWordsList")



module.exports = (app) => {
    // exampleUser(app)
    getWordsList(app)
}