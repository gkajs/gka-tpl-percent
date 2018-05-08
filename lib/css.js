var gkaUtils = require('gka-utils');
function toFrameCSSObject(frame, ratio) {
    let {
        width,
        height,
        offX = 0,
        offY = 0,
        file,
        x = 0,
        y = 0,
        w,
        h,
    } = frame;

    var s_w_p = (w / width) * 100 + '%',
        s_h_p = (h / height) * 100 + '%';

    var p_x = (0 - x ) / ( width - w || 1) * 100 + '%' || 0,
        p_y = (0 - y ) / ( height - h || 1) * 100 + '%' || 0;

    // (!(offX === 0 && offY === 0)) && (res['transform'] = `translate(${offX}px, ${offY}px)`);
    // (!(p_x === '0%' && p_y === '0%')) && (res['background-position'] = `${p_x} ${p_y}`);
    // (!(s_w_p=== '100%' && s_h_p === '100%')) && (res['background-size'] = `${s_w_p} ${s_h_p}`);
    return {
        "width": '100%',
        "height": 0,
        "padding-bottom": height / width * 100 + "%",
        "background-image": `url("${'./img/' + (ratio == 1? '': ratio + 'x' + '/') + file}")`,
        "background-position": `${p_x} ${p_y}`,
        "background-size": `${s_w_p} ${s_h_p}`,
    }
}
module.exports = function css(data, opts) {

    let {sourceW, sourceH, width, height} = data.frames[0];

    // TODO
    var css = gkaUtils.css.getCSSText('.gka-wrap', {
        width: `${sourceW || width}px`,
        height: `${sourceH || height}px`,
    });

    css += gkaUtils.css.keyframesAnimationCSS(data, opts, {
        toFrameCSSObject,
    });

    return css;
}