import * as S from './styles';
import Button from '../../../components/Button';
// import Tag from '../../../components/Tag';
import { CmsWaitingData } from 'types/waiting';
import formatPhoneNumber from '@utils/formatPhoneNumber';
import getTimeFromCreatedAt from '@utils/getTimeFromCreatedAt';

type CompletedProps = CmsWaitingData & {
  order: number;
};

const Card: React.FC<CompletedProps> = ({
  order,
  waitingNumber,
  personCount,
  toddlerChairCount,
  childrenTablewareCount,
  phoneNumber,
  createdAt,
  waitingTimeMinute,
  // service,
  // isServiceUsed,
  callCount,
  callList,
}) => {
  const time = getTimeFromCreatedAt(createdAt);
  const formattedPhoneNumber = formatPhoneNumber(phoneNumber);

  const getWaitingTime = (
    createdAt: string,
    callList: string[] | undefined
  ): number => {
    if (!callList || callList.length === 0) return 0;

    const startTime = new Date(createdAt);
    const callTime = new Date(callList[0]);
    const diffInMilliseconds = callTime.getTime() - startTime.getTime();
    const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));

    return diffInMinutes;
  };

  const waitingTime = getWaitingTime(createdAt, callList);

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
            <S.TimeIcon color='gray' /> {time} ~
            {callList && getTimeFromCreatedAt(callList[0])}
            <S.RedText>({waitingTime}분 대기)</S.RedText>
          </S.Time>
          {/* {service !== null && (
            <S.Service>
              <S.ServiceIcon color='gray' />
              <S.ServiceName>{service}</S.ServiceName>
              {isServiceUsed && <Tag title={'사용완료'} />}
            </S.Service>
          )} */}
        </div>
      </S.Information>
      <S.ButtonContainer>
        {/* {service !== null && (
          <Button
            text='서비스 사용'
            color='YELLOW'
            isLoading={false}
            disabled={isServiceUsed}
          />
        )} */}
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
