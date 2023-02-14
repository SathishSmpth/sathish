import "@codesandbox/sandpack-react/dist/index.css";
import { Sandpack } from "@codesandbox/sandpack-react";

import localFile from "!!raw-loader!./local-project/App";

export default function App() {
  return (
    <>
      <Sandpack
        template="react"
        files={{
          "/App.js": localFile
        }}
      />
    </>
  );
}
