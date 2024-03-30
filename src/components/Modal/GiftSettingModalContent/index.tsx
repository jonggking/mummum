import { useState } from 'react';
import * as S from './styles';
interface Gift {
  name: string;
  time: number;
}

const GiftManagementModal = () => {
  const [gifts, setGifts] = useState<Gift[]>([
    { name: '음료', time: 20 },
    { name: '타마고산도', time: 40 },
  ]);

  const addGift = () => {
    const newGift = { name: '', time: 0 };
    const updatedGifts = [...gifts, newGift];
    setGifts(updatedGifts);
  };

  const removeGift = (index: number) => {
    const updatedGifts = [...gifts];
    updatedGifts.splice(index, 1);
    setGifts(updatedGifts);
  };

  const updateGiftName = (index: number, newName: string) => {
    const updatedGifts = [...gifts];
    updatedGifts[index].name = newName;
    setGifts(updatedGifts);
  };

  const updateGiftTime = (index: number, newTime: number) => {
    const updatedGifts = [...gifts];
    updatedGifts[index].time = newTime;
    setGifts(updatedGifts);
  };

  return (
    <S.Container>
      <S.GiftList>
        {gifts.map((gift, index) => (
          <S.GiftItem key={index}>
            <span>서비스 {index + 1}</span>
            <span>
              <input
                type='text'
                placeholder='시간'
                value={gift.time !== null ? gift.time : ''}
                onChange={(e) =>
                  updateGiftTime(index, parseInt(e.target.value))
                }
              />
              <span> 분</span>
            </span>
            <input
              type='text'
              placeholder='서비스 이름'
              value={gift.name}
              onChange={(e) => updateGiftName(index, e.target.value)}
            />
            <S.DeleteIcon
              height='28px'
              width='28px'
              onClick={() => removeGift(index)}
            />
          </S.GiftItem>
        ))}
      </S.GiftList>
      <S.AddIcon height='45px' width='45px' onClick={addGift} />
    </S.Container>
  );
};

export default GiftManagementModal;
{
  /* <S.GiftInputWrapper>
        <input
          type='text'
          placeholder='시간'
          value={newGiftTime}
          onChange={(e) => setNewGiftTime(e.target.value)}
        />
        분 :
        <input
          type='text'
          placeholder='서비스 이름'
          value={newGiftName}
          onChange={(e) => setNewGiftName(e.target.value)}
        />
      </S.GiftInputWrapper> */
} // if (newGiftName && newGiftTime) {
//   setGifts([...gifts, { name: newGiftName, time: newGiftTime }]);
//   setNewGiftName('');
//   setNewGiftTime('');
// }
