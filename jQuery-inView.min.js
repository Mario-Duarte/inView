/*!
* inView.js 1.1
*
* Copyright 2019, Mario Duarte http://marioduarte.co.uk
* Released under the GLP-2.0 license
*
* Date: Mon Feb 11 2019
*/

"use strict";$.fn.inView=function(t){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e={};e.top=$(window).scrollTop(),e.bottom=e.top+$(window).height();var p={};switch(p.top=this.offset().top+o,p.bottom=p.top+this.outerHeight(),t){case"bottomOnly":return p.bottom<=e.bottom&&p.bottom>=e.top;case"topOnly":return p.top<=e.bottom&&p.top>=e.top;case"both":default:return p.top>=e.top&&p.bottom<=e.bottom}};
