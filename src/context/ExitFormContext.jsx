import React, { createContext, useContext, useState, useEffect } from 'react';
import ExitFormModal from '@/components/shared/ExitFormModal';

const ExitFormContext = createContext({
  openForm: () => {},
  closeForm: () => {},
});

export const useExitForm = () => useContext(ExitFormContext);

export const ExitFormProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggeredExit, setHasTriggeredExit] = useState(false);

  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      // If mouse leaves from the top of the viewport (indicating closing tab/switching window)
      if (e.clientY <= 0 && !hasTriggeredExit && !isOpen) {
        setIsOpen(true);
        setHasTriggeredExit(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasTriggeredExit, isOpen]);

  return (
    <ExitFormContext.Provider value={{ openForm, closeForm }}>
      {children}
      <ExitFormModal isOpen={isOpen} onClose={closeForm} />
    </ExitFormContext.Provider>
  );
};
