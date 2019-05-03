function loadImg(src) {
	let promise = new Promise(function (resove,reject) {
		let img = document.createElement("img");
		img.onload = function () {
			resove(img)
		}
		img.onerror = function () {
			reject("图片加载失败")
		}
		img.src= src;
	})
	return promise
}
let src = 'iphone.jpg';
let result = loadImg(src)
result.then(function (img) {
	console.log(`width: ${img.width}`)
	return img
}).then(function (img){
	console.log(`height: ${img.height}`)
	return img
}).catch(function(ex){
	console.log(ex);
})
