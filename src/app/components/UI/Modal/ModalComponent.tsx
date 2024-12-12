'use client';

import { ReactNode } from 'react';
import Modal from 'react-modal';

import styles from './ModalComponent.module.scss';

Modal.setAppElement('#root');

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function ModalComponent({
  isOpen,
  onClose,
  children,
}: ModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={styles.modal_overlay}
      className={styles.modal_content}
      contentLabel="Modal"
    >
      {children}
    </Modal>
  );
}
