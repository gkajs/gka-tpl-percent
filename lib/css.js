module.exports = function css(data, prefix, frameduration) {
    var frames = data.frames;

    var beforefilepath = "",
        filepath = "";

    // 取其中一帧(每一帧宽高一致)
    var frame = frames[0],
        width = frame.width,
        height = frame.height; 

    var len = frames.length;
    var per = 100 / (len);  // len === 2，0% 50% 100% ，确保播放 0% 和 50%

    var keyframesStr = frames.reduce(function(str, frame, i, frames){
        var s_w = data.w || frame.w,
            s_h = data.h || frame.h

        var s_w_p = (s_w / width) * 100 + '%',
            s_h_p = (s_h / height) * 100 + '%';

        var x = (0 - frame.x ) / ( width - s_w || 1) * 100 + '%' || 0,
            y = (0 - frame.y ) / ( height - s_h || 1) * 100 + '%' || 0;

        var percent = (i * (per)).toFixed(2);
        percent = percent == 0? 0: percent; // fix 0.00 to 0;

        filepath = './img/' + (data.file || frame.file);

        if (beforefilepath === filepath) {
            str += `
    ${percent}%{
        background-position: ${x} ${y};
    }`;
        } else {
            str += `
    ${percent}%{
        background-image: url("${filepath}");
        background-size: ${s_w_p} ${s_h_p};
        background-position: ${x} ${y};
    }`;
        }

        if (i == len - 1) {
            str += `
    100%{
        background-position: ${x} ${y};
    }
`;      }
        
        beforefilepath = filepath;
        return str;
    }, "");


    var css = `.gka-base {
    width: 100%;
    height: 0;
    padding-bottom: ${height/width * 100 + "%"};

    background-repeat: no-repeat;

    animation-timing-function: steps(1);
    animation-fill-mode: forwards;

    animation-iteration-count: infinite;

    /* Play once*/
    /* animation-iteration-count: 1; */ 
}

`;

    css += `.${prefix}animation {
    animation-name: ${prefix}keyframes;
    animation-duration: ${len * frameduration}s;
}

@-webkit-keyframes ${prefix}keyframes {${
    keyframesStr
}
}
`;

    return css;
}