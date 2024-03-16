import React from 'react';
import Button from '../Button';
import * as S from './styles';

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      {isOpen && <S.Backdrop />}
      <S.ModalContainer>
        <S.Header>
          <S.Title>{title}</S.Title>
          <S.CloseIcon height='40px' width='40px' onClick={onClose} />
        </S.Header>
        <S.ContentContainer>
          {children}
        </S.ContentContainer>
      </S.ModalContainer>
    </>
  );
};

export default Modal;
