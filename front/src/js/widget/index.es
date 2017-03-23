// 首页组件
import $ from '../libs/jquery.min.js'
import bootstrap from '../../css/bootstrap.css'
import bCss from '../../css/index.less'
import header from './header.es'
import users from './users.es'
import add from './add.es'
import model from '../model/indexModel.es'

class Index {
    constructor() {
        this.bindEvents();
        this.render();
        $('li:eq(0)').css('background', 'gainsboro');
    }

    bindEvents() {
        const _this = this;
        $('#add').click(function(ev) {
            ev.preventDefault();
            _this.toggleWrap();
        });
        $('#submit').on('click', function(ev) {
            _this.submit(ev);
        })
        $('#close').click(function(ev) {
            _this.toggleWrap();
        });
        $('#list').on('click', '.del', function(ev) {
            _this.delUser(ev);
        })
    }

    render() {
        let _this = this;
        model.getList({}, function(res) {
            let html = '';
            $.each(res.list, function(i, item) {
                html += `
  				<tr>
  					<td>${item.id}</td>
  					<td>${item.username}</td>
  					<td>${item.age}</td>
  					<td>${item.addr}</td>
  					<td>
  						<a href="#">编辑</a>&nbsp;&nbsp;&nbsp;
  						<a href="#" class="del" data-id="${item.id}">删除</a>
  					</td>
  				</tr>`;
            })
            $('#list').html(html);
        })
    }

    // 显示或隐藏弹框
    toggleWrap() {
        if ($('#maskLayer').css('display') === 'none') {
            $('#maskLayer').show();
            $('#exampleModal').show();
        } else {
            $('#maskLayer').hide();
            $('#exampleModal').hide();
        }
    }

    // 提交
    submit(ev) {
        const _this = this;
        ev.preventDefault();
        const url = 'http://localhost/contactPhp/index.php/home/index/addUser';
        const data = {
            username: $('#username').val(),
            age: $('#age').val(),
            addr: $('#addr').val()
        }
        this.ajax(url, data, function(res) {
            console.log('添加用户成功');
            _this.render();
            _this.toggleWrap();
        })
    }

    // 删除用户
    delUser(ev) {
        ev.preventDefault();
        const $target = $(ev.currentTarget);
        console.log($target.data('id'));
        const $tr = $(ev.target).closest('tr');
        const url = 'http://localhost/contactPhp/index.php/home/index/delUser';
        const data = {
            id: $target.data('id')
        }
        this.ajax(url, data, function(res) {
            if (res.code == 666) {
                console.log('删除成功');
                $tr.remove();
            } else {
                console.log('删除失败');
            }
        })
    }

    ajax(url, data, suc) {
        $.ajax({
            url: url,
            data: data,
            type: 'post',
            dataType: 'json',
            success: function(res) {
                suc(res);
            },
            error: function() {
                alert('error');
            }
        })
    }
}
const index = new Index();
export default index;
console.log('---------------------');
