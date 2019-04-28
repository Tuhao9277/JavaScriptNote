
// 方法调用
// o.method();
// method.call(o);
// 改变自身的this指向 
function fn () {
    console.log(this);
}
// window.fn();
// fn.call(window);
function Ipod () {
    this.playMusic = function () {  
        console.log("playmusic");
        return 0;
    }
}
Itouch.prototype = new Ipod();
function Itouch(color,size,price){
    this.price = price;
    this.size = size;
    this.color = color;
    console.log("go!")
    this.play = function () {
        console.log("play...")
    }
}
Iphone.prototype = new Itouch();
function Iphone (color,size,price) {
    Itouch(); // 相当于window.Itouch ，IPhone下无play方法
    Itouch.call(this,color,size,price);// 相当于仅仅是// this.abc = Itouch;
                                // this.abc();
                             
    this.callNum = function () { 
        console.log("call...")
     }
    
}
var ip = new Iphone("red","3.2","2000");
ip.play();
console.log(ip.playMusic());