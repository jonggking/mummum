import * as S from './styles';
import Button from '../../../components/Button';
import Tag from '../../../components/Tag';
import { savedWaitingUser } from '@types/waiting';
import { CheckmarkSharp, CloseSharp } from 'react-ionicons';

const Card: React.FC<savedWaitingUser> = ({
  order,
  waitingNumber,
  totalPerson,
  babyChair,
  kidsUtensils,
  phoneNumber,
  time,
  service,
  remainingCalls,
  isDeferred,
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
            <S.TimeIcon color='gray' /> {time}
            <S.RedText>(19분 대기)</S.RedText>
            {isDeferred && <Tag title={'미루기1회'} color={'RED'} />}
          </S.Time>
          {service !== null && (
            <S.Service>
              <S.ServiceIcon color='gray' /> {service}
            </S.Service>
          )}
        </div>
      </S.Information>
      <S.ButtonContainer>
        <Button
          text={`호출 (${2 - remainingCalls}/2)`}
          color='BLUE'
          isLoading={false}
          disabled={remainingCalls === 0}
        />
        <Button
          text='착석'
          color='TEAL'
          // icon={<CheckmarkSharp />}
          isLoading={false}
        />
        <Button
          text='취소'
          color='RED'
          // icon={<CloseSharp />}
          isLoading={false}
        />
      </S.ButtonContainer>
    </S.Container>
  );
};
export default Card;
