{
    var Obj = {
        money: 999
    }
    // Object.create
    //  Creates an object that has the specified prototype
    //  or that has null prototype.
    var son = Object.create(Obj);
    son.money // 999
}
{
    let obj = {
        name: "es2015",
        school: "MIT"
    }
    //Adds a property to an object, 
    // or modifies attributes of an existing property.
    Object.defineProperty(obj, "name", {
        writable: false,   // 不可写
        enumerable: false  //属性不可遍历
    })
    var Person = {

    }
    Object.defineProperty(Person, "name", {
        set: function (val) {
            this._name = val;
            render(Person);
        },
        get: function () {
            return this._name;
        }
    })
    
    Person.name = "jiafeimao";
    Person.age = "18";
    Person.Address = "Beiking"

    function render(data) {
        let htmlstr = `
        <table border=1>
        <tr>
        <td>${data.name}</td>
        </tr>
        <tr>
        <td>${data.age}</td>
        </tr>
        <tr>
        <td>${data.Address}</td>
        </tr>
        </table>
        `;  
       document.body.innerHTML = htmlstr;
    }
    render(Person);
}