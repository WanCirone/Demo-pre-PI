import React from 'react';
//import Logo from '../img/logoHenry.png'
//import SearchBar from './SearchBar.jsx';
import { Link } from 'react-router-dom';


function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark">

      <Link to='/'>
        <span className="navbar-brand">
          Henry - Weather App
        </span>
      </Link>

      <Link to='/post'>
        <span>Nueva ciudad</span>
      </Link>

        {/* <SearchBar
          onSearch={onSearch}
        /> */}
        
    </nav>
  );
};

export default Nav;