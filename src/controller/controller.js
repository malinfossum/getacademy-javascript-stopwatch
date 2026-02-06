export function createController({ view }) {
	view.render();

	const display = () => document.getElementById("display");
	const roundTime = () => document.getElementById("lastRound");

	let seconds = 0;
	let timer = null;

	function countSeconds() {
		display().innerHTML = seconds;
		seconds++;
	}

	function startTimer() {
		if (timer !== null) return;
		timer = setInterval(countSeconds, 1000);
	}

	function pauseTimer() {
		if (timer === null) return;

		roundTime().innerHTML += `<li>${seconds - 1} sekunder</li>`;
		clearInterval(timer);
		timer = null;
		seconds = 0;
		display().innerHTML = "0";
	}

	function stopAll() {
		clearInterval(timer);
		timer = null;
		seconds = 0;
		display().innerHTML = "0";
		roundTime().innerHTML = "";
	}

	view.bindActions({
		start: startTimer,
		pause: pauseTimer,
		stopAll: stopAll,
	});

	return {};
}
