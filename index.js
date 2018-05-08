var gkaUtils = require('gka-utils');
var css = require("./lib/css"),
    html = require("./lib/html");

module.exports = class PercentTemplatePlugin {
    apply(compiler) {
        compiler.hooks.on('templateOptions', (context, next) => {
            context.options.crop = false;
            context.options.sprites = true;
            context.options.split = false;
            context.options.diff = false;
            next(context);
        })
        compiler.hooks.on('template', (context, next) => {
            const {
                options,
                data,
            } = context;
            
            const dir = options.imgOutput;
                    
            function run(data, opts, key) {
                var name = (key? key + '-' : '') + 'gka',
                    cssName = name + '.css',
                    htmlName = name + '.html';
                
                context.assets[cssName] = css(data, opts);
                context.assets[htmlName] = html(data, opts, cssName);
            }
        
            run(data[0], options);
        
            // 对每个子目录都进行处理
            gkaUtils._.effectSubFolderSync(run, data[0], options);
        
            next(context);
        })
    }        
}