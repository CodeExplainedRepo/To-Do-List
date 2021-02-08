import React, { Component } from "react";
import RandomColorText from "../randomColorText/randomColorText";
import "./header.css";

class Logo extends Component {
  render() {
    return (
      <div className="header__logo">
        {" "}
        <RandomColorText>My TODO APP</RandomColorText>
      </div>
    );
  }
}

class Menu extends Component {
  render() {
    return (
      <nav className="header__menu">
        <a className="header__menu-item">Home</a>
        <a className="header__menu-item">TODO APP</a>
        <a className="header__menu-item">TODO Count</a>
        <a className="header__menu-item">About Us</a>
      </nav>
    );
  }
}

class ActionBar extends Component {
  render() {
    return (
      <div className="header__action-bar">
        <div className="header__action-item search-bar">Search Bar</div>
        <div className="header__action-item login">Log In</div>
        <div className="header__action-item signup">Sign Up</div>
      </div>
    );
  }
}

export default class Header extends Component {
  render() {
    return (
      <header>
        <Logo />
        <Menu />
        <ActionBar />
      </header>
    );
  }
}
