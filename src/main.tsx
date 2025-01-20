import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";
import "./index.css";
import { Toaster } from "sonner";
import { UserAuthProvider } from "./provider/auth-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserAuthProvider>
      <BrowserRouter>
        <Toaster richColors mobileOffset={{ bottom: "16px" }} />
        <App />
      </BrowserRouter>
    </UserAuthProvider>
  </StrictMode>
);
