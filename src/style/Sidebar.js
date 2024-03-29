import styled from "styled-components";

export const Sidebar = styled.aside`
  position: fixed;
  left: 0;
  width: 15%;
  height: 100vh;
  color: #fff;
  background-color: ${(props) =>
    props.theme === "light" ? "var(--color--white)" : "var(--dark--mode-2)"};
  transition: background-color 0.4s;
  box-shadow: 2px 3px 4px
    ${(props) =>
      props.theme == "light" ? "var(--color--white)" : "var(--dark--mode-2)"};
  transition: all 0.4s;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 4rem;
`;

export const Nav = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const NavListItem = styled.li`
  list-style: none;

  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const NavLink = styled.a`
  text-decoration: none;
  font-size: 1.4rem;
  color: #374151;
`;

export const NavIcon = styled.img`
  width: 2.8rem;
`;

export const System = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: flex-start;
`;

export const SystemTitle = styled.h6`
  font-size: 2rem;
  color: var(--dark-gray--color);
`;

export const SystemList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

export const SystemListItem = styled.li`
  list-style: none;

  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SystemLink = styled.a`
  text-decoration: none;
  font-size: 1.6rem;
  color: var(--dark-gray--color);
`;

export const SystemIcon = styled.img`
  width: 2.8rem;
`;
