import React from "react";
import { Link } from "react-router-dom";
import { withTheme } from "styled-components";

import { NavbarContainer, UserProfile } from "./style";
import { Header1, Label } from "../../styled-components/Typography";
import { ThumbanailPicture } from "../../styled-components/Images";
import { ContainerFluid } from "../../styled-components/Containers";
import { FlexJustifyBetween } from "../../styled-components/Flex";

const Navbar = ({ theme }) => {
  return (
    <NavbarContainer>
      <ContainerFluid>
        <FlexJustifyBetween>
          <Link
            to={"/questions"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Header1 role="logo" size={theme.fontSize.logo}>
              Q?
            </Header1>
          </Link>
          <UserProfile>
            <ThumbanailPicture
              alt="user avatar"
              src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
            />
            <Label as="span">Felizardo</Label>
          </UserProfile>
        </FlexJustifyBetween>
      </ContainerFluid>
    </NavbarContainer>
  );
};

export default withTheme(Navbar);
