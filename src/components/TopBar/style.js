import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 5px;
`;

export const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 30px;
  margin-bottom: 10px;
  border-bottom: 1px solid var(--off);
  svg {
    justify-self: flex-end;
  }
`;

export const PhoneDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 320px;
  padding: 0 15px;
  p {
    font-size: 0.5rem;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  p {
    font-size: 0.5rem;
  }

  svg {
    width: 15px;
    height: 15px;
  }
`;
