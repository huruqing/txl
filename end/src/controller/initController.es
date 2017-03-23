import router from 'koa-simple-router'
import index from './indexController'
import error from '../common/error'
const initController = {
    getAllController(app) {
        // 错误处理的中间件要放在前面,因为用了await,
        // 它会执行了其他的路由,最后回来处理错误
        error.err(app);
        app.use(router(_ => {
            _.all('/getList', index.index());
            _.all('/addUser', index.addUser());
            //_.all('/delUser', index.delUser());
            _.all('/delUser', index.delUser());
            _.all('/saveUser', index.saveUser());
        }));
    }
}
module.exports = initController;
