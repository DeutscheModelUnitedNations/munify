"use client";
import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { treaty } from "@elysiajs/eden";
import type { App } from "../../backend/src/main";
import { unstable_noStore as noStore } from "next/cache";
import { env } from "next-runtime-env";

export const BackendContext = createContext({} as BackendContextType);
export const useBackend = () => useContext(BackendContext);

export type BackendInstanceType = ReturnType<typeof treaty<App>>;

function getBackendUrl() {
  noStore();
  return env("NEXT_PUBLIC_BACKEND_URL") || "https://chase-backend.dmun.de";
}

export const Backend = ({ children }: { children: React.ReactNode }) => {
  // ATTENTION: It is IMPORTANT to use a callback function here to prevent
  // react from doing funky things with the backend instance when passing to the state hook
  // please do not ask me why this is happening...
  const [backend, _setBackend] = useState(() =>
    treaty<App>(getBackendUrl(), {
      fetch: {
        credentials: "include",
      },
    }),
  );

  return (
    <BackendContext.Provider value={{ backend }}>
      {children}
    </BackendContext.Provider>
  );
};

export interface BackendContextType {
  backend: BackendInstanceType;
}
