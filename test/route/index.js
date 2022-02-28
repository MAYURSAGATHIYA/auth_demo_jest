const routerauth = require("../../routes/regrt");
// const routerblog=require("./blog")

const routes = [routerauth];
module.exports = (app) => {
  routes.forEach((route) => {
    app.use(route.routes()).use(route.allowedMethods());
  });
};
