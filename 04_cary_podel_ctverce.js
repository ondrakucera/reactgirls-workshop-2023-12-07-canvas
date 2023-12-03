window.addEventListener("load", () => {
	const canvas = document.querySelector("canvas");
	const ctx = canvas.getContext("2d");

	const sirka = canvas.width;
	const vyska = canvas.height;
	const POCET_KROKU = 30;
	const krokX = sirka / POCET_KROKU;
	const krokY = vyska / POCET_KROKU;

	for (let krok = 0; krok < POCET_KROKU; krok++) {
		ctx.beginPath();
		ctx.moveTo(krok * krokX, 0);
		ctx.lineTo(sirka, krok * krokY);
		ctx.stroke();
	}

	for (let krok = 0; krok < POCET_KROKU; krok++) {
		ctx.beginPath();
		ctx.moveTo(sirka, krok * krokY);
		ctx.lineTo(sirka - krok * krokX, vyska);
		ctx.stroke();
	}

	for (let krok = 0; krok < POCET_KROKU; krok++) {
		ctx.beginPath();
		ctx.moveTo(sirka - krok * krokX, vyska);
		ctx.lineTo(0, vyska - krok * krokY);
		ctx.stroke();
	}

	for (let krok = 0; krok < POCET_KROKU; krok++) {
		ctx.beginPath();
		ctx.moveTo(0, vyska - krok * krokY);
		ctx.lineTo(krok * krokX, 0);
		ctx.stroke();
	}
});
