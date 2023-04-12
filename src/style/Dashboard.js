import styled from "styled-components";

export const Dashboard = styled.main`
  position: fixed;
  right: 0;
  width: 85%;
`;

export const MainNav = styled.nav`
  padding: 2rem;

  display: flex;
  justify-content: space-between;
`;

export const Location = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  p {
    font-size: 1.8rem;
    color: var(--light--mode);
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
