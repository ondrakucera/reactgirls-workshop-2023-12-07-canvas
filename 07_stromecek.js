window.addEventListener("load", () => {
	const canvas = document.querySelector("canvas");
	const ctx = canvas.getContext("2d");

	ctx.fillStyle = "#d37977";

	ctx.beginPath();
	ctx.moveTo(300, 100);
	ctx.lineTo(320, 450);
	ctx.lineTo(280, 450);
	ctx.fill();

	ctx.fillStyle = "#00acbd";

	ctx.beginPath();
	ctx.moveTo(300, 100);
	ctx.lineTo(400, 250);
	ctx.lineTo(200, 250);
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(300, 175);
	ctx.lineTo(420, 325);
	ctx.lineTo(180, 325);
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(300, 250);
	ctx.lineTo(440, 400);
	ctx.lineTo(160, 400);
	ctx.fill();

	ctx.fillStyle = "#d37977";
	ctx.beginPath();
	ctx.arc(280, 175, 10, 0, Math.PI * 2, false);
	ctx.fill();

	ctx.fillStyle = "#ade3eb";
	ctx.beginPath();
	ctx.arc(360, 370, 10, 0, Math.PI * 2, false);
	ctx.fill();
});
