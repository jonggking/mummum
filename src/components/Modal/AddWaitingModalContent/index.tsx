import { useState } from 'react';
import { post } from '@lib/axios';
import { WaitingUserInput } from 'types/waiting';
import * as S from './styles';
import Button from '@components/Button';

const AddWaitingModalContent: React.FC = () => {
  const [formData, setFormData] = useState<WaitingUserInput>({
    totalPerson: 0,
    babyChair: 0,
    kidsUtensils: 0,
    phoneNumber: '010',
  });

  const handleSubmit = async () => {
    try {
      const res = await post<WaitingUserInput>('/api/v1/waiting', {
        phone1: '010',
        phone2: formData.phoneNumber.slice(3, 7),
        phone3: formData.phoneNumber.slice(7, 11),
        personCount: formData.totalPerson,
        toddlerChairCount: formData.kidsUtensils,
        childrenTablewareCount: formData.babyChair,
      });
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
          <S.Input
            type='text'
            placeholder='전화번호를 입력하세요'
            value={formData.phoneNumber}
            onChange={(e) =>
              setFormData({ ...formData, phoneNumber: e.target.value })
            }
          />
        </S.InputRow>
        <S.InputRow>
          <S.Label>총인원</S.Label>
          <S.Input
            type='number'
            placeholder='총인원을 입력하세요'
            value={formData.totalPerson}
            onChange={(e) =>
              setFormData({ ...formData, totalPerson: Number(e.target.value) })
            }
          />
        </S.InputRow>
        <S.InputRow>
          <S.Label>어린이식기</S.Label>
          <S.Input
            type='number'
            value={formData.kidsUtensils}
            onChange={(e) =>
              setFormData({ ...formData, kidsUtensils: Number(e.target.value) })
            }
          />
        </S.InputRow>
        <S.InputRow>
          <S.Label>유아용그릇</S.Label>
          <S.Input
            type='number'
            value={formData.babyChair}
            onChange={(e) =>
              setFormData({ ...formData, babyChair: Number(e.target.value) })
            }
          />
        </S.InputRow>
        <S.Footer>
          <Button text='저장하기' onClick={handleSubmit} />
        </S.Footer>
      </S.Container>
    </>
  );
};

export default AddWaitingModalContent;
