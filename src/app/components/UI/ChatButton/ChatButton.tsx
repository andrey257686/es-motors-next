'use client';
import Image from 'next/image';

import styles from './ChatButton.module.scss';
import FeedbackModal from '@/app/components/UI/FeedbackModal/FeedbackModal';
import { useModal } from '@/app/context/ModalContext';

function ChatButton() {
  const { isOpen, openModal, setContent } = useModal();

  const handleClick = () => {
    if (isOpen) return;
    setContent(<FeedbackModal />);
    openModal();
  };

  return (
    <button onClick={handleClick} className={styles.chatButton}>
      <Image src="/images/chat-icon.svg" alt="Чат" width={40} height={33} />
    </button>
  );
}

export default ChatButton;
