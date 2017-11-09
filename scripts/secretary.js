

$(function(){
	/*加载头部和底部*/
	loadHeadFooter();
	
	/*学员评价*/
	studens(3);
	
	
	
})

function studens(pages){
	/*轮播*/
	var num =0;
	var timer = setInterval(autoplay,3000);
	var $width = document.getElementsByClassName("img-wrap")[0].offsetWidth;

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




