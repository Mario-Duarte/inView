# inView

Simple, small and minimal jQuery plugin to check when DOM elements are in view in the viewport, best of all its less than 500bytes!!!

<a href="https://www.buymeacoffee.com/marioduarte"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a Coffee&emoji=&slug=marioduarte&button_colour=FF5F5F&font_colour=ffffff&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00"></a><br/>

- Requires: jQuery 1.8+
- Based on Protonet [jquery.inview](https://github.com/protonet/jquery.inview)

#### Quick Navigation:
- [How it works](#how-it-works)
- [Usage](#usage)
- [Basic Usage](#basic-usage)
- [Advanced Usage](#advanced-usage)
- [Other plugins](#other-plugins)


## How it Works
inView returns `true` or `false` on call instead of binding to an event, why you may wonder....

I wanted a dead simple plugin that I could reuse on my projects that does what says in the tin and does not get in the way with unnecessary code or events running in the background.

## Usage

```(javascript)
let isInView = $('elm').inView('both');
```

This is the simplest way of using this plugin, the code above should return true if both the top and bottom of the element are within the viewport.

```(javascript)
$('elm').inView(inViewType, offset);
```

__inViewType__ can be `topOnly`, `bottomOnly` or `both` and they respectively return true when the top, bottom or both parts of the element is in view in the viewport.

__offset__, an integer that can help you detect viewport 'proximity' if the integer is positive and 'delay' if negative.

You can check if an element is in view on __scroll__, __click__, __resize__, __load__ events with ease.

### Basic Usage

Here is a simple usage with the jQuery .ready():

```(javascript)

	$(document).ready(()=>{

		let elm = $(elm);

		//Check if elm is in view when the page loads
		if ( elm.inView('both') ) {
			elm.addClass('inView');
		}

	});


```

### Advanced Usage

This plugin allows you to pass in the offset in px as follows:

```(javascript)
let isInView = $('elm').inView('bottomOnly', 100);
```
The above will return true when the bottom bounds of the element and an offset of 100px are in the viewport, here's a more advance usage with a scroll event and offset:

```(javascript)

	$(document).ready(()=>{

		function checkVisability() {
			var elm = $('elm');

			elm.each(()=>{
				if ($(this).inView("topOnly", 50)) {
					$(this).addClass("visible");
				} else {
					$(this).removeClass("visible");
				}
			});
		}

		checkVisability();

		$(window).scroll(()=>{
			console.log('scroll');
			checkVisability();
		});

	});

```

## Other plugins

There are a few other plugins that do very similar things to this one that you may want to have a look at:

- Event driven inView by protonet - [jquery.inview](https://github.com/protonet/jquery.inview)
- Bindable inview event by Zuk - [jquery.inview](https://github.com/zuk/jquery.inview/)
- Get notifyed when a DOM element enters or exits the viewport by camiegert - [in-view](https://github.com/camwiegert/in-view)
