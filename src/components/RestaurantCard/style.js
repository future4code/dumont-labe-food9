import styled from "styled-components";

export const RestaurantCardContainer = styled.div`
  width: 330px;
  height: 250px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 10px;

  border: 1px solid var(--off);
  border-radius: 20px;
  padding: 5px 10px;

  img {
    width: 100%;
    height: 150px;
    border-radius: 10px;
  }
`;

export const RestaurantInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  div {
    margin-top: 10px;
    width: 100%;
    height: 150px;
  }
  p {
    font-size: 0.8rem;
    width: 150px;
    margin-bottom: 20px;
    color: var(--off);
  }

  h3 {
    font-size: 1rem;
    color: var(--main);
  }
`;
