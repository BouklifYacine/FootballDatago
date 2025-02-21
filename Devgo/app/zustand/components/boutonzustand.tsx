"use client"

import { useAugmenter } from "@/app/(store)/StoreAugmenter";
import React from "react";

export default function Boutonzustand() {
  const { augmenter, compteur, reset } = useAugmenter();
  return (
    <>
      <div className="flex gap-4">
        <button onClick={augmenter}>Augmenter le chiffre</button>
        <button onClick={reset}>Reset le score </button>
      </div>
      <p>{compteur}</p>
    </>
  );
}
