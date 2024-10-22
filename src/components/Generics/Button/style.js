import styled from "styled-components";

// generic buttonga type beruvchi function
const getType = ({ type }) => {
  switch (type) {
    case "dark":
      return {
        background: "transparent",
        border: "1px solid white",
        color: "#fff",
      };
    case "light":
      return {
        background: "#fff",
        border: "1px solid #e6e9ec",
        color: "#0D263B",
      };
    case "primary":
      return {
        background: "#0061DF",
        border: "none",
        borderRadius: "2px",
        color: "#fff",
      };
    default:
      return {
        background: "#0061DF",
        border: "none",
        borderRadius: "2px",
        color: "#fff",
      };
  }
};
const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 120px;
  font: 14px;
  height: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  width: ${({ width }) => (width ? `${width}px` : "130px")};
  border-radius: 2px;
  cursor: pointer;
  ${getType}
  &:active {
    opacity: 0.7;
  }
`;

export { Container };
