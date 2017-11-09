function yuanFn(obj, fn) {
    obj.each(function () {
        var num = ($(this).attr('title') - 0).toFixed(2);
        var dataNum = num.slice(0, num.indexOf('.'));
        fn(dataNum, $(this));
    })
}
function loadlind(data, data2) {
    clearInterval(timer);
    var i = 0;
    /*var w = parseFloat(data2.parent().css("width"))/100;
    var d=parseFloat(data2.parent().css("width"))/100;*/
	var w = parseFloat(data2.parent().css("width"))/100;
    var d=parseFloat(data2.parent().css("width"))/100;
    var timer = setInterval(function () {
        i++;
        if (i >= data) {
            i = data;
            clearInterval(timer);
        } else if (data == "100") {
            i = 100;
            clearInterval(timer);
        }
        data2.eq(0).css('width', i * w + 'px')
        // data2.closest(".baifenbi").find(".jinduspan").text(i+"%");
//      data2.closest(".baifenbi").find(".jinduspan").text(i)
    }, 20)
}


function move(ev, process, time){
    var i=0;
    var width = ev.width();
    var l=parseFloat(ev.parent().css("width"));
    var move_width = l*process - width/2;
    if(process==0){
    	ev.css("display","none")
    }else{
    	ev.animate({left: '' + move_width + 'px'}, time);
    }
}

function far(a,b){
	var width=a.width();
	var l=parseFloat(a.parent().css("width"));
	a.css({
		left:''+ b*(l-width) +'px'
	})
}
