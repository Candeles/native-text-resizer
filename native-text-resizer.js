/*
	Use a group of elements with the id and the scale factor like so:

	const elements = [
		{ e: '#headerBar', s: 18 },
		{ e: '#mainBox', s: 12 }
	];
	ntr(elements);

*/

var r = (e, s, a) => {
	var ww = $(window).width();
	var wh = $(window).height();
	if(ww<=wh) document.getElementById(e).style.fontSize=(s * .005 * ww);
	else document.getElementById(e).style.fontSize=(s * .005 * wh*wh/ww);
};

var ntr = (els) => {
	els.forEach((el) => {
		window.addEventListener('load', () => {r(el.e, el.s, el.a)});
		window.addEventListener('resize', () => {r(el.e, el.s, el.a)});
		window.addEventListener('maximize', () => {r(el.e, el.s, el.a)});
		window.addEventListener('unmaximize', () => {r(el.e, el.s, el.a)});
	});
};

if (typeof exports !== 'undefined') {
  if (typeof module !== 'undefined' && module.exports) {
    exports = module.exports = ntr;
  }
  exports.ntr = ntr;
} else {
  root['ntr'] = ntr;
}
