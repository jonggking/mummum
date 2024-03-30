import styled from 'styled-components';
import { CloseOutline } from 'react-ionicons';

export const Backdrop = styled.form`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  background-color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  z-index: 3000;

  display: flex;
  flex-direction: column;

  min-width: 240px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  box-shadow: 0 0 3px 1px rgba(224, 224, 224, 0.5);

  ${({ theme }) => theme.media.mobile} {
    padding: 10px;
  }
`;

export const Title = styled.div`
  ${({ theme }) => theme.typo['title-2-b']};

  ${({ theme }) => theme.media.mobile} {
    ${({ theme }) => theme.typo['title-1-b']};
    padding-left: 20px;
  }
`;

export const CloseIcon = styled(CloseOutline)`
  cursor: pointer;
`;

export const ContentContainer = styled.div`
  padding: 30px 40px;
  ${({ theme }) => theme.typo['body-2-m']}
`;

export const Footer = styled.div`
  ${({ theme }) => theme.typo['heading-1']};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
`;
