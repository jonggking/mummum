import styled from 'styled-components';

const HEADER_HEIGHT = '70px';
const DATE_HEIGHT = '65px';
const TAP_HEIGHT = '65px';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  z-index: 500;
  width: 100%;
  height: ${HEADER_HEIGHT};
  background: #fff;
  box-shadow: 0 0 3px 1px rgba(224, 224, 224, 0.5);
`;

export const Menu = styled.div`
  display: flex;
  height: ${HEADER_HEIGHT};
  padding: 0 1rem;
  align-items: center;
  justify-content: space-between;
  background-color: 'red';
`;

export const Title = styled.div`
  ${({ theme }) => theme.typo['heading-1']};
  cursor: pointer;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledIcon = styled.button`
  width: 66px;
  height: 66px;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border: none;
  border-radius: 15px;
  background-color: white;
  position: relative;
  &:hover {
    background-color: ${({ theme }) => theme.colors.GREY[100]};
  }
`;

export const Tooltip = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: white;
  padding: 8px;
  border-radius: 4px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
  ${StyledIcon}:hover & {
    opacity: 1;
    visibility: visible;
  }

  /* 부모보다 가로가 길어도 되게 추가 */
  white-space: nowrap;
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
`;

// 메인
export const Main = styled.div`
  height: calc(100% - ${HEADER_HEIGHT});
  width: 100%;
  position: relative;
  margin-top: ${HEADER_HEIGHT};
`;

// 날짜
export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.WHITE};

  top: ${HEADER_HEIGHT};
  position: fixed;
  width: 100%;
  height: ${DATE_HEIGHT};
  z-index: 400;
  border-bottom: 2px ${({ theme }) => theme.colors.GREY[300]} solid;
`;

export const Date = styled.div`
  ${({ theme }) => theme.typo['title-2-b']};
  margin: 0 2rem;
`;

// 탭
export const TabsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-bottom: 2px ${({ theme }) => theme.colors.GREY[300]} solid;
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.colors.WHITE};

  position: fixed;
  top: ${parseInt(HEADER_HEIGHT) + parseInt(DATE_HEIGHT)}px;
  z-index: 400;
  width: 100%;
  height: ${TAP_HEIGHT};
`;

export const Tab = styled.div<{ active: boolean }>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 3px;
  text-align: center;
  ${({ theme }) => theme.typo['title-1-b']};
  color: ${(props) =>
    props.active
      ? `${props.theme.colors.BLUE[500]}`
      : `${props.theme.colors.GREY[500]}`};
  border-bottom: ${(props) =>
    props.active ? `3px solid  ${props.theme.colors.BLUE[500]}` : 'none'};

  &:hover {
    background-color: ${({ theme }) => theme.colors.BLUE[50]};
  }
`;

export const TabBody = styled.div`
  margin-top: ${parseInt(HEADER_HEIGHT) + parseInt(DATE_HEIGHT)}px;
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
`;
