// 定义 schema 的对应处理器 resolver

const getWordsList = require("./query/list/getWordsList")


module.exports = {
    exampleUser: () => ({
        name: () => "Andy",
        age: () => 28,
    }),

    wordsList: () => getWordsList(),
};