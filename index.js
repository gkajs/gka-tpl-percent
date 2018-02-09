var gkaUtils = require('gka-utils'),
    writeSync = gkaUtils.file.writeSync;
var html = require("./lib/html"),
    css = require("./lib/css");

module.exports = function (data, opts, cb) {
    
    var dir = opts.imageDir;

    function run(data, opts, key) {
        var name = (key? key + '-' : '') + 'gka',
            cssName = name + '.css',
            htmlName = name + '.html';

     	writeSync([dir, '..', cssName], css(data, opts));
        writeSync([dir, '..', htmlName], html(data, opts, cssName));
    }

    run(data, opts);

    // 对每个子目录都进行处理
    gkaUtils._.effectSubFolderSync(run, data, opts);

    cb && cb();
};

