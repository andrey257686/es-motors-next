'use client';

import { useEffect, useRef } from 'react';
import FeedbackModal from '@/app/components/UI/FeedbackModal/FeedbackModal';

import { useModal } from '@/app/context/ModalContext';

export default function ModalClientTimer() {
  const { isOpen, openModal, setContent } = useModal();
  const hasOpened = useRef(false);

  useEffect(() => {
    if (isOpen || hasOpened.current) return;
    const timer = setTimeout(() => {
      setContent(<FeedbackModal />);
      hasOpened.current = true;
      openModal();
    }, 5000);

    return () => clearTimeout(timer);
  }, [openModal, setContent, isOpen]);

  return null;
}
