import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import HttpTaskGateway from "./gateways/TaskGateway/HttpTaskGateway.ts";
import "./index.css";

const inMemoryTaskateway = new HttpTaskGateway("http://localhost:3000");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App taskGateway={inMemoryTaskateway} />
  </React.StrictMode>
);
