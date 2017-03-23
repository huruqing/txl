import $ from '../libs/jquery.min.js'
class Common {
    constructor() {

    }
    ajax(url, data, suc) {
        $.ajax({
            url: url,
            data: data,
            type: 'post',
            dataType: 'json',
            success: function(res) {
                if (res.code == 666) {
                    suc(res);
                } else {
					alert(res.msg || '请求失败');
					console.log(url);
				}
            },
            error: function() {
                alert('error');
				console.log(url);
            }
        })
    }
}
export default new Common();
