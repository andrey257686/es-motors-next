'use client';
import Button, { ButtonProps } from '@/app/components/UI/Button/Button';
import { useModal } from '@/app/context/ModalContext';
import { ReactNode } from 'react';

interface Props extends ButtonProps {
  modalContent: ReactNode;
}

export default function OpenModalButton({
  children,
  modalContent,
  ...props
}: Props) {
  const { isOpen, openModal, setContent } = useModal();

  const handleClick = () => {
    if (isOpen) return;
    setContent(modalContent);
    openModal();
  };

  return (
    <Button {...props} onClick={handleClick}>
      {children}
    </Button>
  );
}
