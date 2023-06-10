import React from "react";
import Image from "next/image";

export default function DashboardHeader({
  countryName,
  countryCode,
  committeeName,
  currentTopic,
}) {
  return (
    <div className=" h-32 bg-gray-300 flex justify-between items-center p-4">
      <div className="flex flex-col items-start justify-center">
        <div className="text-2xl font-bold mb-1">{countryName}</div>
        <div className="text-md font-bold">{committeeName}</div>
        <div className="text-md">{currentTopic}</div>
      </div>
      <div className="flex flex-col items-center rounded-md overflow-hidden border border-black shadow-lg">
        <Image
          src={`/flags/${countryCode}.svg`}
          alt="flag"
          width={130}
          height={100}
          style={{ objectFit: "contain", height: "100%" }}
        />
      </div>
    </div>
  );
}