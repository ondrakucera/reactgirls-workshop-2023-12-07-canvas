window.addEventListener("load", () => {
	const canvas = document.querySelector("canvas");
	const ctx = canvas.getContext("2d");

	ctx.fillStyle = "brown";

	ctx.fillRect(100, 100, 80, 100);
	ctx.fillRect(180, 140, 120, 60);

	ctx.fillStyle = "silver";

	ctx.beginPath();
	ctx.arc(140, 200, 40, 0, Math.PI * 2, false);
	ctx.fill();

	ctx.beginPath();
	ctx.arc(220, 220, 20, 0, Math.PI * 2, false);
	ctx.fill();

	ctx.beginPath();
	ctx.arc(270, 220, 20, 0, Math.PI * 2, false);
	ctx.fill();

	ctx.fillStyle = "green";

	ctx.beginPath();
	ctx.moveTo(300, 160);
	ctx.lineTo(300, 230);
	ctx.lineTo(370, 230);
	ctx.fill();
});
