window.addEventListener("load", () => {
	const canvas = document.querySelector("canvas");
	const ctx = canvas.getContext("2d");

	const nakresliO = (x, y) => {
		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.lineTo(x, y - 100);
		ctx.lineTo(x + 40, y - 100);
		ctx.lineTo(x + 40, y);
		ctx.lineTo(x, y);
		ctx.stroke();
	};

	const nakresliN = (x, y) => {
		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.lineTo(x, y - 100);
		ctx.lineTo(x + 40, y);
		ctx.lineTo(x + 40, y - 100);
		ctx.stroke();
	};

	const nakresliD = (x, y) => {
		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.lineTo(x, y - 100);
		ctx.lineTo(x + 40, y - 90);
		ctx.lineTo(x + 40, y - 10);
		ctx.lineTo(x, y);
		ctx.stroke();
	};

	const nakresliR = (x, y) => {
		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.lineTo(x, y - 100);
		ctx.lineTo(x + 40, y - 100);
		ctx.lineTo(x + 40, y - 60);
		ctx.lineTo(x, y - 60);
		ctx.lineTo(x + 40, y);
		ctx.stroke();
	};

	const nakresliA = (x, y) => {
		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.lineTo(x + 20, y - 100);
		ctx.lineTo(x + 40, y);
		ctx.moveTo(x + 10, y - 50);
		ctx.lineTo(x + 30, y - 50);
		ctx.stroke();
	};

	const nakresliJmeno = (x, y) => {
		nakresliO(x, y);
		nakresliN(x + 60, y);
		nakresliD(x + 120, y);
		nakresliR(x + 180, y);
		nakresliA(x + 240, y);
	};

	nakresliJmeno(50, 200);
});
