# inView

Simple and small jQuery plugin to detect when DOM elements are in view in the viewport, less than 500bytes!

## How it Works
inView returns `true` or `false` on call instead of binding to an event, why you may wonder....

I wanted a dead simple plugin that does what says in the tin and does not get in the way with unnecessary code.

## Usage

```(javascript)
let isInView = $('elm').inView('both');
```

This is the simplest way of using this plugin, the code above should only return true if both the top and bottom of the element are within the viewport.

You can check if an element is in view on __scroll__, __click__, __resize__, __load__ events with ease.

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

And a more advance usage with a scroll event:

```(javascript)

	$(document).ready(()=>{

		function checkVisability() {
			var elm = $('elm');

			elm.each(()=>{
				if ($(this).inView("both")) {
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

## Other like plugins

- Event driven inView by protonet - [jquery.inview](https://github.com/protonet/jquery.inview)
- Bindable inview event by Zuk - [jquery.inview](https://github.com/zuk/jquery.inview/)
