import Card from './CancleCard';
import styled from 'styled-components';

const CancleList = () => {
  const waitingList = [
    {
      waitingNumber: 37,
      totalPerson: 4,
      babyChair: 1,
      kidsUtensils: 2,
      phoneNumber: '010-1234-5678',
      time: '10:10:11',
      waitingEndTime: '10:25:13',

      service: '트러플스트링',
      isServiceUsed: true,
      remainingCalls: 2,
      cancelReason: 1,
      waitingId: 'dsdfw',
    },
    {
      waitingNumber: 38,
      totalPerson: 2,
      babyChair: 0,
      kidsUtensils: 0,
      phoneNumber: '010-1234-9876',
      time: '10:15:13',
      waitingEndTime: '10:35:13',
      service: '음료',
      isServiceUsed: false,
      remainingCalls: 1,
      cancelReason: 1,
      waitingId: 'assdfsdfdasd2',
    },
    {
      waitingNumber: 39,
      totalPerson: 4,
      babyChair: 0,
      kidsUtensils: 1,
      phoneNumber: '010-5678-9876',
      time: '10:15:13',
      waitingEndTime: '10:32:23',
      service: null,
      isServiceUsed: undefined,
      remainingCalls: 0,
      cancelReason: 2,
      waitingId: 'asdasd2',
    },
  ];

  return (
    <Container>
      {waitingList.reverse().map((completeWaiting, index) => (
        <Card
          key={completeWaiting.waitingId}
          order={index + 1}
          {...completeWaiting}
        />
      ))}
    </Container>
  );
};
export default CancleList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
