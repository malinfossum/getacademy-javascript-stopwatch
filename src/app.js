import { createController } from "./controller/controller.js";
import { createModel } from "./model/model.js";
import { createView } from "./view/view.js";

export function createApp() {
	const root = document.getElementById("main");
	if (!root) throw new Error("Missing #main element in index.html");

	const model = createModel();
	const view = createView(root);
	createController({ model, view });
}
