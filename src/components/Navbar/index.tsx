"use client";

import React, { useState, useEffect, useLayoutEffect } from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import Image from "next/image";
// import TalenteLogo from "@/assets/svg/TalenteLogo.svg";
// import ActionButton from "@/common/ActionButton";
import DottedCircle from "@/assets/svg/DottedCircle.svg";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { default as MuiButton } from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Container from "@/components/Container";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "../Button";

const navItemsAvatar = [
  { label: "Tasha", path: "/tasha" },
  { label: "Career Hub", path: "/", url: "https://community.mytalente.ai/" },
  { label: "Subscription", path: "/pricing" },
  { label: "Company", path: "/about-us" },
];
interface StyleProps {
  color?: string;
  logo?: any;
  scrollColor?: string;
  navColor?: string;
  theme?: "light" | "dark";
}
const Navbar = ({
  color = "var(--white-text)",
  // logo = TalenteLogo,
  scrollColor = "var(--hover-nav-color)",
  navColor = "var(--black-color)",
  theme = "dark",
}: StyleProps) => {
  const [mobileOpen, setMobileOpen] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useLayoutEffect(() => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        background: `${scrollColor}`,
      }}
      className="Spartan-SemiBold !py-0"
    >
      <List>
        {navItemsAvatar.map((item, index) => (
          <ListItem
            key={item.label}
            disablePadding
            className={`Spartan-SemiBold navList !text-[${navColor}] !flex${index === navItemsAvatar.length - 1 ? " last-child-no-border" : ""}`} // Check if it's the last item
          >
            {item.url ? (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="Spartan-SemiBold "
                style={{ color }}
                onClick={(event) => event.stopPropagation()}
              >
                <ListItemButton className="Spartan-SemiBold" sx={{ textAlign: "center" }}>
                  <ListItemText
                    className={`Spartan-SemiBold !text-[${navColor}]`}
                    primary={item.label}
                  />
                </ListItemButton>
              </a>
            ) : (
              <Link className={`Spartan-SemiBold !text-[${navColor}]`} href={item.path}>
                <ListItemButton className="Spartan-SemiBold" sx={{ textAlign: "center" }}>
                  <ListItemText
                    className={`Spartan-SemiBold !text-[${navColor}]`}
                    primary={item.label}
                  />
                </ListItemButton>
              </Link>
            )}
          </ListItem>
        ))}
      </List>
      <div className="flex flex-col items-start gap-2 px-4 py-2">
        <Button
          className={`${theme === "dark" ? "text-white" : "text-black"} font-extrabold text-sm lg:text-base py-2 px-5 text-white w-[100px] tab:hidden`}
        >
          Log In
        </Button>
        <Button
          openDialog
          className={`${theme === "dark" ? "bg-white text-black" : "bg-black text-white"} font-extrabold text-sm lg:text-base py-2 px-5 w-[100px] tab:hidden`}
        >
          Sign Up
        </Button>
      </div>
    </Box>
  );

  return (
    <Box className="relative">
      <Image
        draggable="false"
        src={DottedCircle}
        alt="Dotted Image"
        className="absolute top-0 left-0 lg:!w-[250px] lg:!h-[250px] !w-[150px] !h-[150px] animates z-10"
      />
      <AppBar
        component="nav"
        sx={{
          transition: "all 0.3s ease-in-out",
          background: scrolled ? scrollColor : "transparent",
          borderBottom: "linear-gradient(to right, transparent, var(--button-shadow), transparent)",
        }}
        className="!h-[92px] left-0 !shadow-none borderNav flex items-center justify-center"
      >
        <Container>
          <Toolbar className="m-auto w-full !px-0">
            <Link href="/" className="cursor-pointer flex items-center relative" draggable="false">
              <Image
                draggable="false"
                alt="Logo"
                width={125}
                height={125}
                src="/images/brand.png"
                className="lg:ml-[-8px] !cursor-pointer tab:max-h-[146px] w-[146px]"
              />
              <Box
                className="Spartan-Medium text-[12px] -ml-2 mt-5 tab:mt-[10px]"
                style={{ color }}
              >
                Beta Live
              </Box>
            </Link>
            <Box
              sx={{ display: { xs: "flex", sm: "flex" } }}
              className="mx-auto flex justify-evenly"
            >
              <Box
                sx={{ display: "flex", gap: 3, alignItems: "center" }}
                className="min-[1024px]:flex hidden xl:!gap-[60px] !items-center"
              >
                {navItemsAvatar.map((item) => (
                  <React.Fragment key={item.label}>
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color }}
                        className="Spartan-SemiBold hover-underline-animation !w-fit !whitespace-nowrap !capitalize !leading-normal flex flex-row text-lg"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.path}
                        key={item.label}
                        style={{ color }}
                        className="Spartan-SemiBold hover-underline-animation !w-fit !whitespace-nowrap !capitalize !leading-normal flex flex-row text-lg"
                      >
                        {item.label}
                      </Link>
                    )}
                  </React.Fragment>
                ))}
              </Box>
            </Box>
            <Button className="font-extrabold text-sm lg:text-base py-2 px-5 hidden tab:inline">
              Log In
            </Button>
            <Button
              openDialog
              className="ml-3 bg-white text-black font-extrabold text-sm lg:text-base py-2 px-5 hidden tab:inline"
            >
              Sign Up
            </Button>
            <MuiButton
              onClick={handleDrawerToggle}
              className="focus:outline-none text-center !min-w-[30px] !ml-5 min-[1024px]:hidden"
            >
              {!mobileOpen && <CloseIcon className={`text-[${navColor}] !w-5 !h-5`} />}
              {mobileOpen && <MenuIcon className={`text-[${navColor}] !w-5 !h-5`} />}
            </MuiButton>
          </Toolbar>
        </Container>
      </AppBar>

      <nav>
        <Drawer
          variant="temporary"
          anchor="top"
          open={!mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          className="Spartan-SemiBold menu"
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100%",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Navbar;
