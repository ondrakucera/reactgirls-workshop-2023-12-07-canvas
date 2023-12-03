const nahodneCislo = (minimum, maximum) => Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

window.addEventListener("load", () => {
	const canvas = document.querySelector("canvas");
	const ctx = canvas.getContext("2d");

	const SIRKA = canvas.width;
	const VYSKA = canvas.height;
	const POLOMER = 5;
	const MAXIMALNI_X = SIRKA - POLOMER * 2;
	const MAXIMALNI_Y = VYSKA - POLOMER * 2;
	const PERIODA = 10;

	let x = nahodneCislo(0, MAXIMALNI_X);
	let y = nahodneCislo(0, MAXIMALNI_Y);
	let deltaX = nahodneCislo(1, 5);
	let deltaY = nahodneCislo(1, 5);

	ctx.fillStyle = "green";

	const nakresliMicek = () => {
		ctx.beginPath();
		ctx.arc(x + POLOMER, y + POLOMER, POLOMER, 0, Math.PI * 2, false);
		ctx.fill();
	};

	const prekresli = () => {
		x += deltaX;
		y += deltaY;

		if (x > MAXIMALNI_X) {
			deltaX *= -1;
			x = MAXIMALNI_X - (x - MAXIMALNI_X);
		} else if (x < 0) {
			deltaX *= -1;
			x = -x;
		}
		if (y > MAXIMALNI_Y) {
			deltaY *= -1;
			y = MAXIMALNI_Y - (y - MAXIMALNI_Y);
		} else if (y < 0) {
			deltaY *= -1;
			y = -y;
		}

		ctx.clearRect(0, 0, SIRKA, VYSKA);
		nakresliMicek();
	};

	nakresliMicek();
	setInterval(prekresli, PERIODA);
});
