"use client";
import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import itemData from "../../public/menu.json";
import Link from "next/link";
import "./navbar.css";
import { ButtonComponent } from "../components/Button";
import Image from "next/image";
import logo from "pub/Hypefarm Logo_svg.svg";

function Nav() {
  const [isHover, setIsHover] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState();
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    setSize(window.innerWidth);
    const storeScroll = () => {
      document.documentElement.dataset.scroll = window.scrollY;
      window.scrollY == 0 ? setScroll(false) : setScroll(true);
    };
    document.addEventListener("scroll", storeScroll, () => {});

    const handleResize = () => {
      setSize(window.innerWidth);
    };
    storeScroll();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((prev) => !prev);
  };
  console.log(size);
  return (
    <header
      className={`header ${
        isHover || scroll ? "header_bg_color" : "header_bg_trans"
      }`}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="header-content ">
        <Link href="/" className="header__content__logo" passHref>
          <Image src={logo} alt="HypeFarm logo" width={250} height={150} />
        </Link>
        <nav
          className={` ${
            size <= 768 ? "nav"(menuOpen && "nav isMenu") : "menu"
          }`}
        >
          <ul>
            {itemData.map((e, i) => (
              <li key={i}>
                <Link href={e.link}>{e.title}</Link>
              </li>
            ))}
            <li className={`${size >= 768 ? "hidden" : "block"}`}>
              <Link href="#contact" onClick={() => setMenuOpen(false)}>
                <ButtonComponent content={"Book Intro Call"} />
              </Link>
            </li>
          </ul>
        </nav>
        <div
          className={`${size < 768 || size == undefined ? "hidden" : "block"}`}
        >
          <Link href="#contact">
            {/* <Button content={"Book Intro Call"} /> */}
            <ButtonComponent content={"Book Intro Call"} filled />
          </Link>
        </div>
        {size <= 768 && (
          <div className="toggle">
            {!menuOpen ? (
              <BiMenuAltRight onClick={menuToggleHandler} />
            ) : (
              <AiOutlineClose onClick={menuToggleHandler} />
            )}
          </div>
        )}
      </div>
    </header>
  );
}

export default Nav;
