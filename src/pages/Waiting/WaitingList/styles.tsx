import styled from 'styled-components';
import {
  PersonOutline,
  CallOutline,
  TimerOutline,
  GiftOutline,
} from 'react-ionicons';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 95%;
  height: auto;
  justify-content: space-between;
  padding: 2rem;
  border-bottom: 2px ${({ theme }) => theme.colors.GREY[300]} solid;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Order = styled.div`
  ${({ theme }) => theme.typo['body-1-b']};
  padding: 0.5rem 0;
`;

export const WaitingNum = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.typo['title-1-b']};
  padding: 0.5rem 2rem;
  align-items: center;
  text-align: center;
  border-radius: 15px;

  /* background-color: ${({ theme }) => theme.colors.BLUE[100]}; */
`;

export const People = styled.ul`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  ${({ theme }) => theme.typo['body-2-b']};
  margin: 0.5rem 0;

  > li {
    padding: 0 5px;
    position: relative;
    display: flex;
    align-items: center;
  }

  > li:nth-child(2) {
    padding-left: 0;
  }

  > li::before {
    content: '';
    width: 1px;
    height: 15px;
    background: ${({ theme }) => theme.colors.GREY[400]};
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  > li:nth-child(2)::before {
    display: none;
  }
`;

export const PersonIcon = styled(PersonOutline)`
  margin-right: 8px;
`;

export const Phone = styled(People)``;

export const CallIcon = styled(CallOutline)`
  margin-right: 8px;
`;

export const Time = styled(People)`
  ${({ theme }) => theme.typo['body-2-r']};
`;

export const TimeIcon = styled(TimerOutline)`
  margin-right: 8px;
`;

export const RedText = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.RED[700]};
  ${({ theme }) => theme.typo['body-2-b']};
  margin-left: 8px;
  margin-right: 1rem;
`;

export const Service = styled(Time)``;

export const ServiceIcon = styled(GiftOutline)`
  margin-right: 8px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;
