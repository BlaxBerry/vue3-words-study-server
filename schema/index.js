const { buildSchema } = require("graphql");

// 创建 schema 查询和类型

module.exports = buildSchema(`
    type ExampleUser {
        name: String
        age: Int
    }

    type ExpressionItem {
        a: String
        b: String
    }

    type WordsListItem {
        name: String!
        id: ID!
        createAt: String!
        expressions: [ExpressionItem]
    }


    type Query {
        exampleUser: ExampleUser
        wordsList: [WordsListItem]
    }
`);