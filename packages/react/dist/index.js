import { defaultGreeting } from "@template/core";
import { jsx } from "react/jsx-runtime";

//#region src/Hello.tsx
function Hello({ name = defaultGreeting.text }) {
	return /* @__PURE__ */ jsx("span", { children: name });
}

//#endregion
export { Hello };
//# sourceMappingURL=index.js.map