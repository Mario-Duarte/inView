"use strict";

$.fn.inView = function (inViewType) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var viewport = {};
  viewport.top = $(window).scrollTop();
  viewport.bottom = viewport.top + $(window).height();
  var bounds = {};
  bounds.top = this.offset().top + offset;
  bounds.bottom = bounds.top + this.outerHeight();

  switch (inViewType) {
    case 'bottomOnly':
      return bounds.bottom <= viewport.bottom && bounds.bottom >= viewport.top;

    case 'topOnly':
      return bounds.top <= viewport.bottom && bounds.top >= viewport.top;

    case 'both':
      return bounds.top >= viewport.top && bounds.bottom <= viewport.bottom;

    default:
      return bounds.top >= viewport.top && bounds.bottom <= viewport.bottom;
  }
};