import React, { useContext } from 'react';
import { TabsEnum } from '../../constants';
import { CurrentTabContext } from '../../contexts';

import './menu.css';

export const Menu = () => {
  const links = [
    { name: 'About episodes', tab: TabsEnum.EPISODES },
    { name: 'Characters', tab: TabsEnum.CHARACTERS },
    { name: 'Starship', tab: TabsEnum.STARSHIP },
    { name: 'Planets', tab: TabsEnum.PLANETS },
  ];

  const { currentTab, setCurrentTab } = useContext(CurrentTabContext);

  const handleLinkClick = (e) => {
    e.preventDefault();
    setCurrentTab(e.target.id);
  };

  return (
      <ul className="menu-nav">
        {links.map((link, index) => (
          <li key={`${index}${link.tab}`}>
            <a className="menu-link" href="." onClick={handleLinkClick} id={link.tab}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
  );
};
