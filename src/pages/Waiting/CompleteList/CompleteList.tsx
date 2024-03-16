import Card from './CompleteCard';
import styled from 'styled-components';

const CompleteList = () => {
  const waitingList = [
    {
      waitingNumber: 37,
      total: 4,
      babyChair: 1,
      kidsUtensils: 2,
      phoneNumber: '010-1234-5678',
      time: '10:10:11',
      waitingEndTime: '10:25:13',

      service: '트러플스트링',
      isServiceUsed: true,
      remainingCalls: 1,
    },
    {
      waitingNumber: 38,
      total: 2,
      babyChair: 0,
      kidsUtensils: 0,
      phoneNumber: '010-1234-9876',
      time: '10:15:13',
      waitingEndTime: '10:35:13',
      service: '음료',
      isServiceUsed: false,
      remainingCalls: 1,
    },
    {
      waitingNumber: 39,
      total: 4,
      babyChair: 0,
      kidsUtensils: 1,
      phoneNumber: '010-5678-9876',
      time: '10:15:13',
      waitingEndTime: '10:32:23',
      service: null,
      isServiceUsed: undefined,
      remainingCalls: 2,
    },
  ];

  return (
    <Container>
      {waitingList.reverse().map((completeWaiting, index) => (
        <Card
          key={completeWaiting.waitingNumber}
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
