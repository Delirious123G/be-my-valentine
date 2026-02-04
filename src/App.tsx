"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Lah bakit",
      "pls no no, click the other button",
      "pls bib",
      "wAG KASIII",
      "bawal pooo",
      "PLEASE BIB",
      ":(((",
      "ikamamatay ko to",
      "wala na patay na ko",
      "BIB NAMAN KASI",
      ":'((((",
      "PLS PLS PLS",
      "no no no",
      "baby iiyak ako legit",
      "wala kang choice",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://i.pinimg.com/originals/fd/35/30/fd3530b992c00cc1556a794a306cef45.gif" />
          <div className="my-4 text-4xl font-bold">YAAAAAAAAAAAAAAAAAY MWA MWA I LOVE YOU!!!</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://i.pinimg.com/originals/15/6a/7e/156a7eeca789b83dd40117d4d06ac021.gif"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine, bib?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
