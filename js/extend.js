$.fn.extend({
	mask: function (options){
		var defaults = {
			mWidth:$(this).width(),
			mHeight:$(this).height(),
			wh:'relative',
			callBack:function(){
				console.log('over')
			}
		}
		var settings = {};
		settings = $.extend(settings,defaults,options);
		var $div = $('<div class="bl-mask">');
		var $img = $('<img src="img/loading-70.gif" class="loadImg" alt="加载中。。。" />')
		$(this).append($div).append($img);
		$(this).css('position',settings.wh)
		$('body').attr('onmousewheel','return false;'); 
		if($(this).get(0).tagName.toLowerCase() === 'body'){
			settings.mHeight = $(document).height()
		}
		$div.css({
			'height':settings.mHeight,
			'width':'100%',
			'background':'#eee',
			'position':'absolute',
			'top':0,
			'left':0
		})
		console.log($('.loadImg').height())
		$img.css({
			'position':'absolute',
			'top': (settings.mHeight - $img.height())/ 2,
			'left': (settings.mWidth - $img.width())/ 2			
		})

	}
})