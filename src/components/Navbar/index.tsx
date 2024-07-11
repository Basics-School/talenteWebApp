"use client";

import React, { useState, useEffect, useLayoutEffect } from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import Image from "next/image";
import TalenteLogo from "@/assets/svg/TalenteLogo.svg";
import ActionButton from "@/common/ActionButton";
import DottedCircle from "@/assets/svg/DottedCircle.svg";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Container from "@/components/Container";

const navItemsAvatar = [
  { label: "Ask Tasha", path: "/ask-tasha" },
  { label: "Career Hub", path: "/", url: "https://community.mytalente.ai/" },
  { label: "Tools", path: "/" },
  { label: "Research", path: "/" },
  { label: "More", path: "/" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(true);
  const [scrolled, setScrolled] = useState(true);

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
        background: "#171717",
      }}
      className="Spartan-SemiBold !py-0"
    >
      <List>
        {navItemsAvatar.map(
          (
            item,
            index, // Added index parameter to map function
          ) => (
            <ListItem
              key={item.label}
              disablePadding
              className={`Spartan-SemiBold navList !flex${index === navItemsAvatar.length - 1 ? " last-child-no-border" : ""}`} // Check if it's the last item
            >
              <Link className="Spartan-SemiBold" href={item.path}>
                <ListItemButton className="Spartan-SemiBold" sx={{ textAlign: "center" }}>
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="Spartan-SemiBold text-white "
                      onClick={(event) => event.stopPropagation()}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <ListItemText className="Spartan-SemiBold" primary={item.label} />
                  )}
                </ListItemButton>
              </Link>
            </ListItem>
          ),
        )}
      </List>
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
          background: scrolled ? "var(--hover-nav-color)" : "transparent",
          borderBottom: "linear-gradient(to right, transparent, var(--button-shadow), transparent)",
        }}
        className="!h-[72px] left-0 !shadow-none borderNav flex items-center justify-center"
      >
        <Container>
          <Toolbar className="m-auto w-full !px-0">
            <Link
              href="/"
              className="cursor-pointer flex flex-col tab:flex-row tab:items-center"
              draggable="false"
            >
              <Image
                draggable="false"
                alt="Logo"
                src={TalenteLogo}
                className="lg:ml-[-8px] !cursor-pointer tab:h-[146px] w-[146px]"
              />
              <Box className="Spartan-light text-[12px]">Beta Live</Box>
            </Link>
            <Box
              sx={{ display: { xs: "flex", sm: "flex" } }}
              className="mx-auto flex justify-evenly"
            >
              <Box
                sx={{ display: "flex", gap: 3, alignItems: "center" }}
                className="sm:!flex hidden xl:!gap-[60px] !items-center"
              >
                {navItemsAvatar.map((item) => (
                  <React.Fragment key={item.label}>
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="Spartan-SemiBold !text-[18px] hover-underline-animation !w-fit !whitespace-nowrap !capitalize xl:!text-base !text-sm !leading-normal flex flex-row"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.path}
                        key={item.label}
                        style={{ color: "var(--white-text)" }}
                        className="Spartan-SemiBold !text-[18px] hover-underline-animation !w-fit !whitespace-nowrap !capitalize xl:!text-base !text-sm !leading-normal flex flex-row"
                      >
                        {item.label}
                      </Link>
                    )}
                  </React.Fragment>
                ))}
              </Box>
            </Box>
            <ActionButton
              text="Log In"
              className="Spartan-Medium xl:!px-8 xl:!py-2 lg:!px-5 lg:!py-1 !px-2 !py-1 xl:!text-base !text-[13px] tab:me-3 me-2"
            />
            <ActionButton
              text="Sign Up"
              className="Spartan-Medium xl:!px-8 xl:!py-2 lg:!px-5 lg:!py-1 !px-2 !py-1 xl:!text-base !text-[13px]"
              openDialog
            />
            <Button
              onClick={handleDrawerToggle}
              className="focus:outline-none text-center !min-w-[30px] !ml-5 sm:!hidden"
            >
              {mobileOpen && <MenuIcon className="text-[--white-text] !w-5 !h-5" />}
              {!mobileOpen && <CloseIcon className="text-[--white-text] !w-5 !h-5" />}
            </Button>
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
