import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, Section, Wrapper, Logo, Link, Main } from "./index";
import { navbar } from "../../utils/navbar";
export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Main>
        <Wrapper>
          <Section onClick={() => navigate("/home")} $logo="true">
            <Logo /> <h3>houzing</h3>
          </Section>
          <Section className={({ isActive }) => isActive && "active"}>
            {navbar.map(({ title, path }, index) => {
              return (
                <Link key={index} to={path}>
                  {title}
                </Link>
              );
            })}
          </Section>
          <Section>
            <button>Sign in</button>
          </Section>
        </Wrapper>
      </Main>

      <Outlet />
    </Container>
  );
};
export default Navbar;
