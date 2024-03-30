import Card from './CancelCard';
import styled from 'styled-components';
import { CmsWaitingData } from 'types/waiting';

const CancelList = ({ datas }: { datas: CmsWaitingData[] }) => {
  return (
    <Container>
      {datas.reverse().map((completeWaiting, index) => (
        <Card
          key={completeWaiting.waitingId}
          order={index + 1}
          {...completeWaiting}
        />
      ))}
    </Container>
  );
};
export default CancelList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
