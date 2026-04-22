"use client";

import React, { createContext, useContext, useState } from 'react';

interface LeadModalContextType {
  open: () => void;
  close: () => void;
  isOpen: boolean;
}

const LeadModalContext = createContext<LeadModalContextType>({
  open: () => {},
  close: () => {},
  isOpen: false,
});

export function LeadModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <LeadModalContext.Provider value={{ open: () => setIsOpen(true), close: () => setIsOpen(false), isOpen }}>
      {children}
    </LeadModalContext.Provider>
  );
}

export const useLeadModal = () => useContext(LeadModalContext);
