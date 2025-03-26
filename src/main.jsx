import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { GalleryProvider } from "./providers/GalleryProvider/GalleryProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GalleryProvider>
      <App />
    </GalleryProvider>
  </StrictMode>
);
