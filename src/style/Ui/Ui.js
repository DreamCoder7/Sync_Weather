import styled from "styled-components";

export const Toggle = styled.div`
  position: fixed;
  bottom: 4rem;
  right: 4rem;
  z-index: 9;

  width: 4rem;
  height: 4rem;
  cursor: pointer;
  background-color: ${(props) =>
    props.theme === "light" ? "var(--light--mode-3)" : "var(--dark--mode-3)"};
  border-radius: 50%;
  transition: background-color 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.div`
  font-size: 2rem;
  color: var(--color-primary);
`;

export const Search = styled.div`
  position: relative;
`;

export const InputSearch = styled.input`
  padding: 1rem 6rem;
  border: none;
  border-radius: 2rem;

  background-color: var(--dark--mode-2);

  ::placeholder {
    color: var(--light--mode-3);
  }
`;

export const InputIcon = styled.img`
  position: absolute;
  left: 1rem;
  top: 8px;

  width: 2rem;
`;
