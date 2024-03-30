import { useState } from 'react';
import { post, del } from '@lib/axios';
import { useWaitingListStore } from '@store/waitingStore';
import Button from '@components/Button';
// import Tag from '@components/Tag';
import YesNoModal from '@components/Modal/YesNoModal/YesNoModal';
import { CmsWaitingData } from 'types/waiting';
import formatPhoneNumber from '@utils/formatPhoneNumber';
import getTimeFromCreatedAt from '@utils/getTimeFromCreatedAt';
import * as S from './styles';
import ConfirmModal from '@components/Modal/ConfirmModal';
type WaitingProps = CmsWaitingData & {
  order: number;
};

const Card: React.FC<WaitingProps> = ({
  order,
  waitingNumber,
  personCount,
  toddlerChairCount,
  childrenTablewareCount,
  phoneNumber,
  createdAt,
  // service,
  callCount,
  waitingTimeMinute,
  waitingId,
  // isDeferred,
}) => {
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [callCheckModalOpen, setCallCheckModalOpen] = useState(false);
  const [isCallFailModalOpen, setIsCallFailModalOpen] = useState(false);
  const getAllWaitingList = useWaitingListStore(
    (state) => state.getAllWaitingList
  );
  const time = getTimeFromCreatedAt(createdAt);

  const formattedPhoneNumber = formatPhoneNumber(phoneNumber);

  const handleCallButtonClick = () => {
    setIsCallModalOpen(true);
  };

  const handleCancelButtonClick = () => {
    setIsCancelModalOpen(true);
  };

  const handleCallConfirmButtonClick = async () => {
    try {
      const res = await post(`/api/v1/waiting/${waitingId}/call`);
      if (res.status === 200) {
        setIsCallModalOpen(false);
        getAllWaitingList();
      }
      return res.data;
    } catch (error) {
      setIsCallFailModalOpen(true);
    }
  };

  const handleSittingConfirmButtonClick = async () => {
    if (callCount === 0) {
      setCallCheckModalOpen(true);
      return;
    }
    try {
      const res = await post(`/api/v1/waiting/${waitingId}/seat`);
      if (res.status === 200) {
        getAllWaitingList();
      }
      return res.data;
    } catch (error) {
      console.log('착석 오류');
      setIsCallFailModalOpen(true);
    }
  };

  const handleCancelConfirmButtonClick = async () => {
    try {
      const res = await del(`/api/v1/waiting/${waitingId}`);
      if (res.status === 200) {
        setIsCancelModalOpen(false);
        getAllWaitingList();
      }
      return res.data;
    } catch (error) {
      console.log('웨이팅 취소 오류');
      setIsCallFailModalOpen(true);
    }
    setIsCancelModalOpen(false);
  };

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
            <S.TimeIcon color='gray' /> {time}
            <S.RedText>({waitingTimeMinute}분 대기)</S.RedText>
            {/* {isDeferred && <Tag title={'미루기1회'} color={'RED'} />} */}
          </S.Time>
          {/* {service !== null && (
            <S.Service>
              <S.ServiceIcon color='gray' /> {service}
            </S.Service>
          )} */}
        </div>
      </S.Information>
      <S.ButtonContainer>
        <Button
          text={`호출 (${callCount}/1)`}
          color='BLUE'
          isLoading={false}
          disabled={callCount === 1}
          onClick={handleCallButtonClick}
        />
        <Button
          text='착석'
          color='TEAL'
          // icon={<CheckmarkSharp />}
          isLoading={false}
          onClick={handleSittingConfirmButtonClick}
        />
        <Button
          text='취소'
          color='RED'
          // icon={<CloseSharp />}
          isLoading={false}
          onClick={handleCancelButtonClick}
        />
      </S.ButtonContainer>
      <YesNoModal
        title='호출 확인'
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
        onConfirm={handleCallConfirmButtonClick}
        buttonName='고객 호출'
      >
        호출하시겠습니까?
      </YesNoModal>
      <YesNoModal
        title='취소 확인'
        isOpen={isCancelModalOpen}
        onClose={() => setIsCancelModalOpen(false)}
        onConfirm={handleCancelConfirmButtonClick}
        buttonName='웨이팅취소'
      >
        웨이팅을 취소하시겠습니까?
      </YesNoModal>
      <ConfirmModal
        isOpen={callCheckModalOpen}
        onConfirm={() => {
          setCallCheckModalOpen(false);
        }}
        buttonName='확인'
      >
        호출을 먼저 해주세요.
      </ConfirmModal>
      <ConfirmModal
        isOpen={isCallFailModalOpen}
        onConfirm={() => {
          setIsCallFailModalOpen(false);
          getAllWaitingList();
        }}
        buttonName='확인'
      >
        이미 취소한 손님입니다. <br /> 웨이팅 목록을 다시 불러올게요.
      </ConfirmModal>
    </S.Container>
  );
};
export default Card;
