window.addEventListener("load", () => {
	const canvas = document.querySelector("canvas");
	const ctx = canvas.getContext("2d");

	const PISMENO_SIRKA = 40;
	const PISMENO_VYSKA = 100;

	const nakresliO = (x, y) => {
		const polomer = 15;
		ctx.beginPath();
		ctx.moveTo(x, y - polomer);
		ctx.lineTo(x, y - PISMENO_VYSKA + polomer);
		ctx.arc(x + polomer, y - PISMENO_VYSKA + polomer, polomer, Math.PI, (3 / 2) * Math.PI, false);
		ctx.lineTo(x + PISMENO_SIRKA - polomer, y - PISMENO_VYSKA);
		ctx.arc(x + PISMENO_SIRKA - polomer, y - PISMENO_VYSKA + polomer, polomer, (3 / 2) * Math.PI, 0, false);
		ctx.lineTo(x + PISMENO_SIRKA, y - polomer);
		ctx.arc(x + PISMENO_SIRKA - polomer, y - polomer, polomer, 0, Math.PI / 2, false);
		ctx.lineTo(x + polomer, y);
		ctx.arc(x + polomer, y - polomer, polomer, Math.PI / 2, Math.PI, false);
		ctx.stroke();
	};

	const nakresliN = (x, y) => {
		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.lineTo(x, y - PISMENO_VYSKA);
		ctx.lineTo(x + PISMENO_SIRKA, y);
		ctx.lineTo(x + PISMENO_SIRKA, y - PISMENO_VYSKA);
		ctx.stroke();
	};

	const nakresliD = (x, y) => {
		const polomer = 15;
		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.lineTo(x, y - PISMENO_VYSKA);
		ctx.lineTo(x + PISMENO_SIRKA - polomer, y - PISMENO_VYSKA);
		ctx.arc(x + PISMENO_SIRKA - polomer, y - PISMENO_VYSKA + polomer, polomer, (3 / 2) * Math.PI, 0, false);
		ctx.lineTo(x + PISMENO_SIRKA, y - polomer);
		ctx.arc(x + PISMENO_SIRKA - polomer, y - polomer, polomer, 0, Math.PI / 2, false);
		ctx.lineTo(x, y);
		ctx.stroke();
	};

	const nakresliR = (x, y) => {
		const polomer = 15;
		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.lineTo(x, y - PISMENO_VYSKA);
		ctx.lineTo(x + PISMENO_SIRKA - polomer, y - PISMENO_VYSKA);
		ctx.arc(x + PISMENO_SIRKA - polomer, y - PISMENO_VYSKA + polomer, polomer, (3 / 2) * Math.PI, Math.PI / 2, false);
		ctx.lineTo(x, y - PISMENO_VYSKA + 2 * polomer);
		ctx.lineTo(x + PISMENO_SIRKA, y);
		ctx.stroke();
	};

	const nakresliA = (x, y) => {
		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.lineTo(x + PISMENO_SIRKA / 2, y - PISMENO_VYSKA);
		ctx.lineTo(x + PISMENO_SIRKA, y);
		ctx.moveTo(x + PISMENO_SIRKA / 4, y - PISMENO_VYSKA / 2);
		ctx.lineTo(x + (3 / 4) * PISMENO_SIRKA, y - PISMENO_VYSKA / 2);
		ctx.stroke();
	};

	const nakresliJmeno = (x, y) => {
		let aktualniX = x;
		nakresliO(aktualniX, y);
		aktualniX += (3 / 2) * PISMENO_SIRKA;
		nakresliN(aktualniX, y);
		aktualniX += (3 / 2) * PISMENO_SIRKA;
		nakresliD(aktualniX, y);
		aktualniX += (3 / 2) * PISMENO_SIRKA;
		nakresliR(aktualniX, y);
		aktualniX += (3 / 2) * PISMENO_SIRKA;
		nakresliA(aktualniX, y);
	};

	nakresliJmeno(50, 200);
});
