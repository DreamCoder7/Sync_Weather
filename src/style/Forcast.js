import styled from "styled-components";

export const Forcast = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const ForcastNav = styled.nav`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 2rem;
    color: ${(props) =>
      props.theme == "light"
        ? "var(--dark-gray--color)"
        : "var(--light--mode)"};
  }

  a {
    text-dicoration: none;
    font-size: 1.4rem;
    color: var(--color-primary-dark);
  }
`;
