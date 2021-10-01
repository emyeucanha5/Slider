const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const slides = document.querySelectorAll('.slide');
let numberOfImage = 0;
let count = 0;
window.addEventListener('DOMContentLoaded', function(e) {
	prevBtn.style.display = "none";
});
// console.log(slides);
slides.forEach(function(slide, index) {
	numberOfImage++;
	slide.style.left =  `${index * 100}%`;
});

// console.log(numberOfImage);
prevBtn.addEventListener('click', function(e) {
	count -=1;
	transit(count);
});
nextBtn.addEventListener('click', function(e) {
	count +=1;
	transit(count);

});
numberOfImage -= 1;
function transit(counter){

	slides.forEach(function(slide) {
		slide.style.transform =  `translateX(-${counter * 100}%)`;
	});
	if(counter!==0){
		prevBtn.style.display = "block";
	}
	if(counter===numberOfImage){
		nextBtn.style.display = "none";
	}
	if(counter!==numberOfImage){
		nextBtn.style.display = "block";
	}
	if(counter === 0 ){
		prevBtn.style.display = "none";
	}
}