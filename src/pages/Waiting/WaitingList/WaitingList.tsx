import Card from './WaitingCard';
import styled from 'styled-components';

const WaitingList = () => {
  const waitingList = [
    {
      waitingNumber: 37,
      total: 4,
      babyChair: 1,
      kidsUtensils: 2,
      phoneNumber: '010-1234-5678',
      time: '10:10:11',
      service: '트러플스트링',
      isServiceUsed: false,
      remainingCalls: 0,
      isDeferred: true,
    },
    {
      waitingNumber: 38,
      total: 2,
      babyChair: 0,
      kidsUtensils: 0,
      phoneNumber: '010-1234-9876',
      time: '10:15:13',
      service: '음료',
      isServiceUsed: false,
      remainingCalls: 1,
      isDeferred: false,
    },
    {
      waitingNumber: 39,
      total: 4,
      babyChair: 0,
      kidsUtensils: 1,
      phoneNumber: '010-5678-9876',
      time: '10:15:13',
      service: null,
      isServiceUsed: false,
      remainingCalls: 2,
      isDeferred: false,
    },
  ];
  return (
    <Container>
      {waitingList.map((waitingTeam, index) => (
        <Card
          key={waitingTeam.waitingNumber}
          order={index + 1}
          {...waitingTeam}
        />
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
