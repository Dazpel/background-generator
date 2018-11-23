var body = document.getElementById('changer');
var h3 = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');

console.log(body);
console.log(color1);
console.log(color2);

function linearGradient() {
	body.style.background = 
	'linear-gradient(to right, '
	+color1.value
	+', '
	+color2.value	
	+')';


	h3.innerHTML = body.style.background + ';'; 
}

body.addEventListener('load', linearGradient());
color1.addEventListener('input', linearGradient);
color2.addEventListener('input', linearGradient);
