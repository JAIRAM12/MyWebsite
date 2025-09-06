import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./Components/App.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "antd/dist/reset.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Components/Redux/store.js"; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
