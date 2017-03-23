import xtag from '../libs/x-tag-core.js'
xtag.register('x-users', {
    content: `
    <div class="bs-example" data-example-id="contextual-table">
				<table class="table table-hover">
					<thead>
						<tr>
							<th>编号</th>
							<th>姓名</th>
							<th>年龄</th>
							<th>籍贯</th>
							<th>操作&nbsp;&nbsp;
								<a href="http://localhost:8080/index#" id="add">新增</a>
							</th>
						</tr>
					</thead>
					<tbody id="list">
					</tbody>
				</table>
			</div>
		</div>`,
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
