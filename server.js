const koa = require('koa');
const app = new koa();
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://strongdemon:kdb65GK6zYJvRcg@strong.obgla.mongodb.net/myFirstDatabase?authSource=admin&replicaSet=atlas-lnv1hu-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true";

const jwt = require('jsonwebtoken');
const json = require('koa-json');
app.use(json());
const bodyParser =require ('koa-bodyparser');
// const OktaJwtVerifier = require('./routes/jwtverifier.js')
// OktaJwtVerifier=new OktaJwtVerifier()

app
  .use(bodyParser({
    enableTypes: ['json'],
    extendTypes: ['application/json'],
    onerror: function (err, ctx) {
      ctx.throw('Body parse error', 422);
    }
  })) 

const regRoute =require('./routes/regrt');
const port = 1111;
const Router = require('koa-router');
const router = new Router();





app.use(router.routes()).use(router.allowedMethods());
// app.use(regRoute.routes()).use(regRoute.allowedMethods());

// const {router:proute}=require("./api/post_api")
// app.use(proute.routes()).use(proute.allowedMethods());

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })
  
 


  module.exports=app
  //hello