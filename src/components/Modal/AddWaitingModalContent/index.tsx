import { useState } from 'react';
import { post } from '@lib/axios';
import { useWaitingListStore } from '@store/waitingStore';
import ConfirmModal from '@components/Modal/ConfirmModal';
import { WaitingUserInput } from 'types/waiting';
import * as S from './styles';
import Button from '@components/Button';

const AddWaitingModalContent: React.FC = () => {
  const [formData, setFormData] = useState<WaitingUserInput>({
    personCount: 2,
    toddlerChairCount: 0,
    childrenTablewareCount: 0,
    phoneNumber: '010',
  });
  const [isSaveConfirmModalOpen, setIsSaveConfirmModalOpen] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState<string>('');
  const getAllWaitingList = useWaitingListStore(
    (state) => state.getAllWaitingList
  );

  const handleSubmit = async () => {
    if (
      formData.phoneNumber.length !== 11 ||
      !/^\d+$/.test(formData.phoneNumber)
    ) {
      setPhoneNumberError('01012345678 형식으로 숫자만 입력하세요.');
      return;
    }
    try {
      const res = await post<WaitingUserInput>('/api/v1/waiting', {
        phone1: '010',
        phone2: formData.phoneNumber.slice(3, 7),
        phone3: formData.phoneNumber.slice(7, 11),
        personCount: formData.personCount,
        toddlerChairCount: formData.childrenTablewareCount,
        childrenTablewareCount: formData.toddlerChairCount,
      });
      if (res.status === 200) {
        setIsSaveConfirmModalOpen(true);
        getAllWaitingList();
      }
      return res.data;
    } catch (error) {
      console.log('저장오류');
    }
  };

  return (
    <>
      <S.Container onSubmit={(e) => e.preventDefault()}>
        <S.InputRow>
          <S.Label>전화번호</S.Label>
          <S.InputErrorBox>
            <S.Input
              type='text'
              placeholder='전화번호를 입력하세요'
              value={formData.phoneNumber}
              onChange={(e) => {
                setFormData({ ...formData, phoneNumber: e.target.value });
                setPhoneNumberError('');
              }}
              error={phoneNumberError}
            />
            {phoneNumberError && (
              <S.ErrorMessage>{phoneNumberError}</S.ErrorMessage>
            )}
          </S.InputErrorBox>
        </S.InputRow>
        <S.InputRow>
          <S.Label>총인원</S.Label>
          <S.InputErrorBox>
            <S.Input
              type='number'
              min={1}
              placeholder='총인원을 입력하세요'
              value={formData.personCount}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  personCount: Number(e.target.value),
                })
              }
            />
          </S.InputErrorBox>
        </S.InputRow>
        <S.InputRow>
          <S.Label>어린이식기</S.Label>
          <S.InputErrorBox>
            <S.Input
              type='number'
              min={0}
              value={formData.childrenTablewareCount}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  childrenTablewareCount: Number(e.target.value),
                })
              }
            />
          </S.InputErrorBox>
        </S.InputRow>
        <S.InputRow>
          <S.Label>유아용그릇</S.Label>
          <S.InputErrorBox>
            <S.Input
              type='number'
              min={0}
              value={formData.toddlerChairCount}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  toddlerChairCount: Number(e.target.value),
                })
              }
            />
          </S.InputErrorBox>
        </S.InputRow>
        <S.Footer>
          <Button text='저장하기' onClick={handleSubmit} />
        </S.Footer>
        <ConfirmModal
          isOpen={isSaveConfirmModalOpen}
          onConfirm={() => {
            setIsSaveConfirmModalOpen(false);
            setFormData({
              personCount: 0,
              toddlerChairCount: 0,
              childrenTablewareCount: 0,
              phoneNumber: '010',
            });
          }}
          buttonName='확인'
        >
          웨이팅이 등록되었습니다.
        </ConfirmModal>
      </S.Container>
    </>
  );
};

export default AddWaitingModalContent;
