import React from 'react';
import Button from '../../Button';
import * as S from './styles';

interface ModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  children?: React.ReactNode;
  buttonName: string;
}

const ConfirmModal: React.FC<ModalProps> = ({
  isOpen,
  onConfirm,
  children,
  buttonName,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      {isOpen && <S.Backdrop />}
      <S.ModalContainer>
        <S.ContentContainer>{children}</S.ContentContainer>
        <S.Footer>
          <Button text={buttonName} onClick={onConfirm} />
        </S.Footer>
      </S.ModalContainer>
    </>
  );
};

export default ConfirmModal;
