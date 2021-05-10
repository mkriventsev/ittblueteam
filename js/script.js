'use strict';

var anchors = [].slice.call(document.querySelector(".anchors").firstElementChild.children);

var pageable = new Pageable("#container", {
	animation: 400,
	onFinish: update,
	events: {
		mouse: false
	},
    easing: (t, b, c, d, s) => -c * (t /= d) * (t - 2) + b,
});

function update(data) {
	var that = this;
	anchors.forEach(function (anchor, i) {
		anchor.firstElementChild.classList.toggle("active", i === that.index);
	});
}