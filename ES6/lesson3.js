{
    let imgs = new Set();
    imgs.add(1);
    imgs.add(2);
    imgs.add(2);
    imgs.add(new String("abc"));
    for (const iterator of imgs) {
        console.log(iterator);
    }
    imgs.delete(1);
    console.log("-------------");
    for (const iterator of imgs) {
        console.log(iterator);
    }
    console.log([...imgs]);
    // [...new Set(arr)]; 数组去重
    // 使用for of的数组才能使用展开运算符

}
{
    let map = new Map();
}