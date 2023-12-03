window.addEventListener("load", () => {
	const canvas = document.querySelector("canvas");
	const ulozitObrazek = document.querySelector("#ulozit-obrazek");
	ulozitObrazek.addEventListener("click", () => {
		const url = canvas.toDataURL();
		ulozitObrazek.href = url;
	});
});
