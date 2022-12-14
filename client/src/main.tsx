import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./context/Contextapi";
import { QueryClient, QueryClientProvider } from "react-query";
import {ReactQueryDevtools} from 'react-query/devtools'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
      <BrowserRouter>
    <ContextProvider>
        <App />
    </ContextProvider>
      </BrowserRouter>
    <ReactQueryDevtools />
  </QueryClientProvider>
  // </React.StrictMode>
);
