import * as S from './styles';
import Button from '../../../components/Button';
import { savedWaitingUser } from '@types/waiting';

const Card: React.FC<savedWaitingUser> = ({
  order,
  waitingNumber,
  totalPerson,
  babyChair,
  kidsUtensils,
  phoneNumber,
  time,
  waitingEndTime,
  remainingCalls,
  cancelReason,
}) => {
  return (
    <S.Container>
      <S.Information>
        <S.Order>{order}</S.Order>
        <S.WaitingNum>
          대기
          <br />
          {waitingNumber}
        </S.WaitingNum>
        <div>
          <S.People>
            <S.PersonIcon color='gray' />
            <li key='peopleCount'>총 {totalPerson}명</li>

            {kidsUtensils > 0 && (
              <li key='kidsUtensils'>어린이식기 {kidsUtensils}개</li>
            )}
            {babyChair > 0 && <li key='kidsChairs'>아기의자 {babyChair}개</li>}
          </S.People>
          <S.Phone>
            <S.CallIcon color='gray' /> {phoneNumber}
          </S.Phone>
          <S.Time>
            <S.TimeIcon color='gray' /> {time} ~ {waitingEndTime}
            <S.totalWaitingTime>(19분 대기)</S.totalWaitingTime>
          </S.Time>
          <S.Cancle>
            {cancelReason === 1 ? ' 고객취소' : ' 자동취소 (호출 미응답)'}
          </S.Cancle>
        </div>
      </S.Information>
      <S.ButtonContainer>
        <Button
          text={`호출 (${2 - remainingCalls}/2)`}
          color='BLUE'
          isLoading={false}
          disabled={true}
        />
      </S.ButtonContainer>
    </S.Container>
  );
};
export default Card;
