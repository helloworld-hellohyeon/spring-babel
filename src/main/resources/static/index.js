"use strict";

var a = 1;

var func = function func(a) {
  return a + 1;
};

var arr = [1, 2, 3, 4, 5].map(function (item) {
  return item * item;
});

function b() {
  var i = 1;
}

var c = {
  a: a
};
b();
console.log('hello');