import styled from "styled-components";
import { ReactComponent as houses } from "../../assets/icons/houses.svg";
import { ReactComponent as search } from "../../assets/icons/search.svg";
import { ReactComponent as setting } from "../../assets/icons/setting.svg";
const Container = styled.div`
  display: flex;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 20px;
`;
const Icons = styled.div``;

Icons.Houses = styled(houses)`
  margin-right: 8px;
`;
Icons.Search = styled(search)`
  margin-right: 8px;
`;
Icons.Setting = styled(setting)`
  margin-right: 8px;
`;

const MenuWrapper = styled.div`
  padding: 30px;
  background: #fff;
  border: 1px solid #e6e9ec;
`;
const Section = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;
export { Container, Icons, Section, MenuWrapper };
