{
    class createImg {
        constructor() {
            this.el = document.createElement("img");
            this.appendTo = function (target) {
                target.appendChild(this.el);
            };
            this.setSrc = function (url) {
                this.el.src = url;
            };
        }
    }
    // let oImg = new createImg()
    // oImg.setSrc("https://tpc.googlesyndication.com/daca_images/simgad/17887424927416549259");
    // oImg.appendTo(document.body);

    class proxyImg {
        constructor() {
            this.target = document.createElement("img");
            this.proxy = new Image();
            this.proxy.onload = () => {
                this.target.src = this.proxy.src;
            }
        }
        appendTo(ele) {
            ele.appendChild(this.target);
        }
        setSrc(url) {
            this.proxy.src = url;
        }
    }
}
{
    // let oImg2 = new proxyImg();
    // oImg2.setSrc("http://pic1.win4000.com/wallpaper/2018-11-14/5beb8adc4b306.jpg");
    // oImg2.appendTo(document.body);
    let Cal = {
        compute(port1, prot2) {
            // 计算过程
            return "航线图"
        }
    }

    // 写个代理，优化已写代码
    let proxy = {
        target: Cal,    // 委托
        cache: new Map(),  // 缓存
        compute(port1, prot2) {
            let res = this.cache.get(port1 + prot2)// 查找缓存中的数据
            if (res) return res;
            else {
                let temp = this.target.compute(port1, prot2);
                this.cache.set(port1 + prot2, temp);
                return temp;
            }
        }
    }
  //  let res = proxy.compute(p1, p2);
}
// 适配器模式
{
    class iPhone{
        constructor() {
        }
        playgame(){
        }
        caller(){
        }
    }
    class iPad{
        constructor() {
        }
        playgame(){
        }
    }
    function test(target){
        try {
            target.playgame();
            console.log("test Completed");
        } catch (error) {
            console.log("test Failed");
        }

        try {
            target.caller();
            console.log("test Completed");

        } catch (error) {
            console.log("test Failed");
        }
    }

    class Adapter {
        constructor(target) {
            this.target = target;
            this.playgame = function () {
                this.target.playgame();
            };
            this.caller = function () {
                console.log("this product cannot support call method");
            };
        }
    }
    let p1 = new iPhone();
    let p2 = new iPad();
    test(p1);
    test( new Adapter(p2));
}