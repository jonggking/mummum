// import { useState } from 'react';
import * as S from './styles';

const NoticeModalContent = () => {
  // const [noticeText, setNoticeText] = useState(
  //   '- 품절 메뉴: 멘타이코 파스타\n- 단체 손님의 경우에는 매장에 직접 문의해주세요.\n'
  // );
  // const handleTextChange = (e: ) => {
  //   setNoticeText(e.target.value);
  // };

  // const handleSave = () => {
  //   const formattedNoticeText = noticeText.replace(/\n/g, '<br>');
  // };

  return (
    <S.Container>
      <S.TextArea />
      <S.FixedNotice>
        - 대기 손님을 위해 대기 시간에 따라 서비스를 제공해드려요.
        <br />
        &nbsp;&nbsp;(20분: 랜덤 음료, 40분: 타마고산도 2p)
        <br />- 호출 알림톡을 받고 8분 동안 미입장 시, 자동취소됩니다.
      </S.FixedNotice>
    </S.Container>
  );
};

export default NoticeModalContent;
