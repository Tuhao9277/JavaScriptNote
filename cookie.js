function addCookie(key, value, days) {
    var now = new Date();
    now.setTime(now.getDate() + days);
    document.cookie = key + "=" + value + ";" + "expires=" + now.getDate();
}
function getCookie(key) {
    //按分号分割每个键值
    var list = document.cookie.split(";");
    for (var i in list) {
        // 分割键值的键和值
        var kv = list[i].split("="); // kv临时变量，保存每一次分割后的键值对
        if (kv[0] == key)
            return kv[1];
    }
}
function getCookieByReg(key) {
    var arr = document.cookie;
    // 两种情况：一种 键值在cookie末，一种在cookie中
    var reg1 = new RegExp(key + "=([^;]+)$");
    var reg2 = new RegExp(key + "=([^;]+);");
    if (reg1.test(arr)) {
        return arr.match(reg1)[1];
    }
    else {
        return arr.match(reg2)[1];
    }
}