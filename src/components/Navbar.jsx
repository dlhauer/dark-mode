import React from 'react';
import {useDarkMode} from '../hooks/useDarkMode';
import ViewDropdown from './ViewDropdown';

const Navbar = (props) => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <ViewDropdown setOrder={props.setOrder} viewOrders={props.viewOrders}/>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
