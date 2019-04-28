Array.prototype.indexOf = function (val) {
    for (let index = 0; index < this.length; index++) {
        if (val == this[index]) {
            return index;
        }
    }
    return -1;
}
Array.prototype.forEach = function (fn, target) {
    var callback = fn.bind(target);
    for (let index = 0; index < this.length; index++) {
        callback(this[i], i, this);

    }
}
Array.prototype.map = function (fn, target) {
    var callback = fn.bind(target);
    var arr = [];
    for (let index = 0; index < this.length; index++) {
        arr.push(callback(this[i], i, this));
    }
    return arr;
}
Array.prototype.filter = function (fn, target) {
    var callback = fn.bind(target);
    var newArr = [];
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArr.push(this[i]);
        }
    }
    return newArr;
}
// 叠加器
Array.prototype.reduce = function (fn, target) {
    var callback = fn.bind(target);
    var newArr = [];
    var res = this[0];
    for (let i = 0; i < this.length; i++) {
        res = callback(res, this[i + 1], this);
        newArr.push(res);
    }

}
Array.prototype.some = function (fn, target) {
    var callback = fn.bind(target);
    for (let index = 0; index < this.length; index++) {
        if (callback(this[index], index, this))
            return true;
    }
    return false;
}
Array.prototype.every = function (fn, target) {
    var callback = fn.bind(target);
    for (let index = 0; index < this.length; index++) {
        if (!callback(this[index], index, this))
            return false;
    }
    return true;
}
Array.prototype.find = function (param) {
    var callback = fn.bind(target);
    for (let index = 0; index < this.length; index++) {
        if (callback(this[index], index, this))
            return this[index];
    }
}
Array.prototype.findIndex = function (param) {
    var callback = fn.bind(target);
    for (let index = 0; index < this.length; index++) {
        if (callback(this[index], index, this))
            return index;
    }
    return -1;
}
// 数组中的数字去重
Array.prototype.numberNorepeat = function () {
    var obj = {};
    for (let i = 0; i < this.length; i++) {
        obj[this[i]] = 1;
    }
    var temp = [];
    for (const key in obj) {
        temp.push(Number(key));
    }
    return temp;
}
// 数组中的字符串去重
Array.prototype.stringNorepeat = function () {
    var obj = {};
    for (let i = 0; i < this.length; i++) {
        obj[this[i]] = 1;
    }
    var temp = [];
    for (const key in obj) {
        temp.push(key);
    }
    return temp;
}
Array.prototype.remove = function (item, eQual) {
    if (!eQual) {
        var index = this.indexOf(item);
        if (index != -1) {
            this.splice(index, 1);
        }
        else {
            for (let i = 0; i < this.length; i++) {
                if (eQual(this[i], item)) {
                    this.splice(i, 1);
                    break;
                }

            }
        }
    }
}


Array.prototype.first = function (param) { }

Array.prototype.initial = function (n) {
    var end = (n && n > 0 && n < this.length) ? this.length - n : this.length - 1;
    return this.slice(0, end);

}

/**
 * 
 * 返回数组中除了第一个元素外的其他全部元素。传递 index 参数将返回从index开始的剩余所有元素 
 */
Array.prototype.rest = function (index) {
    var start = (index && index < this.length) ? index : 1;
    return this.slice(start, this.length);

}
/**
 * flatten
 * 
 * 将一个嵌套多层的数组 array（数组） (嵌套可以是任何层数)转换为只有一层的数组。 如果你传递 shallow参数，数组将只减少一维的嵌套。
 */
Array.prototype.flatten = function (shallow) {
    var temp = temp || [];

    for (var index = 0; index < this.length; index++) {
        var value = this[index];
        if (!shallow) {
            temp.push(value);

        }
        else if (Array.isArray(value)) {
            temp = temp.concat(value.flatten(false));
        }
        else {
            temp.push(value);
        }
    }
    return temp;
}
//console.log([1, [2], [3, [[4]]]].flatten(true));

// without_.without(array, *values) 返回一个删除所有values值后的 array副本
Array.prototype.without = function (...arr) {
    var val = arr;

    return this.filter(function (item) {
        return val.indexOf(item) == -1;
    })

}
console.log([1, 2, 1, 0, 3, 1, 4].without(0, 1));
String.prototype.last = function (n) {
    return this.substring(this.length - n);
}
String.prototype.trim = function (param) {
    return this.replace(/^\s*/, '').replace(/\s*$/, '');
}
String.prototype.count = function (word) {
    var reg = new RegExp(word);
    return this.split(reg).length - 1;
}

