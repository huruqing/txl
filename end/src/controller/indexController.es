import Model from'../model/indexModel'
const indexController  = {
	index() {
		return async(ctx,next) => {
			const model = new Model();
			const result = await model.index();
			ctx.body = result;
			//ctx.render('index',{list:JSON.parse(result).list});
		}
	},
	addUser() {
		return async(ctx,next)=>{
			const model = new Model();
			const result = await model.addUser(ctx.request.body);
			ctx.body = result;
		}
	},
	delUser() {
		return async(ctx,next)=>{
			const model = new Model();
			const result = await model.delUser(ctx.request.body);
			ctx.body = result;
		}
	},
	saveUser() {
		return async(ctx,next)=>{
			const model = new Model();
			const result = await model.saveUser();
			ctx.body = result;
		}
	}
}
module.exports = indexController;
