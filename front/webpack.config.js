const devConfig = require('./config/dev.config.js');
const prodConfig = require('./config/prod.config.js');
console.log('当前环境',process.env.NODE_ENV || 'dev');
if (process.env.NODE_ENV === 'prod') {
	module.exports = prodConfig;
} else {
	module.exports = devConfig;
}
