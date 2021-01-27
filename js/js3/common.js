/**
 * Created by xiaopig on 2015/8/24.
 */

var commonApp = function () {


//返回顶部滚动
	var maodian=function(){
		var $backtop = $('#backtop');
		$(window).scroll(function () {
			$(this).scrollTop() > 300 ? $backtop.fadeIn() : $backtop.fadeOut();
		});
		$('.j_anchor').on('click',function(){
			var $this = $(this);
			$('body,html').animate({ scrollTop: $($this.attr("href")).offset().top + ($this.data('offset') || 0) }, $this.data('speed') || 400);
			return false;
		})
	};
  return {
    init: function () {
	    maodian();
    }
  }
}();