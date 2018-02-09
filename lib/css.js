var gkaUtils = require('gka-utils');

function getConfig(frame, i, frames, key) {
    var {
        width,
        height,
        offX,
        offY,
        file,
        x,
        y,
        w,
        h,
    } = frame;

    var file = './img/' + file;

    var s_w_p = (w / width) * 100 + '%',
        s_h_p = (h / height) * 100 + '%';

    var p_x = (0 - x ) / ( width - w || 1) * 100 + '%' || 0,
        p_y = (0 - y ) / ( height - h || 1) * 100 + '%' || 0;

    return {
        'background-image': `url("${file}")`,
        'background-position': `${p_x} ${p_y}`,
        'background-size': `${s_w_p} ${s_h_p}`
    }
}

function injectAnimationCSS(firstFrame) {
    var {
        width,
        height,
        offX,
        offY,
        file,
        x,
        y,
        w,
        h,
    } = firstFrame;

    var file = './img/' + file;

    var s_w_p = (w / width) * 100 + '%',
        s_h_p = (h / height) * 100 + '%';

    return {
        width: `100%`,
        height: 0,
        'padding-bottom': height / width * 100 + "%",
        'background-size': `${s_w_p} ${s_h_p}`
    }
}

module.exports = function css(data, opts) {
    var css = gkaUtils.css.getKeyframesCSS(data, opts, {
        getConfig,
        injectAnimationCSS
    });

    return css;
}