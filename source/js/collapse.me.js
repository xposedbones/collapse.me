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
           beforeOpen: function(){},
           afterOpen: function(){},
           beforeClose: function(){},

           stepOpen: function(){},
           stepClose: function(){}
        };
        options = $.extend(defaults, options);

        var content = this.children(options['applyTo']).children(options['contentClass']);
        var article = this.children(options['applyTo']);

        article.each(function(){
            $(this).append("<span class='collapse-icon'>"+options['openText']+"</span>");
        });

        content.css('display','none');
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

        article.click(function(){
        var $this = $(this);

        if($this.hasClass('expanded')){
            $(".collapse-icon").html(options['openText']);
            $this.children('.collapse-icon').html(options['openText']);
            options['beforeClose'].call(this);
            content.slideUp({
                duration: options['speed'],
                step: options['stepClose']
            });
            $this.removeClass('expanded');
        }else{
            $(".collapse-icon").html(options['openText']);
            content.slideUp(options['speed'],function(){
                $(this).parent(options['applyTo']).removeClass('expanded');
            });

            options['beforeOpen'].call(this);
            $this.children(options['contentClass']).slideDown({
                duration: options['speed'],
                complete: options['afterOpen'],
                step: options['stepOpen']
            });
            $this.addClass('expanded');
            $this.children('.collapse-icon').html(options['closeText']);
        }

        });

    };
}(jQuery));