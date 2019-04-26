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
function sinMotion(ele,props,line,times=900){
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
          }
        },30)
    }

}
function getStyle(ele){
    if(window.VBArray){
        return ele.getCurrentStyle;
    }
    return getComputedStyle(ele);
}
//animate( obj, {left: 300, width: 400})
function animate(ele, options, callback){
	if(ele.isMoving) return;
	
	ele.isMoving = true;
	for(var attr in options) {
		(function(prop){
			var targetvalue = options[prop];  //获取到终点值
			ele[prop+"-timer"] = setInterval(function(){
				if(prop == "opacity") {
					var currentValue = parseFloat(getStyle(ele)[prop])*100;
					var speed = (targetvalue - currentValue)/7;
					speed = speed>0?Math.ceil(speed):Math.floor(speed);
					ele.style.opacity = (currentValue + speed)/100;
					ele.style.filter = "alpha(opacity="+(currentValue + speed)+")"
					if(ele.style.opacity == targetvalue/100) {
						clearInterval(ele["opacity-timer"]);
						if(isAllover()) {
							callback ? callback() : "";
						}
					}
				} else {
					var currentValue = parseInt(getStyle(ele)[prop]);
					var speed = (targetvalue - currentValue)/7;
					speed = speed>0?Math.ceil(speed):Math.floor(speed);
					ele.style[prop] =  currentValue + speed + "px";
					
				}
				
				if(parseInt(getStyle(ele)[prop]) == targetvalue) {
					clearInterval(ele[prop+"-timer"]);
					if(isAllover()) {
						callback ? callback() : "";
					}
				}
			}, 30);
			
		})(attr);
	}
	
	function isAllover() {
		var flag = true;
		for(var attr in options) {
			var targetval = options[attr];
			var curtVal = parseInt(getStyle(ele)[attr]);
			if(attr == "opacity") {
				curtVal = getStyle(ele)[attr]*100;
			}
			if(curtVal != targetval) {
				flag = false;
				return flag;
			}
		}
		ele.isMoving = false;
		return flag;
	}
}
