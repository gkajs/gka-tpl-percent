var gkaUtils = require('gka-utils');
var css = require("./lib/css"),
    html = require("./lib/html");

var writeSync = gkaUtils.file.writeSync;

module.exports = function (data, opts, cb) {
    var dir = opts.imgOutput;

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

module.exports.config = function(opts) {
    // console.log(opts)
    return {
        crop: false,
        sprites: true,
    }
};