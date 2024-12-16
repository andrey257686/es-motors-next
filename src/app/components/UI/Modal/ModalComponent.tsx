// 'use client';

// import { ReactNode } from 'react';
// import Modal from 'react-modal';

// import styles from './ModalComponent.module.scss';

// Modal.setAppElement('#root');

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   children: ReactNode;
// }

// export default function ModalComponent({
//   isOpen,
//   onClose,
//   children,
// }: ModalProps) {
//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onClose}
//       overlayClassName={styles.modal_overlay}
//       className={styles.modal_content}
//       contentLabel="Modal"
//     >
//       {children}
//     </Modal>
//   );
// }

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
      overlayClassName={{
        base: styles.modal_overlay,
        afterOpen: styles.modal_overlay_open,
        beforeClose: styles.modal_overlay_close,
      }}
      className={{
        base: styles.modal_content,
        afterOpen: styles.modal_content_open,
        beforeClose: styles.modal_content_close,
      }}
      closeTimeoutMS={400}
      contentLabel="Modal"
    >
      {children}
    </Modal>
  );
}
