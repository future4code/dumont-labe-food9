import styled from "styled-components";

export const OrderCard = styled.div`
  width: 300px;
  padding: 20px;

  margin: 10px auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border: 1px solid var(--main);
  border-radius: 20px;

  h3 {
    color: var(--main);
  }
`;
