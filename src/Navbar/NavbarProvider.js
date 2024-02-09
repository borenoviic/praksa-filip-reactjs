import React, { useState } from 'react';

export const ActiveSectionContext = React.createContext();

const NavbarProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState('');

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default NavbarProvider;
