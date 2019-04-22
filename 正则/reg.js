{
    let reg = /google/;
    let text = "google"
    // console.log(typeof reg); // 对象
    // console.log(reg.test(text)); // true
}
{
    let reg = /^google/; //字符串是否以google开头
    let text = "wa! google is a well company!";
    // console.log(reg.test(text)); // false
}
{
    let reg = /google$/; //字符串是否以google结尾
    let text = "wa! google is a well company!";
    // console.log(reg.test(text)); // false
}
{
    // 匹配 gogle google goooogle
    // + 至少有一个
    // * 任意次 
    let reg = /go+gle/;
    let reg2 = /go*gle/;
    // 匹配 g....任意字符出现任意次数..gle
    let reg3 = /g.*gle/; // . 匹配除了换行符之外的任何字符
}
{
    let reg3 = /go?gle/; // o 以出现0或1次
}
{
    let reg = /\^g\\\.gle\$\?/;

}
{

    let reg = /go{2}gle/;

    let reg2 = /go{2,}gle/;

    let re3 = /go{3,5}gle/;
    let re4 = /go.+gle/;
    let re5 = /go.+?gle/; //非贪婪
    let reg6 = /^[a-zA-z_][0-9A-Za-z_]{3,19}$/;
    // console.log(reg6.test("avb"));
    let reg7 = /foot|food/;
    let reg8 = /[^6-8]/; //^写到里面，数值范围取反
    let w = /\w{9,16}/; // \w等价于 [A-Za-z0-9_]
}
{
    //校验普通电话。传真号码
    let reg = /\+[0-9-]{6,9}$/ //检验加区号的电话号码 如 +86082-45841
}
{
    //匹配所有空格
    let reg = /\s+/g;
}
{
    //删除首尾空格
    let reg = /^\s+/;
    let reg2 = /\s+$/;
}
{
    // 邮箱
    let reg = /^\w+@\w+(\.\w+)+$/;
   // console.log(reg.test("503392549@qq.com"));
}
{
    // 手机号
    let reg = /^1[345678]\d{9}$/;
}
{
    // 日期
    let reg = /^\d{4}([-\/\.]\d{2}){2}$/;
}
{
    // 不能以数字开头
    let reg = /^[A-Za-z_]\w{5,14}$/
}
{
    //单词替换
    let reg = /b(a|e|i|o|u)g/gi;
    let str = "bagbegbigbogbug".replace(reg,"bug");
    console.log(str);
}
{
    // 修改所有foo方法的实例
    // foo(x,y,z) => foo(a,b,c);
    // "2018&08&08".replace(/(d{4})\D(d{2})\D(d{2})/,function(matched,sub1,sub2,sub3){
    //     console.log(matched,sub1,sub2,sub3);

    // });
    let reg = /foo\( ([^,]+),([^,]+),([^,]+)\)/;
    let str = "foo(a,b,c)".replace(reg,"foo($2,$1,$3");
}
{
    //重复->替换
    let reg = /(\s*really\s*)/g;  // \b 检测单词边界
}