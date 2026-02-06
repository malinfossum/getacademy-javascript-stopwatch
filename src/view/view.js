export function createView(root) {
	function render() {
		root.innerHTML = /*html*/ `
      <div class="wrapper">
        <button class="clockButton" data-action="start">Start</button>
        <button class="clockButton" data-action="pause">Pause</button>
        <button class="clockButton" data-action="stopAll">Stop & Reset</button><br>

        <div id="display" class="clockDisplay">0</div>
        <br>
        Laps:
        <ul id="lastRound" class="roundsList"></ul>
      </div>
    `;
	}

	function bindActions(handlers) {
		root.addEventListener("click", (event) => {
			const btn = event.target.closest("[data-action]");
			if (!btn) return;

			const action = btn.dataset.action;
			handlers[action]?.();
		});
	}

	return { render, bindActions };
}
