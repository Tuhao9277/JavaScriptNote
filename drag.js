/**
 * 
 * @param {Element} ele 元素
 * @param {{x,y,limit,paddingLeft ,paddingRight,paddingTop,paddingBottom,marginLeft, marginTop }} options 拖拽方向,活动范围是否限制在其父级元素内
 */
function draggable(ele, options) {
    // options有以下几种情况：
    // 未传值（不存在），参数类型不为Boolean：为空，未定义，为其他类型
    // 首先检验是否传值，未传值，则设默认x，y为true
    // 若参数为Boolean类型，则x就为该参数，否则设置成true
   
    // 对接受的参数进行检验
    if (!ele)
        throw new Error("Element is not exist!");
    if (ele.nodeType != 1)
        throw new Error("Invalid type of element")
    if (getStyle(ele).position == "static") {
        throw new Error("Immovable element!");
    }
    // 设置默认属性
    var options_default = {
        x  : options ? (typeof options.x == "boolean" ? options.x : true) : true,
        y  : options ? (typeof options.y == "boolean" ? options.y : true) : true
    }, offX = 0,
        offY = 0;
 
    // 移动方法和开始方法
    function move(e) {
     
        e = e || event;
        if (options_default.x) {
            var _left = e.clientX + document.body.scrollLeft - offX;
            ele.style.left = Math.min(Math.max(_left, 0), window.innerWidth - ele.offsetWidth) + "px";
        } if (options_default.y) {
            var _top = e.clientY + document.body.scrollTop - offY;
            ele.style.top = Math.min(Math.max(_top, 0), window.innerHeight) + "px";
        }
    }
    function start(e) {   
             e = e || event;
            
                offX = e.offsetX;
                offY = e.offsetY;
            addEvent(document, "mousemove", move);
    }
    // 添加监听事件 ，注意解决兼容问题，
    // 首先是鼠标按下，执行start方法
    addEvent(ele, "mousedown", start);
    // 鼠标弹起，执行消除
    addEvent(document, "mouseup", function () {
        removeEvent(document, "mousemove", move);
    });
    return function () {
        removeEvent(ele, "mousedown", start);
    }
}
/**
 * 添加监听事件
 * @param {Element} ele 元素
 * @param {Event} eventName 添加的事件名称
 * @param {function} callback 回调函数
 * @param {boolean} isCapture 事件捕获
 */
function addEvent(ele, eventName, callback, isCapture) {
 
    if (window.VBArray) {
        ele.attachEvent("on" + eventName, callback);
    }
    else {
        ele.addEventListener( eventName, callback, isCapture);
    }
}
/**
 * 移除监听事件，
 * @param {Element} ele 元素
 * @param {Event} eventName 移除的事件名称
 * @param {function} callback 回调函数
 */
function removeEvent(ele, eventName, callback) {
    if (window.VBArray) {
        ele.detachEvent("on" + eventName, callback);
    }
    else {
        ele.removeEventListener(eventName, callback);
    }
}

function getStyle(ele) {
    return window.VBArray ? ele.currentStyle : getComputedStyle(ele);
}