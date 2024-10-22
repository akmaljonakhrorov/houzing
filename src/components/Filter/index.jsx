import React, { useRef } from "react";
import { Input, Button } from "../Generics";
import { Container, Icons, Section, MenuWrapper } from "./style";
//antd
import { Dropdown, Menu } from "antd";

const Filter = () => {
  const countryRef = useRef();
  const cityRef = useRef();
  const regionRef = useRef();
  const zipcodeRef = useRef();
  const roomsRef = useRef();
  const sizeRef = useRef();
  const sortRef = useRef();
  const minPriceRef = useRef();
  const maxPriceRef = useRef();
  return (
    <Container>
      <Input
        icon={<Icons.Houses />}
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
      />
      <Dropdown
        dropdownRender={() => (
          <MenuWrapper>
            <h1 className="subTitle">Address</h1>
            <Section>
              <Input ref={countryRef} placeholder={"Country"} />
              <Input ref={regionRef} placeholder={"Region"} />
              <Input ref={cityRef} placeholder={"City"} />
              <Input ref={zipcodeRef} placeholder={"Zip_code"} />
            </Section>
            <h1 className="subTitle">Apartment info</h1>
            <Section>
              <Input ref={roomsRef} placeholder={"Rooms"} />
              <Input ref={sizeRef} placeholder={"Size"} />
              <Input ref={sortRef} placeholder={"Sort"} />
            </Section>
            <h1 className="subTitle">Price</h1>
            <Section>
              <Input ref={minPriceRef} placeholder={"Min price"} />
              <Input ref={maxPriceRef} placeholder={"Max price"} />
            </Section>
            <h1 className="subTitle">Footer</h1>
            <Section></Section>
          </MenuWrapper>
        )}
        placement="bottomRight"
      >
        <div>
          <Button type={"light"}>
            <Icons.Setting />
            Advanced
          </Button>
        </div>
      </Dropdown>

      <Button>
        <Icons.Search />
        Search
      </Button>
    </Container>
  );
};
export default Filter;
