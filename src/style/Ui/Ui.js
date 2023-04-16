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
  color: var(--dark-gray--color);
`;

export const Search = styled.div`
  position: relative;

  input {
    padding: 1rem 6rem;
    border: none;
    border-radius: 2rem;

    background-color: ${(props) =>
      props.theme == "light" ? "var(--color--white)" : "var(--dark--mode-2)"};
    transition: all 0.4s;
    color: ${(props) =>
      props.theme == "light" ? "var(--dark--mode-2)" : "var(--light--mode-2)"};

    ::placeholder {
      color: ${(props) =>
        props.theme == "light"
          ? "var(--dark--mode-2)"
          : "var(--light--mode-2)"};
    }

    :focus {
      outline: none;
    }
  }
`;

export const InputIcon = styled.img`
  position: absolute;
  left: 1rem;
  top: 8px;

  width: 2rem;
`;

export const Day = styled.div``;

export const DayInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  row-gap: 5rem;
  column-gap: 2rem;
  padding-left: 3.2rem;

  p {
    font-size: 3rem;
    color: var(--color-gray);
  }

  > div {
    border-radius: 1rem;
    box-shadow: 0 0 5px
      ${(props) =>
        props.theme == "light" ? "var(--color--white)" : "var(--dark--mode-2)"};
    padding: 1rem;
    transition: all 0.4s;

    display: flex;
    gap: 1.6rem;
    justify-content: space-around;

    div {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  }
`;

export const DayTitle = styled.h5`
  font-size: 1.6rem;
  color: #6b7280;
`;

export const DayIcon = styled.img``;

export const Wind = styled.div``;

export const Pressure = styled.div``;

export const Humidity = styled.div``;

export const Temp = styled.div``;

export const SunRise = styled.div``;

export const SunSet = styled.div``;

export const Map = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const MapNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const MapTitle = styled.h4`
  font-size: 2rem;
  color: ${(props) =>
    props.theme == "light" ? "var(--dark-gray--color)" : "var(--light--mode)"};
`;

export const MapCont = styled.div`
  background-color: ${(props) =>
    props.theme == "light" ? "var(--color--white)" : "var(--dark--mode-2)"};
  border-radius: 1rem;
  box-shadow: 2px 3px 4px
    ${(props) =>
      props.theme == "light" ? "var(--color--white)" : "var(--dark--mode-2)"};
  transition: all 0.4s;

  width: 100%;
  height: 30rem;
`;

export const MapBtn = styled.button`
  all: unset;
  background-color: ${(props) =>
    props.theme == "light" ? "var(--light--mode-2)" : "var(--dark--mode-2)"};
  border-radius: 2rem;
  color: ${(props) =>
    props.theme == "light"
      ? "var(--color-primary-dark)"
      : "var(--light--mode)"};
  font-size: 1.5rem;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all 0.4s;
`;
