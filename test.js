function test() {
	const even = [];

	for (i = 0; i < 51; i++)
		if (i % 2 === 0) {
			even.push(i);
		}
	return even;
}

console.log(test());
