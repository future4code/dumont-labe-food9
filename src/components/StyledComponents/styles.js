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
  height: 100%;

  padding: 10px 10px 40px 10px;
  margin: auto;
  flex-wrap: wrap;
  overflow: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
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

// styled Initial Page
export const ContainerInitial = styled.div`
  background-color: #000000;
  height: 640px;
  width: 360px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
`;

export const Logo = styled.img`
  width: 126px;
  height: 65px;
  cursor: pointer;
  &:hover {
    width: 100px;
    height: 50px;
  }
`;

export const LogoDiv = styled.div`
  margin: 100px auto 0 auto;
  width: 330px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: 300px;
  height: 40px;
  padding: 10px;
  margin-bottom: 10px;

  color: var(--secondary);

  border: 1px solid var(--off);
  border-radius: 10px;

  color: var(--secondary);
  font-size: 0.8rem;
`;
