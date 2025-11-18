import { useState, useRef, useEffect } from 'react';

export const useDropdown = (closeDelay: number = 150) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const openDropdown = (name: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(name);
    setIsOpen(true);
  };

  const closeDropdown = () => {
    timeoutRef.current = window.setTimeout(() => {
      setIsOpen(false);
      setActiveDropdown(null);
    }, closeDelay);
  };

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      closeDropdown();
    } else {
      openDropdown(name);
    }
  };

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleDropdownMouseLeave = () => {
    closeDropdown();
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    isOpen,
    activeDropdown,
    openDropdown,
    closeDropdown,
    toggleDropdown,
    handleDropdownMouseEnter,
    handleDropdownMouseLeave,
  };
};
