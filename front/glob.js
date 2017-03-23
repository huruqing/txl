var glob = require('glob');
var path = require('path');
var files = glob.sync("src/js/widget/*.es");
var pathDir = 'src/js/widget/';
var entries = {},
    entry, dirname, basename, pathname, extname;
for (var i = 0; i < files.length; i++) {
    entry = files[i];
    dirname = path.dirname(entry);
    extname = path.extname(entry);
    basename = path.basename(entry, extname);
    pathname = path.join(dirname, basename);
    pathname = pathDir ? pathname.replace(new RegExp('^' + pathDir), '') : pathname;
    entries[pathname] = ['./' + entry];
    console.log(entry);
}
