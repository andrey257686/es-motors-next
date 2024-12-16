'use client';

import styles from './ChatButton.module.scss';
import ModalComponent from '../Modal/ModalComponent';
import FeedbackModal from '@/app/components/UI/FeedbackModal/FeedbackModal';
import { useState } from 'react';

function ChatButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={openModal} className={styles.chatButton}>
        ЧАТ
      </button>

      <ModalComponent isOpen={isModalOpen} onClose={closeModal}>
        <FeedbackModal />
      </ModalComponent>
    </>
  );
}

export default ChatButton;
