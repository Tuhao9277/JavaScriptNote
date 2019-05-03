class SingleObject {
    login() {
        console.log("login...")
    }
}
SingleObject.getInstance = (function () {
    let instance;
    return function () {
        if (!instance) {
            instance = new SingleObject();
        }
        return instance;
    }
}())
let o1 = SingleObject.getInstance();
o1.login();
let o2 = SingleObject.getInstance();
o2.login();
console.log(o1 === o2);
let o3 = new SingleObject();
o3.login();
console.log(o1 === o3);

class singleTon {
    constructor(info) {
        if (!singleTon.instance) {
            this.el = document.createElement("div");
            this.init();
            singleTon.instance = this;
        }
        singleTon.instance.setText(info);
        singleTon.instance.show();
        return singleTon.instance;
    }
    init() {
        this.el.style.width = "100px";
        this.el.style.height = "100px";
        this.el.style.fontSize = "20px"
        this.el.style.margin = "auto"
        this.el.style.textAlign = "center"
        document.body.appendChild(this.el);
    }
    show() {
        this.el.style.display = "block";
        setTimeout(() => {
            this.hide();
        }, 1000);
    }
    hide() {

        this.el.style.display = "none";
    }
    setText(info) {
        this.el.innerText = info;
    }
}
let s1 = new singleTon("666");
