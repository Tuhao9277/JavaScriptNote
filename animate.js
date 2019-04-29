function animate(ele, props, callback) {
	
	stopNow();
	
	ele.timerlist = [];
	
	for (let attr in props) {
		let start = parseFloat(getStyle(ele)[attr]);
		let degree = 0;
		let distance = props[attr] - start;
		let t = setInterval(function() {
			degree += 3;
			// console.log(start + Math.sin(Math.PI / 180 * degree) * distance);
			ele.style[attr] = start + Math.sin(Math.PI / 180 * degree) * distance + "px";
			if (degree == 90) {
				clearInterval(t)
				var index = ele.timerlist.indexOf(t);
				ele.timerlist.splice(index,1);
				ele.timerlist.length == 0 ? callback() : "";
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
	
	function stopNow(){
		if(!ele.timerlist) return;
		var t = null;
		while(t=ele.timerlist.pop()) {
			clearInterval(t);
		}
	}
}
