import React, { createContext, useState, useEffect, useContext } from 'react';
import { useMediaQuery } from 'react-responsive';

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);
  const isSmall = useMediaQuery({ maxWidth: 768 });
  const isMedium = useMediaQuery({ maxWidth: 1024 });

  useEffect(()=>{
    isSmall ? setVisibleCount(4) : setVisibleCount(12);
  },[isSmall]);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <DataContext.Provider value={{ sidebarOpen, isSmall, isMedium, visibleCount, setVisibleCount, toggleSidebar }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useDataContext must be used within an DataContextProvider');
  }
  return context;
};
