import { JSX } from "react";

//#region src/Hello.d.ts
interface HelloProps {
  name?: string;
}
declare function Hello({
  name
}: HelloProps): JSX.Element;
//#endregion
export { Hello, HelloProps };
//# sourceMappingURL=index.d.cts.map