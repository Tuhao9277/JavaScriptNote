/**
 * 观察者模式 订阅发布模式
 *  被观察者对象发生变化时，会提醒观察者
 */
class 观察者{
    constructor(name) {
        this.name = name;
    }
    通知(msg) {
        this.msg = msg;
        console.log(`${this.name}收到了消息${this.msg}`);
    }

}

class 订阅号 {
    constructor() {
       
        this.订阅者们 = new Set();
    }
    订阅(person) {
        this.订阅者们.add(person);
    };

    退订(person) {
        this.订阅者们.delete(person);
    };

    推送(msg) {
        this.订阅者们.forEach(emp => {
            emp.通知(msg);
        })
    }
}
let sub = new 订阅号("乐播足球");
let zhangsan = new 观察者("zss");
let zzw = new 观察者("zz");
sub.订阅(zzw);
sub.订阅(zhangsan);
sub.推送("女司机为什么这么牛逼");
sub.推送("5.1去哪儿玩？不如去上海看足球小将！");

class Employee {
    constructor(name) {
        this.name = name;
    }
    save(money) {
        this.money = money;
        console.log(`${this.name}发钱啦！！`);
    }

}
class Company {
    constructor() {
        this.money = 999;
        this.empList = new Set();
    }
    join(person) {
        this.empList.add(person);
    };

    fire(person) {
        this.empList.delete(person);
    };

    pay() {
        this.empList.forEach(emp => {
            emp.save(this.money);
        })
    }
}
let company = new Company();
let zz = new Employee("zz");
let zhd = new Employee("zhd");
company.join(zz);
company.join(zhd);
