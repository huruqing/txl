import xtag from '../libs/x-tag-core.js'
xtag.register('x-head', {
    content: `<ul class="nav nav-tabs">
    <li role="presentation" class="active"><a href="index.html">用户列表</a></li>
    <li role="presentation"><a href="other.html">其他</a></li>
    <li role="presentation"><a href="about.html">关于我们</a></li> </ul>`,
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
