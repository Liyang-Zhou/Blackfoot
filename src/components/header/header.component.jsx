import React from 'react';
import { Link } from 'react-router-dom';

// import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = () => (
  <div className="header">
    <div className="options">
      <Link className="option" to="/">
        CHATBOT
      </Link>
      <Link className="option" to="/collection">
        COLLECTIONS
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
