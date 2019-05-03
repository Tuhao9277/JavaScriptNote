class Product {
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
  new DomFactory().create();