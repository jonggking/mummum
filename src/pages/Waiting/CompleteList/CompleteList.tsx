import Card from './CompleteCard';
import styled from 'styled-components';
import { CmsWaitingData } from 'types/waiting';

const CompleteList = ({ datas }: { datas: CmsWaitingData[] }) => {

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
export default CompleteList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
