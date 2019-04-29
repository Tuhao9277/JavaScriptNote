{
    let a = 10, b = 4;
    //b是全局变量;
}
{
    let { a, b } = { a: 1, b: 65 };
}
{
    let user = "luxun";
    let str = `666 ${user}`;
    console.log(str);
}
{
    function print([name1, name2, name3]) {
        let htmlstr = `
        <ul></ul>
        `
    }
}
{
    //对象合并
    // Object.assign({},obj1,obj2);
    // Object.assign(obj1,obj2);
    // 浅拷贝

    // 深拷贝

    var obj = {
        name: "WXZ",
        hero: [
            {
                name: "zulk",
                KDA: 7.26
            },
            {
                name: "kasa",
                KDA: 7.26
            }
        ]
    }
    function shallowClone (obj) {
        let newObj = {}
        for (const key in obj) {
           
            newObj[key] = obj[key];
        }
        return newObj;
    }
    function deepClone (target) {
        var isArr = target instanceof Array; // boolean
        let newObj = isArr?[]:{};   
        for (const key in target) {
            var value = target[key];
            if(typeof value == "object"){
                newObj[key] = deepClone(value);
            }else{
                newObj[key] = value;
            }
        }
        return newObj;
    }
    
    
}
