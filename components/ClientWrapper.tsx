'use client';

import { useEffect, useState } from 'react';
import BusinessUnitModal from './BusinessUnitModal';

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [showModal]);

  const handleSelect = (unit: string) => {
    // Guardás en localStorage si querés persistir elección
    localStorage.setItem('business_unit', unit);
    setShowModal(false);
  };

  return (
    <>{showModal ? <BusinessUnitModal onSelect={handleSelect} /> : children}</>
  );
}
