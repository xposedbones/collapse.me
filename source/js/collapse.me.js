(function($) {

	//MUST HAVE THIS STRUCTURE FOR THE PLUGIN TO WORK
	//<section id="collapse">
	//	<article>
	//		<h2></h2>
	//		<div class="content"></div>
	//	</article>
	//</section>

	$.fn.collapseMe = function(options){
		this.addClass("collapse-Me")
		var defaults = {
           speed : 500,
           closeText: "-",
           openText: "+",
           color: "#000000"
        };
        var options = $.extend(defaults, options);

		var content = this.children('article').children('.content');
		var article = this.children('article');

		article.each(function(){
			$(this).append("<span class='collapse-icon'>"+options['openText']+"</span>");
		});

		content.css('display','none');
		article.css('position','relative');
		$('span.collapse-icon').css({
			"position":"absolute",
			"top":"13px",
			"right":"10px",
			"font-size": "15px",

			"color": options['color']

		});

		article.click(function(){
		var $this = $(this);
	
		if($this.hasClass('expanded')){
			$(".collapse-icon").html(options['openText']);
			$this.children('.collapse-icon').html(options['openText']);
			content.slideUp(options['speed'],function(){
				$this.removeClass('expanded');
			});
		}else{
			$(".collapse-icon").html(options['openText']);
			content.slideUp(options['speed'],function(){
				$(this).parent('article').removeClass('expanded');
			});
			$this.children('.content').slideDown(options['speed']);
			$this.addClass('expanded');
			$this.children('.collapse-icon').html(options['closeText']);
		}
		
		});

	}
}(jQuery));