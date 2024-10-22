import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, Section, Wrapper, Logo, Link, Main } from "./index";
import { navbar } from "../../utils/navbar";
import Button from "../Generics/Button";
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
            {navbar.map(({ title, path, hidden }, index) => {
              return (
                !hidden && (
                  <Link key={index} to={path}>
                    {title}
                  </Link>
                )
              );
            })}
          </Section>
          <Section>
            <Button onClick={() => navigate("/signin")} type={"dark"}>
              Sign in
            </Button>
          </Section>
        </Wrapper>
      </Main>

      <Outlet />
    </Container>
  );
};
export default Navbar;
