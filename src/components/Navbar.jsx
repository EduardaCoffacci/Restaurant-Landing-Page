import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { ShoppingCartRounded } from "@mui/icons-material";
import { Link } from "react-scroll";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      to: "home",
    },
    {
      text: "Sobre",
      icon: <InfoIcon />,
      to: "sobre",
    },
    {
      text: "Depoimento",
      icon: <CommentRoundedIcon />,
      to: "depoimento",
    },
    {
      text: "Contato",
      icon: <PhoneRoundedIcon />,
      to: "contato",
    },
    {
      text: "Carrinho",
      icon: <ShoppingCartRounded />,
      to: "carrinho"
    },
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <Link
          className="link"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <img src={Logo} alt="" />
        </Link>
      </div>
      <div className="navbar-links-container">
        <Link
          className="link"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Home
        </Link>
        <Link
          className="link"
          to="sobre"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Sobre
        </Link>
        <Link
          className="link"
          to="depoimento"
          spy={true}
          smooth={true}
          offset={100}
          duration={500}
        >
          Depoimento
        </Link>
        <Link
          className="link"
          to="contato"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
        >
          Contato
        </Link>
        <a href="">
          <BsCart2 className="navbar-cart-icon" />
        </a>
        <button className="primary-button">Reservas Agora</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <Link
                key={item.text}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
