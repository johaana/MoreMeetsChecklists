
"use client";

import React, { createContext, useState, ReactNode } from 'react';

interface PremiumPacksContextType {
  purchasedPacks: string[];
  addPurchasedPack: (packTitle: string) => void;
}

export const PremiumPacksContext = createContext<PremiumPacksContextType>({
  purchasedPacks: [],
  addPurchasedPack: () => {},
});

export const PremiumPacksProvider = ({ children }: { children: ReactNode }) => {
  const [purchasedPacks, setPurchasedPacks] = useState<string[]>([]);

  const addPurchasedPack = (packTitle: string) => {
    setPurchasedPacks((prevPacks) => {
      if (!prevPacks.includes(packTitle)) {
        return [...prevPacks, packTitle];
      }
      return prevPacks;
    });
  };

  return (
    <PremiumPacksContext.Provider value={{ purchasedPacks, addPurchasedPack }}>
      {children}
    </PremiumPacksContext.Provider>
  );
};
