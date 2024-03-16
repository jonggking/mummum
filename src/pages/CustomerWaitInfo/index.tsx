import { useState } from 'react';
import YesNoModal from '../../components/Modal/YesNoModalFrame';
import Tag from '../../components/Tag';
import * as S from './styles';

const CustomerWaitInfo = () => {
  const state = 50;
  const [isCancleModalOpen, setIsCancleModalOpen] = useState(false);
  const [isDeferredOrderModalOpen, setIsDeferredOrderModalOpen] =
    useState(false);

  return (
    <S.Container>
      <S.Inner>
        <S.EntranceStatusSection>
          <S.TagIconContainer>
            <Tag title='입장임박' color='YELLOW' size='s'></Tag>
            <S.RefreshIcon />
          </S.TagIconContainer>
          <S.StoreName>뭄뭄</S.StoreName>
          <S.RegistrationDateTime>
            접수 일시 2024.01.01 18:32
          </S.RegistrationDateTime>
          <S.GaugeContainer>
            <S.GaugeSection>
              <S.Background />
              <S.Bar className={`state-${state}`} />
            </S.GaugeSection>
            <S.TagSection>
              <div>입장대기</div>
              <div className='selected'>입장임박</div>
              <div>입장완료</div>
            </S.TagSection>
          </S.GaugeContainer>
        </S.EntranceStatusSection>
        <S.Divider />
        <S.DetailsSection>
          <S.MainNotice>
            <div>내 앞 대기</div>
            <div>2팀</div>
          </S.MainNotice>
          <S.SlimDivider />
          <S.DetailNotice>
            <S.Detail>
              <div>웨이팅번호</div>
              <div>12번</div>
            </S.Detail>
            <S.Detail>
              <div>총인원</div>
              <div>4명</div>
            </S.Detail>
            <S.Detail>
              <div>어린이식기</div>
              <div>1개</div>
            </S.Detail>
            <S.Detail>
              <div>아기의자</div>
              <div>2개</div>
            </S.Detail>
            <S.Detail>
              <div>대기시간</div>
              <div>15분</div>
            </S.Detail>
          </S.DetailNotice>
        </S.DetailsSection>
        <S.Divider />
        <S.NoticeSection>
          <S.Title>유의사항</S.Title>
          <S.Content>
            <li>
              호출 알림톡을 받고 5분 동안 미입장 시 재호출 알림톡이 한 번 더
              발송되며, 재호출 5분 이내 미입장시 자동 취소됩니다.
            </li>
            <li>테이블 상황에 따라 2인 대기팀이 선입장할 수 있습니다.</li>
            <li>
              예상 대기 시간은 추정시간으로 실제와 오차가 있을 수 있습니다.
            </li>
            <li>가게 사정에 따라 품절된 메뉴가 있을 수 있습니다.</li>
          </S.Content>
        </S.NoticeSection>
      </S.Inner>
      <S.Buttons>
        <button onClick={() => setIsCancleModalOpen(true)}>웨이팅 취소</button>
        <button onClick={() => setIsDeferredOrderModalOpen(true)}>
          맨 뒤로 미루기
        </button>
      </S.Buttons>
      <YesNoModal
        title='웨이팅 취소'
        isOpen={isCancleModalOpen}
        onClose={() => setIsCancleModalOpen(false)}
        buttonName='웨이팅취소'
      >
        웨이팅을 취소하시겠습니까?
      </YesNoModal>
      <YesNoModal
        title='대기 미루기'
        isOpen={isDeferredOrderModalOpen}
        onClose={() => setIsDeferredOrderModalOpen(false)}
        buttonName='미루기'
      >
        대기 순서를 맨 뒤로 미루시겠습니까?
      </YesNoModal>
    </S.Container>
  );
};

export default CustomerWaitInfo;
