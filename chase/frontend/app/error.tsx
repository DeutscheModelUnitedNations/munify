"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "primereact/button";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  
  function load() {
    setLoading(true);

    // navigate to the participant login page
    setTimeout(() => {
      router.push("/")
    }, 1000);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  return (
    <>
      <div className="flex align-center justify-center h-screen w-screen bg-dmun-primary">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/logo/png/chase_logo_white_text.png"
            alt="Logo"
            width={400}
            height={128}
            className="mb-10"
          />
          <p className="text-white text-9xl mb-3 mt-10">500</p>
          <p className="text-white text-1xl mb-10">Server Error</p>
          <Link href="/">
            <Button
              severity="warning"
              label="Back to Home"
              icon="pi pi-link"
              loading={loading}
            />
          </Link>
        </div>
      </div>
    </>
  );
}
