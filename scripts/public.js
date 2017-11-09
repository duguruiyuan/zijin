


function drawImg(options){

	var defaultSet = {
		canvasIdElem:"canvasId",
		drawImgElem:"#drawImg",
		imgSrc : "../images/banner.jpg"
	}
	
 function draw(options){
 	var img = null; //在需要绘制的图片放在方法外定义，如果一个画板多次绘制时，不会出现闪屏的问题。
    var w = 0, h = 0 ; //图片显示的宽高
    var ratio = 1 ; //devicePixelRatio值
    var ratio_w = 0, ratio_h = 0; //绘制高清图片宽高
    
    this.options = options;
    

    var canvas = document.getElementById(options.canvasIdElem),
        ctx = canvas.getContext("2d");

    $(options.drawImgElem).each(function() {

        //只有当屏幕宽度变化和img对象为空时候才进行一次初始化参数
        if(img == null || w != window.innerWidth) {
            ratio = draw.prototype.getPixelRatio(ctx); //获取设备的devicePixelRatio
            w = window.innerWidth;  //获取设备的显示屏幕宽高
            h = this.height * (window.innerWidth / this.width); //图片加载完this.height才大于0.
   
            ratio_w = canvas.width = w * ratio;  //计算屏幕的高清图片的宽高，同时设置画板的像素  
            ratio_h = canvas.height = h * ratio;

            img = new Image(ratio_w, ratio_h);   //多次创建imgae绘制会闪屏

            //这个是重点，我们需要把canvas画板通过css样式控制显示高度
            $("#"+options.canvasIdElem).css({
                width: (w + 'px'),
                height: (h + 'px')
            });
        }

        img.src = options.imgSrc;
        //只有在load完成才会进行绘制。所以绘制需要写在onload事件中
        img.onload = function() {
            ctx.clearRect(0, 0, ratio_w, ratio_h); //清除画板，不清除图像会覆盖。
            ctx.drawImage(img, 0, 0, ratio_w, ratio_h); //绘制高清图片
        }
    });
 }
 


    //获取设备的devicePixelRatio
    draw.prototype.getPixelRatio = function(context) {
        var backingStore = context.backingStorePixelRatio ||
            context.webkitBackingStorePixelRatio ||
            context.mozBackingStorePixelRatio ||
            context.msBackingStorePixelRatio ||
            context.oBackingStorePixelRatio ||
            context.backingStorePixelRatio || 1;
        return(window.devicePixelRatio || 1) / backingStore;
    };


	if(options){
	   new draw(options);
	
	}else{
		alert("错误")
	}

}


function loadHeadFooter(){
	var load={
		$head:[$("#head_wrap").length==1?$("#head_wrap"):false,"../templates/head.html"],
		$footer:[$("#footer_wrap").length==1?$("#footer_wrap"):false,"../templates/footer.html"]
	}
	for(i in load){
		if(load[i][0]){
			!function(i){
			$.get(load[i][1],function(data){
			load[i][0].html(data);
			})
		}(i)
		}
	}

}

function studens(pages){
	/*轮播*/
	var num =0;
	var timer = setInterval(autoplay,3000);
	var $width = document.getElementById("img_wrap").offsetWidth;

	function autoplay(){
		num++;
		if(num>pages){
		   $(".img-wrap ul").animate({
                left: num * -$width
            }, 300).animate({
                left: 0
            }, 0);
            num = 0;
		}
	    $(".img-wrap ul").animate({
                left: num * -$width
        }, 300);
	}
	          //左侧点击
            $("#students_evaluation .left-arrow").click(function(e) {
                num--;
                console.log(num);
                if (num < 0) {
                    num = pages;
                }
                $(".img-wrap ul").stop().animate({
                    left: -num * $width
                }, 300);
            });
            //右侧点击
            $("#students_evaluation .right-arrow").click(function(e) {
                num++;
                if (num > pages) {
                    num = 0;
                }
                $(".img-wrap ul").stop().animate({
                    left: -num * $width
                }, 300);
            });
	
}



function loadPublic(){
	
	this.loadTopFooter=function(){
    		var arr = [{url:"http://192.168.1.44:8020/1.0.6hiyouib/mobie/templates/head.html",docment:$("#head")},
    		{url:"http://192.168.1.44:8020/1.0.6hiyouib/mobie/templates/footer.html",docment:$("#web_footer")}]
    		var arrlength = arr.length;
    		for(var i=0;i<arrlength;i++){
    			!function(url,docment){
    				$.get(url,function(data){
    					docment.html(data);
    				})
    			}(arr[i].url,arr[i].docment)
    		}
    	}
}

var load = new loadPublic()

load.loadTopFooter();

