import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
    <ToastContainer
      transition={Zoom}
      position="top-right"
      closeButton={false}
      hideProgressBar={true}
      onClick={() => {
        toast.dismiss(); // Close the toast when clicked
      }}
    />
  </StrictMode>
);
