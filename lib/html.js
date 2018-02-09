var pkg = require("../package.json");
var gkaUtils = require('gka-utils');

module.exports = function html(data, opts, cssName) {

    var prefix = opts.prefix,
        names = JSON.stringify(gkaUtils.data.getImageNames(data)),
        width = data.frames[0].width,
        html = gkaUtils.html.getHtmlWrap(opts.gkaVersion, pkg.name, pkg.version);

    html.includeHeadContent(`<link href="./${cssName? cssName: 'gka.css'}" rel="stylesheet" type="text/css">`);
    html.includeBodyContent(`    ${gkaUtils.html.getChangeWidthHTML('    ', width)}
    
    <div id="container" style="width:${width}px; display:inline-block;">
        <div id="gka" class="gka-base"></div>
    </div>
    <script>
    ${gkaUtils.html.getPreloadImageScript('    ')}
    preloadImage(${names}, function() {
        document.getElementById('gka').className += " ${prefix}animation"
    }, "img/")
    </script>`);

    return html + '';
}