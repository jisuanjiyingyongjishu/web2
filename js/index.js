// 轮播图
document.addEventListener("DOMContentLoaded", function() {
	var slides = document.querySelectorAll(".slide");
	var dots = document.querySelectorAll(".dot");
	var currentSlide = 0;
	var slideInterval = setInterval(nextSlide, 2000);
  
	function nextSlide() {
	  slides[currentSlide].classList.remove("active");
	  dots[currentSlide].classList.remove("active");
	  currentSlide = (currentSlide + 1) % slides.length;
	  slides[currentSlide].classList.add("active");
	  dots[currentSlide].classList.add("active");
	}
  
	dots.forEach(function(dot, index) {
		dot.addEventListener("click", function() {
		  slides[currentSlide].classList.remove("active");
		  dots[currentSlide].classList.remove("active");
		  currentSlide = index;
		  slides[currentSlide].classList.add("active");
		  dots[currentSlide].classList.add("active");
		});
	  });
	});

// 3D轮播
const oSliderItems = document.querySelectorAll('.slider-item'),
 classNames = [];

let t = null;

const init = () => {
	collectClassNames();
	sliderAction();
}

function render() {
	let oSliderItem = null;

	for(let i = 0; i < oSliderItems.length; i ++) {
		oSliderItem = oSliderItems[i];
		oSliderItem.className = classNames[i];
	}
}

function collectClassNames() {
	let oSliderItem = null;

	for(let i = 0; i < oSliderItems.length; i ++) {
		oSliderItem = oSliderItems[i];

		classNames.push(oSliderItem.className);
	}
}

function setClassName() {
	classNames.unshift(classNames.pop());
	render()
}

function sliderAction() {
	t = setInterval(setClassName, 2000);
}

init();
