const koa = require("koa");
const bodyparser = require("koa-bodyparser");
const setuproutes = require("./route/index");
const app = new koa();
app.use(bodyparser());
setuproutes(app);
module.exports = app;
