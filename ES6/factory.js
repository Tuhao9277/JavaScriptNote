{class Product {
    constructor(name) {
        this.name = name;
    }
    f1() {
        console.log("f1")
    }
    f2() {
        console.log('f2 ');
    }
}
class Creator {
    constructor(type) {
        let list = {
        apple:function(){
        },
        url:function(){

        }}
        this.create = function (type,options) {
            return new list[type](options);
        }
    }
}
   
{
    class Text{
        constructor(){
            this.text = text;
        }
        insert(where){
            const txt = document.createTextNode(this.text);
        where.appendChild(txt);
        }

    }
    class Link{
        constructor(url){
            this.url = url;
        }
        insert(where){
            const link = document.createElement('a');
            link.href = this.url;
            link.appendChild(document.createTextNode(this.url));
            where.appendChild(link)
        }

    }
    class Factory{
        constructor(type){
            return new this[type];
        }
        link(){
            return Link;
        }

        text(){
            return Text;
        }
    }
    let links = new Factory('link');
    links.url ="https://t.tt";
    links.insert(document.body);
    let texts = new Factory('text');
    texts.text = "hello";
    texts.insert(document.body);
}



// let creator = new Creator();
// let p = creator.create("p"); 
// p.name ="PDD";
// console.log(p);
// p.f2();
let a = new Creator();
a.create("apple",{usrl:"abc"});

 let DomFactory = (function () { 
    let list = {
        apple:function(){
        },
        url:function(){

        }}
    class A{
         create(type,options){
             return new list[type](options);
         }
     }
     return A;
     
  })();
//   new DomFactory().create();
}
// 车辆里程数问题
/**
 * 打车时，可以打专车或者快车。任何车都有车牌号和名称
 * 不同车价格不同，快车每公里1元，专车每公里2元
 * 行程开始时，显示车辆信息
行程结束时，显示打车金额（假定行程5公里）
 */
class Car {
    constructor(number,name){
        this.number = number;
        this.name = name;
    }
}


class benz extends Car{
    constructor(number,name){
        super(number,name);
        this.price = 2;
    }
}

class bmw extends Car{
    constructor(number,name){
        super(number,name);
        this.price = 1;
    }
}
class trip {
    constructor(car){
        this.car = car;
    }
    start(){
        console.log(`game Start! 车辆信息${this.car.name}`);
    }
    end(){
        console.log(`game over! 价格 ${this.car.price*5}`);
    }
}
let kp = new trip(new benz(666,"benz"));
kp.start();
kp.end();
