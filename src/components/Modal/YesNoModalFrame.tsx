import React from 'react';
import Button from '../Button';
import * as S from './styles';

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  buttonName: string;
}

const YesNoModal: React.FC<ModalProps> = ({
  title,
  isOpen,
  onClose,
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
        <S.Header>
          <S.Title>{title}</S.Title>
          <S.CloseIcon height='40px' width='40px' onClick={onClose} />
        </S.Header>
        <S.ContentContainer>{children}</S.ContentContainer>
        <S.Footer>
          <Button text='아니오' onClick={onClose} color={'WHITE'} />
          <Button text={buttonName} />
        </S.Footer>
      </S.ModalContainer>
    </>
  );
};

export default YesNoModal;
