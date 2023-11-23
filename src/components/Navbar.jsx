'use client';
import {Menu,Home,Article,FormatBold,Business,PlayLesson,Event,AttachMoney,WorkspacePremium,SettingsApplications,Construction,CloudDownload,YouTube} from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "../styles/navbar.module.css";
import NavbarItem from "./NavbarItem";
import Button from "@mui/material/Button";

const IconSize = "50px";

const navigationItems = [
  {
    text: "HOMEPAGE",
    icon: <Home style={{ width: IconSize, height: IconSize }} />,
    href: "/",
  },
  {
    text: "Research Paper & Articles",
    icon: <Article style={{ width: IconSize, height: IconSize }} />,
    href: "/research-papers",
  },
  {
    text: "Blogs",
    icon: <FormatBold style={{ width: IconSize, height: IconSize }} />,
    href: "/blogs",
  },
  {
    text: "Research Grants",
    icon: <AttachMoney style={{ width: IconSize, height: IconSize }} />,
    href: "/research-grants",
  },
  {
    text: "Patents",
    icon: <WorkspacePremium style={{ width: IconSize, height: IconSize }} />,
    href: "/patents",
  },
  {
    text: "Simulation Tools",
    icon: <Construction style={{ width: IconSize, height: IconSize }} />,
    href: "/simulation-tools",
  },
  {
    text: "Courses and Tutorials",
    icon: <PlayLesson style={{ width: IconSize, height: IconSize }} />,
    href: "/courses-and-tutorials",
  },
  {
    text: "Conferences & events",
    icon: <Event style={{ width: IconSize, height: IconSize }} />,
    href: "/conferences-and-webinar-events",
  },
  {
    text: "YouTube Content",
    icon: <YouTube style={{ width: IconSize, height: IconSize }} />,
    href: "/youtube-content",
  },
  {
    text: "Projects",
    icon: (
      <SettingsApplications style={{ width: IconSize, height: IconSize }} />
    ),
    href: "/projects",
  },
  {
    text: "Software & Tools",
    icon: <CloudDownload style={{ width: IconSize, height: IconSize }} />,
    href: "/software-and-tools",
  },
  {
    text: "Companies",
    icon: <Business style={{ width: IconSize, height: IconSize }} />,
    href: "/companies",
  },
];

const Navbar = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  return (
    <>
      <div className={`${styles.navbar} ${styles.sticky}`}>
        <Button
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => setToggleDrawer(!toggleDrawer)}
        >
          <Menu style={{ width: "40px", height: "40px" }} />
          <div
          className={`${styles.sidebar}`}
          style={toggleDrawer ? { display: "block" } : { display: "none" }}
        >
          {navigationItems.map((item, idx) => {
            return (
              <Link key={idx} href={item.href} style={{ width: "100%" }}>
                <NavbarItem key={idx} text={item.text} icon={item.icon} />
              </Link>
            );
          })}
        </div>
        </Button>

        <a href="/">
          <h2>DNA Computing Resource Page</h2>
        </a>
        <a href="https://www.guptalab.org/">
        <Image
          src="/guptalablogo.jpg"
          width={39}
          height={39}
          alt="Gupta Lab Logo"
        />
        </a>

        
      </div>
    </>
  );
};

export default Navbar;
