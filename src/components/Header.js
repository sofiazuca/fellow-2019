import React from "react";
import Wrapper from "./Wrap";
import Logos from "./Logos";
import SocialMedia from "./SocialMedia";
import NavBar from "./Navbar";

const Header = () => {
  return (
    <header className="header">
      <Wrapper>
        <div className="header__wrapper">
          <Logos />
          <SocialMedia />
        </div>
      </Wrapper>
      <NavBar />
    </header>
  );
};

export default Header;
