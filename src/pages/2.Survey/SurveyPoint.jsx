import { styled, css } from "styled-components";
import * as C from "../../components/SurveyComponents";
import * as B from "../../components/BottomSheet";
import Warning from "../../assets/images/dwarning.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SurveyPoint() {
  let [point, setPoint] = useState(0);
  const [showBottom, setBottom] = useState(false);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleSubmit = () => {
    navigate("/surveyview2");
  };

  const confirmPoint = (value) => {
    setPoint(value * 10);
  };

  const clickNext = () => {
    setBottom(true);
  };

  const clickCancel = () => {
    setBottom(false);
  };

  return (
    <>
      <C.TitleWrapper>
        <BackBtn onClick={handleBack}></BackBtn>
        <C.Title>설문조사 등록</C.Title>
        <ThisNextSmallButton
          disabled={point === 0}
          onClick={clickNext}
        >
          <C.SmallButtonText>다음</C.SmallButtonText>
        </ThisNextSmallButton>
      </C.TitleWrapper>
      <ProcessTitle>기간별 사용 포인트 선택</ProcessTitle>
      <B.ProcessExplain>
        기간별 최대 시간이 되면, 게시물이 자동 삭제됩니다.
        <br /> 1일 = 24시간 기준
      </B.ProcessExplain>
      <ButtonWrapper>
        {[1, 2, 3, 4, 5, 6, 7].map((day) => (
          <DayButton
            key={day}
            onClick={() => confirmPoint(day)}
            value={day}
          >
            <DayButtonText>{day}일</DayButtonText>
          </DayButton>
        ))}
        {showBottom && (
          <PointBottom
            onCancel={clickCancel}
            point={point}
            handleSubmit={handleSubmit}
          />
        )}
        <SizedBox />
      </ButtonWrapper>
      <B.InputLabel>사용포인트</B.InputLabel>
      <NotifyBox>
        <DayButtonText>{point} POINT</DayButtonText>
      </NotifyBox>
      <SizedBox />
      <B.InputLabel>설문 대상 기간</B.InputLabel>
      <NotifyBox>
        <TermText>0000년 00월 00일 ~ 0000년 00월 00일</TermText>
      </NotifyBox>
    </>
  );
}

//설문등록 확인 바텀시트
function PointBottom({ onCancel, point, handleSubmit }) {
  return (
    <>
      <B.BackgroundBottomSheet>
        <B.BottomSheetWrapper>
          <B.BottomSheetInfo>
            <B.InputLabel>설문등록 확인</B.InputLabel>
            <B.ProcessExplain>
              {point}포인트를 사용하여 <br />
              설문을 등록하시겠습니까?
            </B.ProcessExplain>
            <img
              src={Warning}
              alt='warning'
            />
          </B.BottomSheetInfo>
          <B.BottomButtonWrapper>
            <B.CancelButton onClick={onCancel}>
              <C.ButtonText>취소</C.ButtonText>
            </B.CancelButton>
            <B.ConfirmButton>
              <C.ButtonText onClick={handleSubmit}>등록</C.ButtonText>
            </B.ConfirmButton>
          </B.BottomButtonWrapper>
        </B.BottomSheetWrapper>
      </B.BackgroundBottomSheet>
    </>
  );
}

const BackBtn = styled.button`
  background: url("src/assets/images/dicon_back.svg") no-repeat;
  width: 24px;
  height: 24px;
  border: none;
  position: absolute;
  left: 5vw;
`;
const ThisNextSmallButton = styled(C.NextSmallButton)`
  position: absolute;
  right: 5vw;
  cursor: pointer;
  ${(props) =>
    props.disabled &&
    css`
      background-color: #d9d9d9;
      pointer-events: none;
    `}
`;

//설문조사 등록 페이지 스타일 컴포넌트
const TitleWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 10vh;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  background: var(--white, #fff);
  box-shadow: 0px 2px 11px 0px rgba(0, 0, 0, 0.1);
`;

const BackButton = styled.div`
  display: flex;
  cursor: pointer;
`;

const ProcessTitle = styled.p`
  color: #6046ff;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  margin: 2vh 0;
`;

const ProcessExplain = styled.p`
  color: #000;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 2vh 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`;

const DayButton = styled.button`
  width: 65px;
  height: 65px;
  border-radius: 70%;
  background-color: #efedff;
  border: none;
  cursor: pointer;
  filter: drop-shadow(0px 2px 11px rgba(0, 0, 0, 0.2));
  &:hover {
    background-color: #6046ff;
    color: #efedff;
  }
`;

const DayButtonText = styled.p`
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;

const NotifyBox = styled.div`
  width: 90vw;
  height: 5vh;
  border-radius: 10px;
  border: 2px solid #cfc8ff;
  background: var(--white, #fff);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1vh 0;
`;

const TermText = styled.p`
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

const SizedBox = styled.div`
  width: 90vw;
  height: 3vh;
`;
