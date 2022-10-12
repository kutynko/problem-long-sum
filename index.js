function calculate(e) {
	e.preventDefault();
	const formData = new FormData(e.target);

	const a = formData.get('a');
	const b = formData.get('b');

	const aNumber = parseInt(a);
	const bNumber = parseInt(b);

	result.innerHTML = aNumber + bNumber;
}
