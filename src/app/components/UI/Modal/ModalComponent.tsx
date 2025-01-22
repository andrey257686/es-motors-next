'use client';

import { ReactNode } from 'react';
import Modal from 'react-modal';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ModalComponent.module.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

Modal.setAppElement('#root');

export default function ModalComponent({
  isOpen,
  onClose,
  children,
}: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.modal_overlay}
          initial={{ opacity: 0, backgroundColor: 'rgba(0, 0, 0, 0)' }}
          animate={{ opacity: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          exit={{ opacity: 0, backgroundColor: 'rgba(0, 0, 0, 0)' }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          onClick={onClose}
        >
          <motion.div
            className={styles.modal_content}
            onClick={(e) => e.stopPropagation()}
            initial={{
              opacity: 0,
              scale: 0,
              x: 'calc(100vw - 20px)',
              y: 'calc(100vh - 20px)',
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0,
              x: 'calc(100vw - 20px)',
              y: 'calc(100vh - 20px)',
            }}
            transition={{
              duration: 0.4,
              ease: 'easeInOut',
            }}
          >
            <div
              className={styles.close_button}
              onClick={onClose}
              aria-label="Close modal"
            >
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
