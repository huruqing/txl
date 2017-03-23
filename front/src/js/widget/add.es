import xtag from '../libs/x-tag-core.js'
xtag.register('x-add', {
    content: `<div  style="display: none;" class="modal fade show" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" style="display: block;">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
						<h4 class="modal-title" id="exampleModalLabel">新增用户</h4>
					</div>
					<div class="modal-body">
						<form>
							<div class="form-group">
								<label for="recipient-name" class="control-label">用户名:</label>
								<input type="text" class="form-control" id="username" value="">
							</div>
							<div class="form-group">
								<label for="recipient-name" class="control-label">年龄:</label>
								<input type="text" class="form-control" id="age">
							</div>
							<div class="form-group">
								<label for="recipient-name" class="control-label">籍贯:</label>
								<input type="text" class="form-control" id="addr" value="gx">
							</div>
							<div class="modal-footer">
								<button id="close" type="reset" class="btn btn-default" data-dismiss="modal">关闭</button>
								<button id="submit" type="submit" class="btn btn-primary">提交</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<div id="maskLayer" class="modal-backdrop fade show" style="display: none;"></div>`,
    lifecycle: {
        created: function() {},
        inserted: function() {},
        removed: function() {},
        attributeChanged: function() {}
    },
    methods: {
        someMethod: function() {}
    },
    accessors: {
        someAccessor: {
            // links to the 'some-accessor' attribute
            attribute: {},
            set: function() {},
            get: function() {}
        }
    },
    events: {
        tap: function() {},
        focus: function() {}
    }
});
