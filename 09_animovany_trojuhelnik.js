const nahodneCislo = (minimum, maximum) => Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
const nahodneZnamenko = () => nahodneCislo(0, 1) * 2 - 1;
const nahodnaBarva = () => `rgb(${nahodneCislo(64, 255)}, ${nahodneCislo(64, 255)}, ${nahodneCislo(64, 255)})`;

window.addEventListener("load", () => {
	const canvas = document.querySelector("canvas");
	const ctx = canvas.getContext("2d");

	const SIRKA = canvas.width;
	const VYSKA = canvas.height;
	const MAXIMALNI_X = SIRKA - 1;
	const MAXIMALNI_Y = VYSKA - 1;
	const MAXIMALNI_DELTA = 10;
	const PERIODA = 15;
	const POCET_UHLU = 3;

	const nahodnaDelta = () => nahodneCislo(1, MAXIMALNI_DELTA);

	const souradnice = [];
	for (let i = 0; i < POCET_UHLU; i++) {
		souradnice.push([nahodneCislo(0, MAXIMALNI_X), nahodneCislo(0, MAXIMALNI_Y)]);
	}

	const delty = [];
	for (let i = 0; i < POCET_UHLU; i++) {
		delty.push([nahodnaDelta() * nahodneZnamenko(), nahodnaDelta() * nahodneZnamenko()]);
	}

	ctx.strokeStyle = nahodnaBarva();
	ctx.fillStyle = "black";

	const prekresliTrojuhelnik = () => {
		ctx.fillRect(0, 0, SIRKA, VYSKA);

		ctx.beginPath();
		ctx.moveTo(souradnice[0][0], souradnice[0][1]);
		for (let i = 0; i < POCET_UHLU; i++) {
			ctx.lineTo(souradnice[(i + 1) % POCET_UHLU][0], souradnice[(i + 1) % POCET_UHLU][1]);
		}
		ctx.stroke();
	};

	const prepocitejSouradnice = () => {
		for (let i = 0; i < POCET_UHLU; i++) {
			souradnice[i][0] += delty[i][0];
			souradnice[i][1] += delty[i][1];

			if (souradnice[i][0] > MAXIMALNI_X) {
				delty[i][0] = -nahodnaDelta();
				delty[i][1] = Math.sign(delty[i][1]) * nahodnaDelta();
				x = MAXIMALNI_X;
				ctx.strokeStyle = nahodnaBarva();
			} else if (souradnice[i][0] < 0) {
				delty[i][0] = nahodnaDelta();
				delty[i][1] = Math.sign(delty[i][1]) * nahodnaDelta();
				x = 0;
				ctx.strokeStyle = nahodnaBarva();
			}
			if (souradnice[i][1] > MAXIMALNI_Y) {
				delty[i][0] = Math.sign(delty[i][0]) * nahodnaDelta();
				delty[i][1] = -nahodnaDelta();
				y = MAXIMALNI_Y;
				ctx.strokeStyle = nahodnaBarva();
			} else if (souradnice[i][1] < 0) {
				delty[i][0] = Math.sign(delty[i][0]) * nahodnaDelta();
				delty[i][1] = nahodnaDelta();
				y = 0;
				ctx.strokeStyle = nahodnaBarva();
			}
		}
	};

	const prekresliScenu = () => {
		prepocitejSouradnice();
		prekresliTrojuhelnik();
	};

	prekresliTrojuhelnik();
	setInterval(prekresliScenu, PERIODA);
});
