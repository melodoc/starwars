import React, { useState } from 'react';
import { Episodes } from './pages/episodes';
import { Characters } from './pages/characters';
import { Planets } from './pages/planets';
import { Starship } from './pages/starship';
import { Header } from './components/header';
import { CurrentTabContext } from './contexts';
import { TabsEnum } from './constants';

import './App.css';

export const App = () => {
  const [currentTab, setCurrentTab] = useState(TabsEnum.EPISODES);
  const value = { currentTab, setCurrentTab };

  return (
    <CurrentTabContext.Provider value={value}>
      <div className="body">
        <div className="container">
          <Header />
          {currentTab === TabsEnum.EPISODES && <Episodes />}
          {currentTab === TabsEnum.CHARACTERS && <Characters />}
          {currentTab === TabsEnum.STARSHIP && <Starship />}
          {currentTab === TabsEnum.PLANETS && <Planets />}
        </div>
      </div>
    </CurrentTabContext.Provider>
  );
};
