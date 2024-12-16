'use client';

import { useEffect, useRef, useState } from 'react';
// import ModalComponent from './ModalComponent';
import FeedbackModal from '@/app/components/UI/FeedbackModal/FeedbackModal';

import { useModal } from '../../../context/ModalContext';

export default function ModalClientTimer() {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const { isOpen, openModal, setContent } = useModal(); // Используем контекст
  const hasOpened = useRef(false);

  useEffect(() => {
    // if (isOpen) return;
    // if (!isOpen) {
    if (!hasOpened.current) {
      const timer = setTimeout(() => {
        setContent(<FeedbackModal />); // Устанавливаем содержимое модального окна
        hasOpened.current = true;
        openModal(); // Открываем модальное окно
      }, 5000); // Открыть через 5 секунд

      return () => clearTimeout(timer);
    }
  }, [openModal, setContent]);

  return null;
}
