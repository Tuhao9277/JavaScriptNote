/**
 * 
 * @param {Element} ele 节点名
 * @param {Object} target 目的地
 */
function easyEaseMotion(ele, target,line,times=900) {
    console.log("easyEaseMotion START!");
    clearInterval(ele.t);
    for (let key in target) {
        let t = setInterval(function () {
            let speed = (target[key] - parseInt(getStyle(ele)[key])) / 10;
            
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            ele.style[key] = parseInt(getStyle(ele)[key]) + speed + "px";
            // var p = ele.cloneNode(true);
            // line.appendChild(p);
            if (Math.abs(Number(getStyle(ele)[key]) - target)<= speed) {
              
                ele.style[key] = target +"px";
               
                clearInterval(t);
            }
        }, 30)
    }
   
}
/**
 * 正弦函数缓动
 * @param {Element} ele 节点名
 * @param {Object} props 目标
 */
function sinMotion(ele,props,line,times=900,callback){
    // 循环获取目标所有的属性
    for (let attr in props) {
        // 获取属性的初值
        let start = parseInt(getStyle(ele)[attr]);
        // 初始化角度，距离，定时器
        let degree = 0;
        let distance = props[attr] - start;
        let t = setInterval(function(){
        // 角度每次加3
          degree +=3;
        // 改变目标样式
          ele.style[attr] = start + Math.sin(Math.PI/180 * degree) * distance +"px";
        // 只用三角函数的0-π/2，如果到达90度，则停止  
            // var p = ele.cloneNode(true);
            // line.appendChild(p);
          if(degree == 90){
			
			  clearInterval(t);
			  callback ? callback() : "";
          }
        },30)
	}


}
//运动插件(通过三角函数)
function animate(ele, options, callback) {

	stopTimer();
	//定义一个定时器列表,将它绑定在ele元素
	ele.timerlist = [];

	for (let attr in options) { //遍历得到每一个操作{left:300},attr是每一个属性名
			//首先获得起始位置
			let start = parseFloat(getStyle(ele)[attr]);
		
			//定义一个角度
			let degree = 0;
			//得到需要运动的距离
			let distance = options[attr] - start;

			//设置定时器
			let t = setInterval(function () {
					//将speed每次加3
					degree += 3;
					if (attr == "opacity") {
							ele.style[attr] = Math.sin(Math.PI / 180 * degree) * distance + start
					} else {
							ele.style[attr] = Math.sin(Math.PI / 180 * degree) * distance + start + "px";
					}

					//设置终止条件
					if (degree == 90) {
							clearInterval(t);
							//取得这个定时器的下标
							var index = ele.timerlist.indexOf(t);
							//将其剔除
							ele.timerlist.splice(index, 1);
							//如果数组的长度为0就让他回调,即这个option里面的所有操作都执行完了,就开始执行回调函数
							ele.timerlist.length == 0 ? (callback ? callback() : "") : "";
					}
			}, 30);
			ele.timerlist.push(t);
	}

	function getStyle(ele) {
			if (window.VBArray) {
					return ele.currentStyle;
			} else {
					return getComputedStyle(ele);
			}
	}
	//刚进来这个函数,如果发现之前执行过该函数,那么直接给他清空
	function stopTimer() {
			//如果这个数组为空就直接返回
			if (!ele.timerlist) return;
			var t = null; //定义一个变量
			while (t = ele.timerlist.pop()) {
					//因为pop返回值是长度,所以只能为0的时候,才会不执行了
					clearInterval(t);
			}
	}

}

// function getStyle(ele) {
//     if (window.VBArray) {
//         return ele.srcElement;
//     } else {
//         return getComputedStyle(ele);
//     }
// }