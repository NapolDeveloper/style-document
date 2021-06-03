import React, { useState } from 'react';

export default function useToggle(initialstate) {
  const [isOpen, setIsOpen] = useState(initialstate);

  function handleToggle() {
    if (isOpen === true) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }
  return [isOpen, handleToggle];
}
