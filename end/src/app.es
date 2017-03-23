import config from './conf/config'
import koa from 'koa'
const app = new koa();
// 1,使用swig模板,koa2需要使用co包一下
import render from 'koa-swig'
import co from 'co'
// 2,配置静态资源
import serv from 'koa-static'
import path from 'path'
// 3,koa-body 解析form表单
import koaBody   from 'koa-body'
// 4,测试
import request from 'supertest'
// 5,补完babel支持es6的拓展包
import babel_po from 'babel-polyfill'
// 6,koa2跨域
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
