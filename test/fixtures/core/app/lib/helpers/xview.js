'use strict';


exports.$ = function($) {
  $.emptyClass = function(v) {
    return v ? '' : 'empty';
  };
};


exports.formatPrice = function(price) {
  return price + '元';
};
