'use client';

import { useEffect, useState } from 'react';
import ModalComponent from './ModalComponent';
import FeedbackModal from '@/app/components/UI/FeedbackModal/FeedbackModal';

export default function ModalClientTimer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalComponent isOpen={isModalOpen} onClose={closeModal}>
      <FeedbackModal />
    </ModalComponent>
  );
}
