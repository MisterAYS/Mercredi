function popup () {
	if (confirm('Hey le site xxxvidsxxx est trop bien. Viens dessus stp please')) {
		window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
	}
}

setTimeout(popup, 10000);

function psy() {
	let psyParas = document.querySelectorAll('p');
	for (let i=0; i<psyParas.length; i++) {
		psyParas[i].style.color = 'blue';
		psyParas[i].style.fontFamily = 'papyrus';
	}
	let psyHeaders = document.querySelectorAll('h1, h2, h3');
	for (let i=0; i<psyHeaders.length; i++) {
		psyHeaders[i].style.color = 'green';
		psyHeaders[i].style.fontFamily = 'comic';
	}
	document.body.style.backgroundColor = "red";
}

let mybutton = document.getElementById('clickbutton');
mybutton.addEventListener('click', psy);
