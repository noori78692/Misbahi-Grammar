import { createRoot } from "react-dom/client";
import { App as CapacitorApp } from "@capacitor/app";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Android Hardware Back Button
CapacitorApp.addListener("backButton", () => {
  if (window.location.pathname !== "/") {
    window.history.back();
  } else {
    CapacitorApp.exitApp();
  }
});

// Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .catch((err) => {
        console.warn("Service worker registration failed:", err);
      });
  });
}