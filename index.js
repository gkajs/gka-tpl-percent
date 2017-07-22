var html = require("./lib/html"),
	css = require("./lib/css");

module.exports = function (data, opts, tool) {
    var prefix = opts.prefix,
        frameduration = opts.frameduration;

    var names = tool.getNames();
    
    tool.writeFile("gka.css", css(data, prefix, frameduration));
    tool.writeFile("gka.html", html(names, prefix));
};

