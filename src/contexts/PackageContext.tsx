"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type PackageContextType = {
  isPackageSelected: boolean;
  setIsPackageSelected: (isSelected: boolean) => void;
};

const PackageContext = createContext<PackageContextType | undefined>(undefined);

export function PackageProvider({ children }: { children: ReactNode }) {
  const [isPackageSelected, setIsPackageSelected] = useState(false);

  return (
    <PackageContext.Provider value={{ isPackageSelected, setIsPackageSelected }}>
      {children}
    </PackageContext.Provider>
  );
}

export function usePackage() {
  const context = useContext(PackageContext);
  if (context === undefined) {
    throw new Error("usePackage must be used within a PackageProvider");
  }
  return context;
}
