(function($) {

    //MUST HAVE THIS STRUCTURE FOR THE PLUGIN TO WORK
    //<section id="collapse">
    //  <article>
    //      <h2></h2>
    //      <div class="content"></div>
    //  </article>
    //</section>

    $.fn.collapseMe = function(options){
        this.addClass("collapse-Me");
        var defaults = {
           speed : 500,
           closeText: "-",
           openText: "+",
           color: "#000000",
           addCSS: true,
           applyTo: "article",
           contentClass: ".content",
           clickItem:false,
           beforeOpen: function(){},
           afterOpen: function(){},
           beforeClose: function(){},
           afterClose: function(){},

           stepOpen: function(){},
           stepClose: function(){}
        };
        options = $.extend(defaults, options);

        var content = this.find(options['applyTo']).find(options['contentClass']);
        var article = this.find(options['applyTo']);

        article.addClass("collapse-item");
        article.each(function(){
            $(this).append("<span class='collapse-icon collapse-cursor'>"+options['openText']+"</span>");
        });

        content.css('display','none');
        content.addClass("collapse-content");

        if(options['addCSS']){

            article.css('position','relative');

            $('span.collapse-icon').css({
                "position":"absolute",
                "top":"13px",
                "right":"10px",
                "font-size": "15px",
                "color": options['color']

            });
        }

        if(options['clickItem']){
        	whats_clicked = article
        }else{
        	whats_clicked = this.find(".collapse-item").find(".collapse-cursor")
        }

        whats_clicked.click(function(){
        	if (options["clickItem"]) {
	        	var $this = $(this);
        	}else{
        		var $this = $(this).parents(".collapse-item")
        	}

        	 $this.find('.collapse-icon').html(options['openText']);


	        if($this.hasClass('expanded')){
	            $(".collapse-icon").html(options['openText']);
	            
	            $this.find('.collapse-icon').html(options['openText']);
	            
	            options['beforeClose'].call(this);

	            content.slideUp({
	                duration: options['speed'],
	                step: options['stepClose']
	            });

	            $this.removeClass('expanded');
	        }else{
	        	article.removeClass('expanded');
	            $(".collapse-icon").html(options['openText']);

	            content.slideUp(options['speed'],function(){
	                $(this).parent(options['applyTo']).removeClass('expanded');
	            });

	            options['beforeOpen'].call(this);

	            $this.find(options['contentClass']).slideDown({
	                duration: options['speed'],
	                complete: options['afterOpen'],
	                step: options['stepOpen']
	            });

	            $this.addClass('expanded');
	            $this.find('.collapse-icon').html(options['closeText']);
	        }

        });


    };
}(jQuery));