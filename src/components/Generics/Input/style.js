import styled from "styled-components";

const Container = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 120px;
  font: 14px;
  height: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  padding-left: ${({ $icon }) => ($icon ? "50px" : "20px")};
  border-radius: 2px;
  outline: none;
  border: 1px solid #cad3dd;
  color: #0d263b;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: ${({ width }) => (width ? `${width}px` : "100%")};
`;
const Icon = styled.div`
  position: absolute;
  left: 10px;
`;
export { Container, Wrapper, Icon };
