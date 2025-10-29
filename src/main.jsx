import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'

import Keyboard from "./keyboard.jsx";
import Keyes from "./keys.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Keyboard />
  </StrictMode>
);
