let arr = [3, 4, 2, 2, 3, 4];

function cardGroup(arr) {
    arr.sort((a, b) => a - b)
    let min = Number.MAX_SAFE_INTEGER;
    let dst = [];
    let result = true;
    for (let i = 0, temp = []; i < arr.length; i++) {
        temp.push(arr[i]);
        for (let j = i+1; j < arr.length - 1; j++) {
            if (arr[i] === arr[j]) {
                temp.push(arr[j]);
            } else {
                if (min > temp.length) {
                    min = temp.length;
                }
                dst.push([].concat(temp));
                temp.length = 0;
                i = j;
                break;
            }
        }
    }
    dst.every(item => {
        if (item.length % min !== 0) {
            result = false;
            return false;
        }
    })
    return result;
}
console.log(cardGroup(arr));