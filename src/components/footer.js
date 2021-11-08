import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <footer>
      <div className='container'>
        <div className='row space-between'>
          <div className='logo'>
            <Link to='/'>SONDER MOBILE</Link>
          </div>
          <div className='menu'>MENU</div>
        </div>
      </div>
    </footer>
  );
};

export default Header;
