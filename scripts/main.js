
/**
 * Created by Administrator on 2017/5/10.
 */

$(function(){
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
//      paginationClickable: true,
//      spaceBetween: 30,
        speed:800,
        loop: true,
        autoplay:3000,
        centeredSlides: true,
        autoplayDisableOnInteraction:false
    });
    
    var index = {
    	loadPublic:function(){
    		var arr = [{url:"templates/head.html",docment:$("#head")},
    		{url:"templates/footer.html",docment:$("#web_footer")}]
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
   
    index.loadPublic()
    
})
