import React from 'react';
import Menu from '../Menu/Menu';
import Logo from '../Logo';
import ContactButton from '../ContactButton';

import './HeaderStyles.css';

export default () => (<header className="header">
  <Logo />
  <Menu />
  <ContactButton />
</header>
);
