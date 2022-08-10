import React, { useState } from 'react';
import { Episodes } from './pages/episodes';
import { Characters } from './pages/characters';
import { Header } from './components/header';
import { CurrentTabContext } from './contexts';
import { TabsEnum } from './constants';

const getBackgroundImage = (currentTab) => {
  switch (currentTab) {
    case TabsEnum.EPISODES:
      return 'main-bg.jpg';
    case TabsEnum.CHARACTERS:
      return 'panel.jpg';
    default:
      return 'galaxy-bg.png';
  }
};

export const App = () => {
  const [currentTab, setCurrentTab] = useState(TabsEnum.EPISODES);
  const value = { currentTab, setCurrentTab };

  const backgroundImageUrl = getBackgroundImage(currentTab);

  return (
    <CurrentTabContext.Provider value={value}>
      <div className="container">
        <Header />
        {currentTab === TabsEnum.EPISODES && <Episodes />}
        {currentTab === TabsEnum.CHARACTERS && <Characters />}
        {currentTab === TabsEnum.STARSHIP && <Episodes />}
        {currentTab === TabsEnum.PLANETS && <Episodes />}
      </div>
    </CurrentTabContext.Provider>
  );
};
