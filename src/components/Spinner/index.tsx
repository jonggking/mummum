import styled, { keyframes } from 'styled-components';

const Spinner = () => <Loader />;

export default Spinner;

const rotate360 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin: 0 auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 5px solid rgba(255, 255, 255, 0.2);
  border-right: 5px solid rgba(255, 255, 255, 0.2);
  border-bottom: 5px solid rgba(255, 255, 255, 0.2);
  border-left: 5px solid #ffffff;
  transform: translateZ(0);
  animation: ${rotate360} 1.1s infinite linear;

  &:after {
    content: '';
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
`;
