import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 350px;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.GREY[100]};
  border-radius: 15px;
`;

export const TextArea = styled.textarea`
  ${({ theme }) => theme.typo['body-2-m']};
  background-color: ${({ theme }) => theme.colors.GREY[100]};
  width: 100%;
  flex: 1;
  resize: none;
  border: none;
  word-spacing: 5px;
  line-height: 2;
  outline: none;
`;

export const FixedNotice = styled.div`
  ${({ theme }) => theme.typo['body-2-m']};
  width: 100%;
  color: ${({ theme }) => theme.colors.GREY[500]};
  word-spacing: 5px;
  line-height: 2;
  height: auto;
`;
