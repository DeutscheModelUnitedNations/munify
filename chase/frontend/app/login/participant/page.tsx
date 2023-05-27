"use client";
import React, { useState, Suspense } from "react";
import Image from "next/image";

import UsernameLogin from "../components/username";
import PasswordLogin from "../components/password";
import Loading from "@/app/loading";
import Link from "next/link";

export default function loginVorsitz() {
  const [loginStage, changeLoginState] = useState(0);

  return (
    <>
      <Suspense fallback={<Loading />} />
      <div className="flex justify-stretch h-screen bg-light-gray">
        <div className="flex-1 flex justify-center">
          <div className="flex-1 flex flex-col justify-stretch items-center rounded-2xl shadow-md m-10 max-w-lg bg-white">
            <div className="flex justify-center items-center m-10">
              <Image
                src={"/logo/png/chase_logo_blue_text.png"}
                alt="Logo"
                width={400}
                height={128}
              />
            </div>
            {(loginStage === 0 && (
              <>
                <div className="flex-1 flex flex-col justify-center items-center">
                  <UsernameLogin changeLoginState={changeLoginState} />
                  <p className="mt-10 text-gray-400 hover:text-black underline text-xs text-center">
                    <Link href="/login/chair">Stattdessen als Vorsitz anmelden</Link>
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center m-10">
                  <p className="text-sm text-gray-500">Powered by</p>
                  <Image
                    src="/dmunlogo/dmun_logo.png"
                    alt="Logo"
                    width={100}
                    height={64}
                    className="ml-2"
                  />
                </div>
              </>
            )) ||
              (loginStage === 1 && (
                <PasswordLogin changeLoginState={changeLoginState} />
              ))}
          </div>
        </div>
        <div className="flex-1 overflow-hidden h-screen">
          <Image
            src="/stock/stock1.jpg"
            alt="Stock Image"
            width={1920}
            height={1080}
            style={{ objectFit: "cover", height: "100%" }}
          />
        </div>
      </div>
    </>
  );
}
