import styled from 'styled-components';
import { TrashOutline, AddCircleOutline } from 'react-ionicons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GiftList = styled.ul`
  width: 100%;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
`;

export const GiftItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  span {
    ${({ theme }) => theme.typo['body-1-r']};
  }

  span > input {
    ${({ theme }) => theme.typo['body-1-r']};
    width: 70px;
  }
  input {
    ${({ theme }) => theme.typo['body-1-r']};
    width: 180px;
  }
`;

export const DeleteIcon = styled(TrashOutline)`
  cursor: pointer;
  padding: 15px;
`;

export const GiftInputWrapper = styled.div`
  display: flex;
  gap: 8px;
  text-align: center;
  ${({ theme }) => theme.typo['body-0-r']};

  input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    ${({ theme }) => theme.typo['body-0-r']};
  }

  button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 8px;
    border-radius: 4px;
    cursor: pointer;
  }
`;

export const AddIcon = styled(AddCircleOutline)`
  cursor: pointer;
  padding: 15px;
`;
