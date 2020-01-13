const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const getXml=require('./fetch');



const schema = buildSchema(`
  type Query {
    allNews: [News]!,
    news(id: ID): News,
    allUsers: [User]!
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
  type User{
    id: ID!,
    subscription: [String]!,
    login: String!,
    password: String!
  }
  input UserInput{
    subscription: [String],
    login: String,
    password: String
  }
  type Mutation{
    createUser(input: UserInput): User,
    updateUser(id: ID!,input: UserInput): User
  }
`);

const userDB={};
class User{
  constructor(id,{subscription,login,password}){
    this.id=id;
    this.subscription=subscription;
    this.login=login,
    this.password=password
  }
}
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
    },
    createUser: ({input})=>{
      let id=Math.floor(Math.random()*10000);
      userDB[id]=input;
      return new User(id,input)
    },
    updateUser: ({id,input})=>{
      if(!userDB[id]){
        throw new Error('crashed in update root func');
      }
      userDB[id]=input;
      return new User(id,input)
    },
    allUsers: ()=>{
      let users=[];
      for(let key in userDB){
        users.push(new User(key,userDB[key]));  
      }
      return users
    }
};

const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));