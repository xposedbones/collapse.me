(($)->

	# Suggested structure (does not require editing options)
	# <section id="test">
	# 	<article>
	# 		<h2>TITLE</h2>
	# 		<div class="content"></div>
	# 	<article?
	# </section>

	$.fn.collapseMe = (options) ->
		@addClass "collapse-Me"
		defaults = 
			speed: 500
			closeText: "-"
			openText: "+"
			color: "#000000"
			addCSS: true
			applyTo: "article"
			contentClass: ".content"
			clickItem: false
			beforeOpen: ->
			afterOpen: ->
			beforeClose: ->
			afterClose: ->
			stepOpen: ->
			stepClose: ->

		options = $.extend defaults,options

		content = @find(options["applyTo"]).find(options["contentClass"])
		article = @find(options["applyTo"])

		article.addClass "collapse-item"
		article.each ->
			if $(this).hasClass "expanded"
				$(this).append "<span class='collapse-icon collapse-trigger'>"+options['closeText']+"</span>"
			else
				$(this).append "<span class='collapse-icon collapse-trigger'>"+options['openText']+"</span>"

		content.each ->
			$(this).css "display","none" unless $(this).parent().hasClass "expanded"

		content.addClass "collapse-content"
		if options['addCSS']
			article.css "position", "relative"
			$("span.collapse-icon").css
				"position":"absolute"
				"top": "13px"
				"right": "10px"
				"font-size": "15px"
				"color": options['color']

		if options['clickItem']
			whats_clicked = article
		else
			whats_clicked = @find(".collapse-item").find ".collapse-trigger"

		whats_clicked.click ->

			if options['clickItem']
				$this = $(this)
			else
				$this = $(this).parents(".collapse-item")

			$this.find("collapse-icon").html options['openText']

			if $this.hasClass "expanded"
				$(".collapse-icon").html(options['openText'])

				$this.find(".collapse-icon").html options['openText']

				options['beforeClose'].call @

				content.slideUp
					duration: options['speed']
					step: options['stepClose']

				$this.removeClass "expanded"

			else
				article.removeClass "expanded"
				$(".collapse-icon").html options['openText']

				content.slideUp options['speed'], ->
					$(this).parent(options['applyTo']).removeClass "expanded"
				options['beforeOpen'].call @

				$this.find(options['contentClass']).slideDown
					duration: options['speed']
					complete: options['afterOpen']
					step: options['stepOpen']

				$this.addClass "expanded"
				$this.find('.collapse-icon').html options['closeText']
) jQuery