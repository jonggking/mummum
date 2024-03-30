import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
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

export const InputErrorBox = styled.div`
  flex: 2;
`;

export const Input = styled.input<{ error?: string }>`
  width: 100%;
  padding: 8px;
  border: 1px solid ${(props) => (props.error ? 'red' : 'black')};
  border-radius: 4px;
  outline: none;
  ${({ theme }) => theme.typo['body-1-r']};
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`;

export const TextArea = styled.textarea`
  flex: 2;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  resize: vertical;
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
  ${({ theme }) => theme.typo['heading-1']};
  padding: 0 32px 28px 0;
`;
