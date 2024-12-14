'use client';

import { useModal } from '../../../context/ModalContext';
import ModalComponent from './ModalComponent';

export function GlobalModal() {
  const { isOpen, closeModal, content } = useModal();

  return (
    <ModalComponent isOpen={isOpen} onClose={closeModal}>
      {content}
    </ModalComponent>
  );
}
