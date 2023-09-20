import React, { useState } from "react";

import { ReactComponent as Logo } from "../images/svgs/logo-white.svg";
import { ReactComponent as LanguageIcon } from "../images/header-icons/language-selector-icon.svg";
import { ReactComponent as CartIcon } from "../images/header-icons/shop-cart-icon.svg";
import { Typography } from "@mui/material";

import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";

import Button from "./Button";
import Drawer from "./Drawer";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleToggleDrawer = () => setIsDrawerOpen((prevState) => !prevState);

  return (
    <header className="header">
      <div className="header__logo">
        {isDrawerOpen ? (
          <MdClose
            className="hamburger-icon"
            onClick={handleToggleDrawer}
            color="white"
          />
        ) : (
          <BiMenu className="hamburger-icon" onClick={handleToggleDrawer} />
        )}
        <Link to="/">
          {/* <Logo /> */}
        </Link>
      </div>
      <div className="header__menu">
        {/* <div className="header__menu__icon-container">
          <LanguageIcon className="u-display-none" />
        </div>
        <div className="header__menu__icon-container">
          <CartIcon />
        </div>
        <Typography className="header__menu__signin">Sign In</Typography> */}
        
        <div className="">
          <Link to="/contact-us">
            <Button buttonType="default">Contact Us</Button>
          </Link>
        </div> 
      </div>
      <Drawer
        open={isDrawerOpen}
        handleToggleDrawer={handleToggleDrawer}
        anchor="left"
      />
    </header>
  );
};

export default Header;
