const express = require("express");
const app = express();

const { graphqlHTTP } = require("express-graphql");
const cors = require("cors")

// 挂载 cors 中间件
app.use(cors())

// 挂载 graphql 中间件
app.use(graphqlHTTP({
  schema: require("./schema/index"),
  rootValue: require("./resolver/index"),
  graphiql: true, // 开启浏览器的 Graphql IDE 调试工具
}))


const port = 8080;
app.listen(port, () => {
  console.log(`\nGraphQL API server running at http://localhost:${port}/graphql\n`);
});