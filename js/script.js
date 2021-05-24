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
function isMobile () {
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
		return true
	}
	else {
		return false
	};
};

if (isMobile()){
	console.log("tut")
	const body = document.getElementById("body")
	console.log(body)
	body.innerHTML = `<div id="app" class="mobbg" ><section data-anchor="Main">
	<div class="text">
		<h2 class="glitch" data-text="Attention!">Attention!</h2>
		<p>Mobile version is not supported. Please, use desktop instead. Thank you.</p>
	</div>
</section></div>`
}
// CHAT + Help bubble popup code
function checkVisible(elm) {
	var rect = elm.getBoundingClientRect();
	var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
	return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

function hideBubble() {
	const help = document.getElementById('help-popup');
	if (!help.classList.contains('hide')) {
		help.classList.add('hide');
	}
}

function toggleChatbox() {
	const chatbox = document.getElementById('chatbox');
	const chatboxbtn = document.getElementById('chatbox-button');

	if (chatbox.classList.contains('box-out')) {
		chatbox.classList.remove('box-out');
		chatboxbtn.classList.remove('btn-out');
	} else {
		chatbox.classList.add('box-out');
		chatboxbtn.classList.add('btn-out');
	}

	hideBubble();
}

window.onscroll = function () {
	const elem = document.getElementById('help-popup-trigger');
	const help = document.getElementById('help-popup');

	if (!help.classList.contains('jump') && checkVisible(elem)) {
		help.classList.add('jump');
	}
}