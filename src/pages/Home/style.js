import styled from "styled-components";

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid var(--off);

  width: 330px;
  height: 40px;

  margin: 10px auto;

  padding: 10px;
  input {
    padding: 10px;
    width: 70%;
    height: 38px;

    font-size: 0.7rem;
    color: var(--secondary);
  }

  svg {
    width: 15px;
    height: 15px;
    color: var(--secondary);
  }
`;

