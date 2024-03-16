import styled from 'styled-components';
import { RefreshSharp } from 'react-ionicons';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  max-width: 430px;
  margin: 0 auto;
  padding: 0 0 5rem 0;
  background-color: ${({ theme }) => theme.colors.GREY[100]};
`;

//입장상태 섹션
export const EntranceStatusSection = styled.div`
  width: 100%;
  margin: 1rem 0;
  padding: 10px 20px;
`;

export const TagIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem 0;
`;

export const RefreshIcon = styled(RefreshSharp)`
  cursor: pointer;
  transform: rotate(45deg);
  path {
    color: ${({ theme }) => theme.colors.GREY[600]};
  }
`;

export const StoreName = styled.div`
  ${({ theme }) => theme.typo['title-1-b']};
  margin: 0.5rem 0;
`;

export const RegistrationDateTime = styled.div`
  ${({ theme }) => theme.typo['body-4-m']};
  color: ${({ theme }) => theme.colors.GREY[500]};
  margin-bottom: 2rem;
`;

export const GaugeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
  position: relative;
`;

export const GaugeSection = styled.div`
  margin-top: 20px;
`;

export const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.GREY[300]};
  border-radius: 30px;
  height: 10px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    background-color: transparent;
    border: 2.5px solid ${({ theme }) => theme.colors.PURPLE[500]};
  }

  &::before {
    width: 5px;
    height: 5px;
    left: 47%;
  }

  &::after {
    width: 5px;
    height: 5px;
    left: 90%;
  }
`;

export const Bar = styled.div`
  background-color: ${({ theme }) => theme.colors.PURPLE[500]};
  margin-top: 10px;
  border-radius: 30px;
  height: 10px;
  position: absolute;
  top: -10px;
  left: 0;
  width: 5%;

  &.state-50 {
    width: 50%;
  }

  &.state-100 {
    width: 100%;
  }
`;

export const TagSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.GREY[500]};
  ${({ theme }) => theme.typo['body-3-b']};

  > div.selected {
    color: ${({ theme }) => theme.colors.PURPLE[500]};
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 10px;
  background-color: ${({ theme }) => theme.colors.GREY[200]};
`;

//디테일 섹션
export const DetailsSection = styled.div`
  padding: 10px 20px;
`;

export const MainNotice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
  > div:first-child {
    ${({ theme }) => theme.typo['body-2-m']};
  }

  > div:last-child {
    ${({ theme }) => theme.typo['title-2-b']};
    color: ${({ theme }) => theme.colors.BLUE[700]};
    margin: 0.5rem 0;
  }
`;

export const SlimDivider = styled(Divider)`
  width: 100%;
  height: 5px;
`;

export const DetailNotice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  padding: 0.5rem 0;
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  > div:first-child {
    ${({ theme }) => theme.typo['body-3-m']};
    color: ${({ theme }) => theme.colors.GREY[500]};
  }

  > div:last-child {
    ${({ theme }) => theme.typo['body-3-m']};
    margin: 4px 0;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  max-width: 430px;
  bottom: 0;
  position: fixed;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    width: 50%;
    border: none;
    outline: none;
    ${({ theme }) => theme.typo['body-2-b']};
    background-color: ${({ theme }) => theme.colors.BLUE[800]};
    color: white;
    font-size: ${({ theme }) => theme.typo['body-2-b'].fontSize};
    font-weight: ${({ theme }) => theme.typo['body-2-b'].fontWeight};
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.BLUE[900]};
    }

    &:first-child {
      background-color: white;
      border: 1px solid ${({ theme }) => theme.colors.BLUE[800]};
      color: black;
    }
  }
`;

export const NoticeSection = styled.div`
  padding: 10px 20px;
`;

export const Title = styled.div`
  ${({ theme }) => theme.typo['body-2-b']};
  padding: 1rem 0;
  text-align: center;
`;

export const Content = styled.ul`
  ${({ theme }) => theme.typo['body-3-m']};
  line-height: 1.8;
  overflow-wrap: break-word;
  ::before {
    content: '- ';
  }
`;
