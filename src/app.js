const bodyParser = require('koa-bodyparser');
const Koa = require('koa');
const router = require('./router');
const app = new Koa();
const port = 3000;

app.use(bodyParser());

app.use(router.routes());

app.listen(port);
