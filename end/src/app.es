import config from './conf/config'
import koa from 'koa'
const app = new koa();
import render from 'koa-swig'
import co from 'co'
import serv from 'koa-static'
import path from 'path'
import koaBody   from 'koa-body'
import request from 'supertest'
// 补完babel支持es6的拓展包
import babel_po from 'babel-polyfill'
// 跨域
import cors from 'koa-cors'
// 允许 http://localhost:8080访问
app.use(cors({
    origin: 'http://localhost:8080'
}));
app.use(serv(config.get('publicDir')));
//app.use(serv(path.join(__dirname, '..', 'public')));
app.use(koaBody({formidable:{uploadDir: __dirname}}));
import initController from './controller/initController';
initController.getAllController(app);
app.context.render = co.wrap(render({
    root: config.get('viewsDir'),
    autoescape: true,
    cache: 'memory',
    ext: 'html'
}))

app.listen(config.get('port'), () => {
    console.log('server started at locahost:3000');
})
export default app;
