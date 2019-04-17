window.onload = function(){
    var em = document.getElementById("inputEmail3"),
    psw = document.getElementById("inputPassword3"),
    pro = document.getElementById("inputProgram33"),
    adr = document.getElementById("inputAddress3");
    tab = document.getElementById("table-data");

    btn.onclick = function(){
        // 取值
        var email = em.value,
        password = psw.value,
        programmer = pro.value,
        address = adr.value;
        console.log(email);
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");
        var td5 = document.createElement("td");
     
        // 赋值
        
        td1.innerHTML = email;
        td2.innerHTML = password;
        td3.innerHTML = programmer;
        td4.innerHTML = address;
   
        td5.innerHTML = " <a href='#'  class='btn btn-danger '>delete</a>";
        // 添加儿子
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
     
        tab.children[0].appendChild(tr);
        em.value = psw.value = pro.value = adr.value = 0;
        
        td5.children[0].onclick = function(){
            this.parentNode.parentNode.remove();
        }
    }

    
        
    
}