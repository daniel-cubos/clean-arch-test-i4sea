import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import HttpTaskGateway from "./gateways/TaskGateway/HttpTaskGateway.ts";
import "./index.css";
import FetchAdapter from "./infra/FetchAdapter.ts";
// import AxiosAdapter from "./infra/AxiosAdapter.ts";

const httpClient = new FetchAdapter();
// const httpClient = new AxiosAdapter();

const inMemoryTaskateway = new HttpTaskGateway(
  "http://localhost:3000",
  httpClient
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App taskGateway={inMemoryTaskateway} />
  </React.StrictMode>
);
