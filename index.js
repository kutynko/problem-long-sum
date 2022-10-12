function calculate(e) {
	e.preventDefault();
	const formData = new FormData(e.target);

	let a = formData.get('a');
	let b = formData.get('b');

	let filler = '';
	for (let i = 0; i < Math.abs(a.length - b.length); i++) filler += '0'
	if (a.length < b.length) a = filler + a;
	else b = filler + b;

	let digit = 0;
	let res = '';
	for (let i = a.length - 1; i >=0; i--) {
		const ai = parseInt( a[i])
		const bi = parseInt( b[i])
		const ri = ai + bi + digit;
		res = ri % 10 + res;
		digit = Math.floor(ri / 10);
	}

	result.innerHTML = res;
}
