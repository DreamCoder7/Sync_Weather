import styled from "styled-components";

export const Dashboard = styled.main`
  position: absolute;
  right: 0;
  width: 85%;
  padding: 0 5rem;
  padding-bottom: 2rem;

  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 6rem;
`;

export const MainNav = styled.nav`
  grid-column: 1 / -1;
  padding: 2rem 0;
  padding-right: 2rem;

  display: flex;
  justify-content: space-between;
`;

export const Location = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  p {
    font-size: 1.8rem;
    color: ${(props) =>
      props.theme == "light"
        ? "var(--dark-gray--color)"
        : "var(--light--mode)"};
  }
`;

export const LocationIcon = styled.img`
  width: 2.4rem;
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 1.6rem;
`;

export const UserInfoIcon = styled.img`
  cursor: pointer;
`;

export const Rain = styled.aside`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

export const RainTitle = styled.h4`
  grid-column: 1 / -1;
  font-size: 2.4rem;
  color: ${(props) =>
    props.theme == "light" ? "var(--dark-gray--color)" : "var(--light--mode)"};
`;

export const RainList = styled.ul`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  li {
    list-style: none;
  }
`;

export const RainProgress = styled.div`
  grid-column: 2/ -1;

  ul {
    display: flex;
    justify-content: space-between;

    li {
      list-style: none;
    }
  }
`;

export const Time = styled.p`
  position: relative;

  ::before {
    content: "";
    width: 8px;
    // TEMP (find better implmentation)
    height: ${(props) =>
      props.height == 5
        ? "5rem"
        : props.height == 8
        ? "8rem"
        : props.height == 6
        ? "5rem"
        : props.height == 12
        ? "12rem"
        : "14rem"};
    background-color: var(--color-primary);
    border-radius: 1rem;

    position: absolute;
    bottom: 2rem;
    left: 1rem;
  }
`;

export const OtherInfo = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const OtherInfoNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const OtherInfoTitle = styled.h4`
  font-size: 2rem;
  color: ${(props) =>
    props.theme == "light" ? "var(--dark-gray--color)" : "var(--light--mode)"};
`;

export const OtherInfoBtn = styled.button`
  all: unset;
  font-size: 1.6rem;
  color: ${(props) =>
    props.theme == "light"
      ? "var(--color-primary-dark)"
      : "var(--light--mode)"};
  cursor: pointer;
`;

export const OtherInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const OtherInfoItem = styled.li`
  list-style: none;
  background-color: ${(props) =>
    props.theme === "light" ? "var(--color--white)" : "var(--dark--mode-2)"};
  box-shadow: 2px 3px 4px
    ${(props) =>
      props.theme == "light" ? "var(--color--white)" : "var(--dark--mode-2)"};
  padding: 3.2rem 2rem;
  border-radius: 1.6rem;
  transition: all 0.4s;
`;
