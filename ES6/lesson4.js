{
    class Ipod{
        static print(){
            console.log(this);
            console.log("static print");
        }
        constructor(color){
            this.color = color;
        
        }
        play(){}
    }
    // 原型继承
    class Itouch extends Ipod{
        constructor(color,price){
            super(color); // ipod.call();
            this.price = price;
        }
        playgame(){
        };   
    }

    // console.info(new Itouch("ChineseRed",3000))
  //  console.log(Ipod.print());
}
{
    class parent{
        constructor(name = "father"){
            this.name =  name;
        }
    }
    class son extends parent{
        constructor(name,type="child"){
            super(name);
            this.type = type;
        }
    }
    let father = new parent();
    console.log(father);
    console.log(new son("sun"),father.name);
}