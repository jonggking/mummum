import * as S from './styles';
import Button from '../../../components/Button';
import { CmsWaitingData } from 'types/waiting';
import formatPhoneNumber from '@utils/formatPhoneNumber';
import getTimeFromCreatedAt from '@utils/getTimeFromCreatedAt';

type CancelProps = CmsWaitingData & {
  order: number;
};

const Card: React.FC<CancelProps> = ({
  order,
  waitingNumber,
  personCount,
  toddlerChairCount,
  childrenTablewareCount,
  phoneNumber,
  createdAt,
  callCount,
  waitingTimeMinute,
  // cancelReason,
}) => {
  const time = getTimeFromCreatedAt(createdAt);
  const formattedPhoneNumber = formatPhoneNumber(phoneNumber);

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
            <li key='peopleCount'>총 {personCount}명</li>

            {childrenTablewareCount !== 0 && (
              <li key='childrenTablewareCount'>
                어린이식기 {childrenTablewareCount}개
              </li>
            )}
            {toddlerChairCount !== 0 && (
              <li key='kidsChairs'>아기의자 {toddlerChairCount}개</li>
            )}
          </S.People>
          <S.Phone>
            <S.CallIcon color='gray' /> {formattedPhoneNumber}
          </S.Phone>
          <S.Time>
            <S.TimeIcon color='gray' /> {time} ~ {'취소 시간'}
            <S.totalWaitingTime>
              ({waitingTimeMinute}분 대기)
            </S.totalWaitingTime>
          </S.Time>
          <S.Cancel>
            {/* {cancelReason === 1 ? ' 고객취소' : ' 자동취소 (호출 미응답)'} */}
          </S.Cancel>
        </div>
      </S.Information>
      <S.ButtonContainer>
        <Button
          text={`호출 (${callCount}/1)`}
          color='BLUE'
          isLoading={false}
          disabled={true}
        />
      </S.ButtonContainer>
    </S.Container>
  );
};
export default Card;
