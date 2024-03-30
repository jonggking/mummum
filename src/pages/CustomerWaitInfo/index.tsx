import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { get, del } from '@lib/axios';
import ConfirmModal from '@components/Modal/ConfirmModal';
import YesNoModal from '@components/Modal/YesNoModal/YesNoModal';
import Tag from '@components/Tag';
import { MobileWaitingData } from 'types/waiting';
import { SuccessResponse, DeleteResponse } from 'types/response';
import getTimeFromCreatedAt from '@utils/getTimeFromCreatedAt';
import * as S from './styles';

const CustomerWaitInfo = () => {
  const [state, setState] = useState<number>(10);
  const [waitingData, setWaitingData] = useState<MobileWaitingData | null>(
    null
  );
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [submissionDateTime, setSubmissionDateTime] = useState('');
  // const [isDeferredOrderModalOpen, setIsDeferredOrderModalOpen] =
  // useState(false);
  const [isCancalConfirmModalOpen, setIsCancalConfirmModalOpen] =
    useState(false);
  const { waitingId } = useParams();
  const fommatedSubmissionDateTime = (createdAt: string) => {
    const date = createdAt.slice(0, 10);
    const time = getTimeFromCreatedAt(createdAt);
    const formattedDateTime = `${date} ${time}`;
    setSubmissionDateTime(formattedDateTime);
  };

  const getData = async () => {
    try {
      const res = await get<SuccessResponse<MobileWaitingData>>(
        `/api/v1/waiting/${waitingId}`
      );
      setWaitingData(res.data.data);
      if (res.data.data.frontWaitingNumber <= 3) {
        setState(50);
      }
      if (res.data.data.callList && res.data.data.callList.length >= 1) {
        setState(100);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const cancelWaiting = async () => {
    try {
      const res = await del<DeleteResponse>(`/api/v1/waiting/${waitingId}`);

      if (res.status === 200) {
        setIsCancelModalOpen(false);
        setIsCancalConfirmModalOpen(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [waitingId]);

  useEffect(() => {
    if (waitingData == null) {
      return;
    }
    fommatedSubmissionDateTime(waitingData.createdAt);
  }, [waitingData]);

  return (
    <S.Container>
      <S.Inner>
        <S.EntranceStatusSection>
          <S.TagIconContainer>
            {state === 10 && <Tag title='입장대기' color='BLUE' size='s'></Tag>}
            {state === 50 && (
              <Tag title='입장임박' color='YELLOW' size='s'></Tag>
            )}
            {state === 100 && (
              <Tag title='호출완료' color='TEAL' size='s'></Tag>
            )}
            <S.RefreshIcon onClick={() => getData()} />
          </S.TagIconContainer>
          <S.StoreName>뭄뭄</S.StoreName>
          <S.RegistrationDateTime>
            접수 일시 {submissionDateTime}
          </S.RegistrationDateTime>
          <S.GaugeContainer>
            <S.GaugeSection>
              <S.Background />
              <S.Bar className={`state-${state}`} />
            </S.GaugeSection>
            <S.TagSection>
              <div className={state === 10 ? 'selected' : ''}>입장대기</div>
              <div className={state === 50 ? 'selected' : ''}>입장임박</div>
              <div className={state === 100 ? 'selected' : ''}>호출완료</div>
            </S.TagSection>
          </S.GaugeContainer>
        </S.EntranceStatusSection>
        <S.Divider />
        <S.DetailsSection>
          <S.MainNotice>
            <div>내 앞 대기</div>
            <div>{waitingData?.frontWaitingNumber}팀</div>
          </S.MainNotice>
          <S.SlimDivider />
          <S.DetailNotice>
            <S.Detail>
              <div>웨이팅번호</div>
              <div>{waitingData?.waitingNumber}번</div>
            </S.Detail>
            <S.Detail>
              <div>총인원</div>
              <div>{waitingData?.personCount}명</div>
            </S.Detail>
            <S.Detail>
              <div>어린이식기</div>
              <div>{waitingData?.childrenTablewareCount}개</div>
            </S.Detail>
            <S.Detail>
              <div>아기의자</div>
              <div>{waitingData?.toddlerChairCount}개</div>
            </S.Detail>
            <S.Detail>
              <div>대기시간</div>
              <div>{waitingData?.waitingNumber}분</div>
            </S.Detail>
          </S.DetailNotice>
        </S.DetailsSection>
        <S.Divider />
        <S.NoticeSection>
          <S.Title>유의사항</S.Title>
          <S.Content>
            <li>
              호출 알림톡을 받고 5분 동안 미입장 시 자동 취소됩니다.
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
        <button onClick={() => setIsCancelModalOpen(true)}>웨이팅 취소</button>
        {/* <button
        // onClick={() => setIsDeferredOrderModalOpen(true)}
        >
          맨 뒤로 미루기
        </button> */}
      </S.Buttons>
      <YesNoModal
        title='웨이팅 취소'
        isOpen={isCancelModalOpen}
        onClose={() => setIsCancelModalOpen(false)}
        onConfirm={cancelWaiting}
        buttonName='웨이팅취소'
      >
        웨이팅을 취소하시겠습니까?
      </YesNoModal>
      {/* <YesNoModal
        title='대기 미루기'
        isOpen={isDeferredOrderModalOpen}
        onClose={() => setIsDeferredOrderModalOpen(false)}
        buttonName='미루기'
      >
        대기 순서를 맨 뒤로 미루시겠습니까?
      </YesNoModal> */}
      <ConfirmModal
        isOpen={isCancalConfirmModalOpen}
        onConfirm={() => {
          setIsCancalConfirmModalOpen(false);
          window.location.href =
            'https://map.naver.com/p/entry/place/1424835754?lng=127.0439288&lat=37.2474008&placePath=%2Fhome&searchType=place';
        }}
        buttonName='확인'
      >
        웨이팅이 성공적으로 취소되었습니다.
      </ConfirmModal>
    </S.Container>
  );
};

export default CustomerWaitInfo;
