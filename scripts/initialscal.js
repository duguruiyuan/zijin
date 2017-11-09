//作者：沈啸
//链接：https://www.zhihu.com/question/32090605/answer/87543979
//来源：知乎
//著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

//首先检查浏览器类型
var browser = getBrowser();

if (window.top === window) {
	var s, t, sw;
	if (browser === 'Gecko') {
		s = calcRato(Math.min(screen.width, screen.height));
		document.write('<meta name="viewport" content="width=' + 100 / s + '%, user-scalable=no, initial-scale=' + s + '"/>');
	} else if (browser === 'Trident') {
		document.write('<meta name="viewport" content="width=device-width, user-scalable=no"/>');
		document.documentElement.style.zoom = calcRato(Math.min(screen.width, screen.height));
	} else {
		t = document.createElement('meta');
		t.name = 'viewport';
		t.content = 'width=device-width, user-scalable=no, initial-scale=1';
		document.head.appendChild(t);
		sw = Math.min(screen.width, screen.height);
		if (Math.min(screen.width / window.innerWidth, screen.height / window.innerHeight) > 1) {
			document.documentElement.style.zoom = calcRato(sw / devicePixelRatio);
		} else {
			s = calcRato(sw);
			t.content = 'width=' + 100 / s + '%, user-scalable=no, initial-scale=' + s;
		}
	}
}
function calcRato(sw) {
	//离散放大级别
	var step = 0.125;
	//基准宽度为320px
	var zoom = sw / 320;
	//放大时不使用线性算法
	if (zoom > 1) {
		zoom = Math.floor(Math.sqrt(zoom) / step) * step;
	}
	return zoom;
}

//作者：沈啸
//链接：https://www.zhihu.com/question/32090605/answer/87543979
//来源：知乎
//著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。