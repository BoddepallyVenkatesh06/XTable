import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import DateViewTable from "./DateViewTable";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <DateViewTable />
  </StrictMode>
);
