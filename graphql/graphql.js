const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const getXml=require('./fetch');



const schema = buildSchema(`
  type Query {
    allNews: [News]!,
    news(id: ID): News
  }
  type News{
        id: ID!,
      title: String!,
       link: String!,
       description: String!,
       content: String!,
       pubDate: String!,
       category: [String]!
    }
`);

const root = { news: async ({id}) => {
        let data=await getXml();
        //console.log(data);
        //console.log(`id=${[id]}`);
        //console.log(data.filter((news=>news.id==id))[0]);
        return data.filter((news=>news.id==id))[0];
    },
    allNews: async ()=> {
        let data=await getXml();
        return  data
    }
};

const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));