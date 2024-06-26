import Card from './WaitingCard';
import styled from 'styled-components';
import { CmsWaitingData } from 'types/waiting';

const WaitingList = ({ datas }: { datas: CmsWaitingData[] }) => {
  return (
    <Container>
      {datas.map((waitingTeam, index) => (
        <Card key={waitingTeam.waitingId} order={index + 1} {...waitingTeam} />
      ))}
    </Container>
  );
};
export default WaitingList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
