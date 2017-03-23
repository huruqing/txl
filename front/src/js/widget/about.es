// 首页组件
import bootstrap from '../../css/bootstrap.css'
import aboutCss from '../../css/about.less'
import $ from '../libs/jquery.min.js'
import header from './header.es'

class About {
	constructor() {
		$('li:eq(2)').css('background','gainsboro');
	}
}
const about = new About();
console.log('---------------------');
