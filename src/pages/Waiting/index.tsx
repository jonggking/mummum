import { useState, useEffect } from 'react';
import { useWaitingTapStore, useWaitingListStore } from '@store/waitingStore';
import WaitingList from './WaitingList/WaitingList';
import CompleteList from './CompleteList/CompleteList';
import CancelList from './CancelList/CancelList';
import Modal from '@components/Modal/ModalFrame';
import AddWaitingModalContent from '@components/Modal/AddWaitingModalContent';
import GiftSettingModalContent from '@components/Modal/GiftSettingModalContent';
import EstimatedTimeModalContent from '@components/Modal/EstimatedTimeModalContent';
import NoticeModalContent from '@components/Modal/NoticeModalContent/GiftSettingModalContent';

import * as S from './styles';
import {
  PersonAddOutline,
  TimeOutline,
  MegaphoneOutline,
  GiftOutline,
  ChevronBackOutline,
  ChevronForwardOutline,
} from 'react-ionicons';

const modalsData = [
  {
    title: '웨이팅 등록',
    content: <AddWaitingModalContent />,
    icon: <PersonAddOutline height='32px' width='32px' />,
  },
  {
    title: '예상대기시간 관리',
    content: <EstimatedTimeModalContent />,
    icon: <TimeOutline height='32px' width='32px' />,
  },
  {
    title: '공지사항 관리',
    content: <NoticeModalContent />,
    icon: <MegaphoneOutline height='32px' width='32px' />,
  },
  {
    title: '서비스 관리',
    content: <GiftSettingModalContent />,
    icon: <GiftOutline height='32px' width='32px' />,
  },
];

const Waiting = () => {
  const activeTab = useWaitingTapStore((state) => state.activeTab);
  const setActiveTab = useWaitingTapStore((state) => state.setActiveTab);
  const selectedDate = useWaitingListStore((state) => state.selectedDate);
  const setSelectedDate = useWaitingListStore((state) => state.setSelectedDate);
  const setSelectedToday = useWaitingListStore(
    (state) => state.setSelectedToday
  );
  const waitingDatas = useWaitingListStore((state) => state.waitingDatas);
  const getAllWaitingList = useWaitingListStore(
    (state) => state.getAllWaitingList
  );
  const [selectedModal, setSelectedModal] = useState<number | null>(null);

  useEffect(() => {
    setSelectedToday();
  }, []);

  useEffect(() => {
    getAllWaitingList();
  }, [selectedDate]);

  // const openModal = (index: number) => {
  //   setSelectedModal(index);
  // };

  const closeModal = () => {
    setSelectedModal(null);
  };

  const handlePrevDayClick = () => {
    if (selectedDate === null) {
      return;
    }
    const currentDate = new Date(selectedDate);
    currentDate.setDate(currentDate.getDate() - 1);
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    setSelectedDate(formattedDate);
  };

  const handleNextDayClick = () => {
    if (selectedDate === null) {
      return;
    }
    const currentDate = new Date(selectedDate);
    currentDate.setDate(currentDate.getDate() + 1);
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    setSelectedDate(formattedDate);
  };

  return (
    <S.Container>
      <S.Header>
        <S.Menu>
          <S.Title onClick={() => window.location.reload()}>
            웨이팅 목록
          </S.Title>
          <S.IconContainer>
            {modalsData.map((modal, index) => (
              <S.StyledIcon
                key={index}
                // onClick={() => openModal(index)}
                style={{ cursor: 'not-allowed' }}
              >
                {modal.icon}
                <S.Tooltip>
                  {modal.title}
                  <br />
                  {'아직 기능 안됨'}
                </S.Tooltip>
              </S.StyledIcon>
            ))}
            {selectedModal !== null && (
              <Modal
                title={modalsData[selectedModal].title}
                isOpen={true}
                onClose={closeModal}
              >
                {modalsData[selectedModal].content}
              </Modal>
            )}
          </S.IconContainer>
        </S.Menu>
      </S.Header>

      <S.Main>
        <S.DateContainer>
          <ChevronBackOutline
            height='32px'
            width='32px'
            onClick={handlePrevDayClick}
            style={{ cursor: 'pointer' }}
          />
          <S.Date>{selectedDate}</S.Date>
          <ChevronForwardOutline
            height='32px'
            width='32px'
            onClick={handleNextDayClick}
            style={{ cursor: 'pointer' }}
          />
        </S.DateContainer>
        <S.TabsContainer>
          <S.Tab active={activeTab === 0} onClick={() => setActiveTab(0)}>
            대기
            {waitingDatas?.WAITING?.length ? waitingDatas?.WAITING?.length : 0}
          </S.Tab>
          <S.Tab active={activeTab === 1} onClick={() => setActiveTab(1)}>
            완료
            {waitingDatas?.FINISHED?.length
              ? waitingDatas?.FINISHED?.length
              : 0}
          </S.Tab>
          <S.Tab active={activeTab === 2} onClick={() => setActiveTab(2)}>
            취소
            {waitingDatas?.CANCELED?.length
              ? waitingDatas?.CANCELED?.length
              : 0}
          </S.Tab>
        </S.TabsContainer>
        <S.TabBody>
          {waitingDatas && waitingDatas.WAITING && activeTab === 0 && (
            <WaitingList datas={waitingDatas.WAITING} />
          )}
          {waitingDatas && waitingDatas.FINISHED && activeTab === 1 && (
            <CompleteList datas={waitingDatas.FINISHED} />
          )}
          {waitingDatas && waitingDatas.CANCELED && activeTab === 2 && (
            <CancelList datas={waitingDatas.CANCELED} />
          )}
        </S.TabBody>
      </S.Main>
    </S.Container>
  );
};
export default Waiting;
