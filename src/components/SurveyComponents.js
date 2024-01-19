import styled from "styled-components";

export const TitleWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  background: var(--white, #fff);
  box-shadow: 0px 2px 11px 0px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.p`
  color: #000;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
`;
export const NextButton = styled.button`
  border-radius: 5px;
  background: #6046ff;
  color: var(--white, #fff);
  display: flex;
  width: 10vw;
  height: 3vh;
  justify-content: center;
  align-items: center;
  border: none;
  box-shadow: 0px 2px 11px 0px rgba(0, 0, 0, 0.2);
`;

export const ButtonText = styled.p`
  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;