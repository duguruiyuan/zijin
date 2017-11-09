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
    
loadHeadFooter()
})
function loadHeadFooter(){
	var load={
		$head:[$("#head_wrap").length==1?$("#head_wrap"):false,"/mobie/templates/head.html"],
		$footer:[$("#footer_wrap").length==1?$("#footer_wrap"):false,"/mobie/templates/footer.html"]
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
