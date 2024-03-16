import * as S from './styles';

const EstimatedTimeModalContent = () => {
  return (
    <S.Container>
      <S.TimeAnalysisContainer>
        <S.TitleBox>
          <S.Title>시간분석</S.Title>
          <S.DatePickerContainer>
            <S.CalendarIcon />
            <p>24.02.02 - 24.02.02</p>
          </S.DatePickerContainer>
        </S.TitleBox>
        <S.Box>
          <div>
            <p>평균 웨이팅 시간</p>
            <span>{15}</span> 분
          </div>
          <div>
            <p>가장 짧은 웨이팅 시간</p>
            <span>{3}</span> 분
          </div>
          <div>
            <p>가장 오래걸린 웨이팅 시간</p>
            <span>{40}</span> 분
          </div>
        </S.Box>
      </S.TimeAnalysisContainer>
      {/* <S.InputContainer> */}
        <div>
          <S.InputRow>
            <S.Label>최소시간</S.Label>
            <S.Input type='number' placeholder='' value={5} />
          </S.InputRow>
          <S.InputRow>
            <S.Label>최대시간</S.Label>
            <S.Input type='number' placeholder='' value={60} />
          </S.InputRow>
          <S.InputRow>
            <S.Label>테이블당 웨이팅</S.Label>
            <S.Input type='number' value={10} />
          </S.InputRow>
        </div>
        {/* <div>
          *예상 대기시간: 테이블당 웨이팅 X 대기팀수 <br />
          *예상 대기시간이 최소시간보다 작으면 최소시간, 최대시간보다 크면
          최대시간으로 안내됩니다.<br/>
        </div> */}
      {/* </S.InputContainer> */}
    </S.Container>
  );
};

export default EstimatedTimeModalContent;
