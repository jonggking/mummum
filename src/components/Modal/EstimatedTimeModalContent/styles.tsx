import styled from 'styled-components';
import { CalendarOutline } from 'react-ionicons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const TimeAnalysisContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 40px;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;
export const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
export const Title = styled.span`
  /* position: absolute;
  top: 25px;
  left: -15px; */

  ${({ theme }) => theme.typo['body-1-b']}
  /* border-radius: 30px; */
  /* background-color: ${({ theme }) => theme.colors.BLUE[300]}; */
  /* color: ${({ theme }) => theme.colors.WHITE}; */
  /* padding: 5px 20px; */
`;

export const DatePickerContainer = styled.div`
  width: 35%;
  gap: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  ${({ theme }) => theme.typo['body-3-r']};
`;

export const CalendarIcon = styled(CalendarOutline)`
  padding: 10px 0;
`;

export const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* padding-top: 30px; */

  p {
    ${({ theme }) => theme.typo['body-3-r']};
    margin: 5px 0;
  }

  span {
    ${({ theme }) => theme.typo['body-2-b']};
    margin: 5px 0;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Label = styled.span`
  flex: 1;
  margin-right: 10px;
  ${({ theme }) => theme.typo['body-1-r']};
`;

export const Input = styled.input`
  flex: 2;
  width: 30%;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  ${({ theme }) => theme.typo['body-1-r']};
`;