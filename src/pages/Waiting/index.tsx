import { useState } from 'react';
import { useWaitingStore } from '../../store/waitingStore';
import WaitingList from './WaitingList/WaitingList';
import CompleteList from './CompleteList/CompleteList';
import CancleList from './CancleList/CancleList';
import Modal from '../../components/Modal/ModalFrame';
import AddWaitingModalContent from '../../components/Modal/AddWaitingModalContent';
import GiftSettingModalContent from '../../components/Modal/GiftSettingModalContent';
import EstimatedTimeModalContent from '../../components/Modal/EstimatedTimeModalContent';
import NoticeModalContent from '../../components/Modal/NoticeModalContent/GiftSettingModalContent';
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
  const activeTab = useWaitingStore((state) => state.activeTab);
  const setActiveTab = useWaitingStore((state) => state.setActiveTab);
  const [selectedModal, setSelectedModal] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedModal(index);
  };

  const closeModal = () => {
    setSelectedModal(null);
  };

  return (
    <S.Container>
      <S.Header>
        <S.Menu>
          <S.Title>배포 테스트</S.Title>
          <S.IconContainer>
            {modalsData.map((modal, index) => (
              <S.StyledIcon key={index} onClick={() => openModal(index)}>
                {modal.icon}
                <S.Tooltip>{modal.title}</S.Tooltip>
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
          <ChevronBackOutline height='32px' width='32px' />
          <S.Date>2024-01-26</S.Date>
          <ChevronForwardOutline height='32px' width='32px' />
        </S.DateContainer>
        <S.TabsContainer>
          <S.Tab active={activeTab === 0} onClick={() => setActiveTab(0)}>
            대기 {20}
          </S.Tab>
          <S.Tab active={activeTab === 1} onClick={() => setActiveTab(1)}>
            완료 {4}
          </S.Tab>
          <S.Tab active={activeTab === 2} onClick={() => setActiveTab(2)}>
            취소 {1}
          </S.Tab>
        </S.TabsContainer>
        <S.TabBody>
          {activeTab === 0 && <WaitingList />}
          {activeTab === 1 && <CompleteList />}
          {activeTab === 2 && <CancleList />}
        </S.TabBody>
      </S.Main>
    </S.Container>
  );
};
export default Waiting;
