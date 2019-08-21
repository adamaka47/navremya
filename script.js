TweenMax.to(".loading-screen", 4, {
	delay: 6.6,
	top: "-110%",
	ease: Expo.easeInOut
})

TweenMax.to(".loading-screen", 4, {
	delay: 6.6,
	top: "-110%",
	ease: Expo.easeInOut
})

TweenMax.from(".logo", 3, {
	delay: 8.5,
	opacity: 0,
	y: 20,
	ease: Expo.easeInOut
})

TweenMax.from(".contact", 3, {
	delay: 8.5,
	opacity: 0,
	y: 20,
	ease: Expo.easeInOut
})

TweenMax.from(".options", 3, {
	delay: 8.8,
	opacity: 0,
	y: 20,
	ease: Expo.easeInOut
})

TweenMax.from(".bottom-text", 3, {
	delay: 9,
	opacity: 0,
	y: 20,
	ease: Expo.easeInOut
})

TweenMax.from(".copy", 3, {
	delay: 7.8,
	opacity: 0,
	y: 20,
	ease: Expo.easeInOut
})

TweenMax.staggerFrom(".media ul li", 2, {
	delay: 9,
	opacity: 0,
	y: 20,
	ease: Expo.easeInOut
}, 0.1)

TweenMax.from(".menu", 3, {
	delay: 8.4,
	opacity: 0,
	y: 20,
	ease: Expo.easeInOut
})

TweenMax.from(".p1", 3, {
	delay: 8.4,
	opacity: 0,
	y: 20,
	ease: Expo.easeInOut
})

TweenMax.from(".p2", 3, {
	delay: 8.8,
	opacity: 0,
	y: 20,
	ease: Expo.easeInOut
})

TweenMax.from("#one", 3, {
	delay: 10,
	opacity: 0,
	y: 20,
	ease: Expo.easeInOut
})

TweenMax.from("#two", 3, {
	delay: 10.5,
	opacity: 0,
	y: 20,
	ease: Expo.easeInOut
})

let t1 = new TimelineMax();

t1.from(".ring1", 4, {
	delay: 0.4,
	opacity: 0,
	y: 40,
	ease: Expo.easeInOut
}).from(".ring2", 4, {
	delay: 0.9,
	opacity: 0,
	x: 40,
	ease: Expo.easeInOut
}, "-=5").to(".ring1", 4, {
	delay: 0.4,
	opacity: 0,
	x: 40,
	ease: Expo.easeInOut
}).to(".ring2", 4, {
	delay: 0.4,
	opacity: 0,
	x: 40,
	ease: Expo.easeInOut
}, "-=5");

let textWrapper = document.querySelector('.ml7 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml7 .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [900, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: function(el, i) {
      return 9000 + 50 * i;
    }
  });

  let dots = document.querySelectorAll('.loading-screen span');

function addDots() {
	let titleLoading = document.querySelector('.loading-screen h2')
	function newDot() {

		function timeouts(i) {
			setTimeout(() => {
				titleLoading.innerHTML += '<span>.</span>'
			}, i);
		}

		// Делаем кастомными данные параметры
		
		timeouts(2000);
		timeouts(4000);
		timeouts(6000);

		}
		newDot()
	}

addDots()