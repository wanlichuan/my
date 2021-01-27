$(function(){
	$(document).ready(function(){
		//限制字符个数
		$(".carousel_box_p").each(function(){
			var maxwidth=400;
			if($(this).text().length>maxwidth){
			$(this).text($(this).text().substring(0,maxwidth));
			$(this).html($(this).html()+"......");
			}
		});
		$(".about_intro_txt").each(function(){
			var maxwidth=250;
			if($(this).text().length>maxwidth){
			$(this).text($(this).text().substring(0,maxwidth));
			$(this).html($(this).html()+"......");
			}
		});
		$(".shrub_apply_div ").each(function(){
			var maxwidth=420;
			if($(this).text().length>maxwidth){
			$(this).text($(this).text().substring(0,maxwidth));
			$(this).html($(this).html()+"......");
			}
		});
		
		$(".shrub_apply_div1").each(function(){
			var maxwidth=660;
			if($(this).text().length>maxwidth){
			$(this).text($(this).text().substring(0,maxwidth));
			$(this).html($(this).html()+"......");
			}
		});
		$(".shrub_apply_div2").each(function(){
			var maxwidth=600;
			if($(this).text().length>maxwidth){
			$(this).text($(this).text().substring(0,maxwidth));
			$(this).html($(this).html()+"......");
			}
		});
		$(".shrub_apply_div3 ,.shrub_apply_div4 ,.carousel_box_p").each(function(){
			var maxwidth=480;
			if($(this).text().length>maxwidth){
			$(this).text($(this).text().substring(0,maxwidth));
			$(this).html($(this).html()+"......");
			}
		});
		$(".carousel_box_li .carousel_box_p").each(function(){
			var maxwidth=280;
			if($(this).text().length>maxwidth){
			$(this).text($(this).text().substring(0,maxwidth));
			$(this).html($(this).html()+"......");
			}
		});
		$(".fize  ").each(function(){
			var maxwidth=130;
			if($(this).text().length>maxwidth){
			$(this).text($(this).text().substring(0,maxwidth));
			$(this).html($(this).html()+"......");
			}
		});
	});
		
		
});