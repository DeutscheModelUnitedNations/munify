import React, { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useI18nContext } from "@/src/i18n/i18n-react";

// TODO: Type this function properly
// @ts-ignore
export default function UsernameLogin({ changeLoginState }) {
  const { LL } = useI18nContext();
  const [username, setUsername] = useState("");

  function advance() {
    // TODO request username from backend and store data in context
    // TODO if username is not found, show toast

    // navigate to the next stage of the login process (password)
    changeLoginState(1);
  }

  return (
    <div className="flex flex-col">
      <span className="p-float-label mb-5">
        <InputText
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="username">{LL.login.USERNAME_PLACEHOLDER()}</label>
      </span>
      <Button
        label={LL.login.ADVANCE_BUTTON()}
        icon="pi pi-arrow-right"
        iconPos="right"
        onClick={advance}
        disabled={username === ""}
      />
    </div>
  );
}
