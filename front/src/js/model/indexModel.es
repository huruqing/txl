import common from '../common/common.es'
import {urlRoot} from '../common/constant.es'
const {ajax} = common;
class Model {
    constructor() {
        
    }

    // 获取用户列表
    getList(data,suc) {
        const url = `${urlRoot}getList`;
        ajax(url, data, function(res) {
           suc(res);
        })
    }
    // 提交
    submit(data,suc) {
        const url = `${urlRoot}addUser`;
        ajax(url, data, function(res) {
           suc(res);
        })
    }

    // 删除用户
    delUser() {
			const url = `${urlRoot}delUser`;
			ajax(url, data, function(res) {
				 suc(res);
			})
    }
}
export default new Model();
