"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Button } from "primereact/button";
import { useRouter } from "next/navigation";
import { useBackend } from "@/contexts/backend";
import { useAuth } from "@/contexts/auth";

export default function Home() {
  const router = useRouter();
  const auth = useAuth();
  const backend = useBackend();

  return (
    <>
      <div className="flex align-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/logo/png/chase_logo_blue_text.png"
            alt="Logo"
            width={700}
            height={128}
            className="mb-10"
          />
          <div className="p-buttonset mb-2">
            <Button
              label="Login ZITADEL"
              icon="pi pi-link"
              onClick={auth.login}
            />
            <Button
              label="TEST"
              icon="pi pi-link"
              onClick={() => backend["sign-in"].post()}
            />
            <Button
              label="Teilnehmenden"
              icon="pi pi-link"
              onClick={() => router.push("/participant/dashboard")}
            />
            <Button
              label="Vorsitz"
              icon="pi pi-link"
              onClick={() => router.push("/chair/dashboard")}
            />
            <Button
              label="Admin"
              icon="pi pi-link"
              onClick={() => router.push("/admin/new")}
            />
          </div>
        </div>
      </div>
    </>
  );
}
