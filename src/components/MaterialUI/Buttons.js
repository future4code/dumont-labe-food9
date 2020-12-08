import styled from "styled-components";

export const Button = styled.button`
  min-width: 300px;
  height: 40px;

  font-size: 1rem;
  font-weight: bold;
  background: var(--main);
  border: none;
  border-radius: 5px;
  margin: 0 10px;

  &:hover {
    border: 2px solid var(--main);
    background: var(--bg);
    transform: scale(0.98, 0.98);
    transition: transform ease-in-out 0.2s;
    color: var(--main);
  }
`;
