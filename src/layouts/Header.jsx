import React from "react";
import { ReactComponent as Logo } from "../images/logo.svg";

const Header = () => {
  return (
    <header className="px-8 py-6 lg:py-16 lg:px-0">
      {/* logo-container */}
      <div className="text-sm">
        <Logo className="transform scale-75 lg:scale-100" />
      </div>
    </header>
  );
};

export default Header;
