# CollapseMe -  Collapse/expand just got easier!

This is a simple plugin that I built to automate the task of building a collapse/expand. With this, you can get a collapse/expand running perfectly in a matter of minutes! Just include the collapse.me.min.js file between your Jquery and your main script file!

## Usage

###This is the suggested structure
    <section class="test">
        <article>
            <h2>Title</h2>
            <div class="content">lorem ipsum</div>
        </article>
    </section>
    <script>
        $(".test").collapseMe();
    </script>

If your structure is different and looks more like this

    <div class="list">
        <div class="item">
            <h1>How are you doin'</h1>
            <div class="answer">Great Thanks</div>
        </div>
    </div>

then you'll need to change some of the plugin options like so

    <script>
        $(".list").collapse({
            applyTo: "div.item",
            contentClass: "answer"
        });
    </script>

## Customization

Here is a list of the options that you can customize without editing the core
* **speed** (500) - Duration of the animation
* **closeText** ("-") - Text to show when the item is expanded ( ex: "Close" ), to hide the text, use ""
* **openText** ("+") - Text to show when the item is closed ( ex: "opened" ), to hide the text, use ""
* **color** ("#000") - color of the openText and the closeText options
* **addCSS** (true) - Automatically add CSS to the open/close Item (Set to false if you want to use your own css)
* **applyTo** ("article") - The collapse/expand will be applied to this element
* **contentClass** (".content") - This element will be hidden when the page is loaded (if you want to have an element already open when you load the page, refer to the [Tips](#tips) section)
* **clickItem** (false) - Set this to true if you want the element to close when you click on the content (causes annoyance when the user try to select some text)
* **beforeOpen** (function) - Execute this function before opening an item
* **afterOpen** (function) - Execute this function after opening an item
* **beforeClose** (function) - Execute this function before closing an item
* **afterClose** (function) - Execute this function after closing an item
* **stepOpen** (function) - Execute this function at every steps of the opening animation
* **stepClose** (function) - Execute this function at every steps of the closing animation

## <a name="tips"></a> Tips

### Q: I want an item to be already opened when the page is loaded, how?
A: add the class "expanded" to the item that you want like so

    <section>
        <article class="expanded">
            <h2></h2>
            <div class="content"></div>
        </article>
        <article>
            <h2></h2>
            <div class="content"></div>
        </article>
    </section>

### Q: I want to be able to open/close an item by clicking on the title, AND on the icon ONLY, how?
A: add the class "collapse-trigger" to the title element, like so

    <section>
        <article>
            <h2 class="collapse-trigger"></h2>
            <div class="content"></div>
        </article>
    </section>