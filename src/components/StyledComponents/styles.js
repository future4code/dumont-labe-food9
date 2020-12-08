import styled from "styled-components";

export const Icon = styled.img`
  width: 30px;
  height: 30px;
  color: var(--main);
  border: none;
`;

export const H3 = styled.h3`
  font-size: 1rem;
  justify-self: center;
`;

export const Container = styled.div`
  width: 350px;
  height: 100vh;
  border: 1px solid var(--off);
  padding: 10px;
  margin: auto;
  flex-wrap: wrap;
  overflow: auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px;

  button {
    color: var(--text);
  }
`;