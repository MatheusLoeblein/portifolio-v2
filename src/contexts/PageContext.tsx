import React, { createContext, useState, Dispatch, SetStateAction } from 'react';

export interface PageContextProps {
  currentSectionId: null | string;
  setCurrentSectionId: Dispatch<SetStateAction<null | string>>;
}

export const PageContext = createContext<PageContextProps | null>(null);

export function PageContextProvider({ children }: { children: React.ReactNode }) {
  const [currentSectionId, setCurrentSectionId] = useState<null | string>(null);

  const contextValue: PageContextProps = {
    currentSectionId,
    setCurrentSectionId,
  };

  return <PageContext.Provider value={contextValue}>{children}</PageContext.Provider>;
}
