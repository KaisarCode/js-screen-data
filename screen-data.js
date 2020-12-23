// Get screen data
function screenData() {
    var info = {};
    
    /* SCREEN DATA ****************************************************/
    info.screen = {};
    
    // Size
    var w = screen.width;
    var h = screen.height;
    var pxr = window.devicePixelRatio || 1;
    
    info.screen.width = w;
    info.screen.height = h;
    info.screen.density = pxr;
    
    // Orientation
    if (w > h) {
        info.screen.orientation = 'landscape';
        info.screen.resolution = [
        Math.round(w  * pxr),
        Math.round(h * pxr)
        ].join('x');
        var rl = (w / h).toFixed(2);
    } else {
        info.screen.orientation = 'portrait';
        info.screen.resolution = [
        Math.round(h  * pxr),
        Math.round(w * pxr)
        ].join('x');
        var rl = (h / w).toFixed(2);
    }
    
    // Aspect
    var ar = '4:3';
    if (rl > 1.5) ar = '16:9';
    info.screen.aspect = ar;
    
    /* VIEWPORT DATA **************************************************/
    info.viewport = {};
    
    // Size
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    
    info.viewport.width = w;
    info.viewport.height = h;
    info.viewport.density = pxr;
    
    // Orientation
    if (w > h) {
        info.viewport.orientation = 'landscape';
        info.viewport.resolution = [
        Math.round(w  * pxr),
        Math.round(h * pxr)
        ].join('x');
        var rl = (w / h).toFixed(2);
    } else {
        info.viewport.orientation = 'portrait';
        info.viewport.resolution = [
        Math.round(h  * pxr),
        Math.round(w * pxr)
        ].join('x');
        var rl = (h / w).toFixed(2);
    }
    
    // Aspect
    var ar = '4:3';
    if (rl > 1.5) ar = '16:9';
    info.viewport.aspect = ar;
    
    // Return
    return info;
}
