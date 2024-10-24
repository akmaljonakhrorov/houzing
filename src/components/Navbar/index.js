import styled from "styled-components";
import { ReactComponent as logoImg } from "../../assets/icons/logo.svg";
import { NavLink } from "react-router-dom";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Main = styled.div`
  display: flex;
  justify-content: center;
  background: var(--colorPrimary);
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  height: 64px;
  padding: var(--padding);
  font-size: 16px;
  width: 100%;
  max-width: 1440px;
`;
const Section = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ $logo }) => $logo && "pointer"};
  .active {
    color: #bae587;
  }
`;
const Logo = styled(logoImg)`
  margin-right: 12px;
  width: 28px;
  & path {
    fill: white;
  }
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: white;
  padding: 0 32px;
`;
export { Container, Wrapper, Section, Logo, Link, Main };
