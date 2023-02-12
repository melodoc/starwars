import { createContext } from 'react';
import { TabsEnum } from '../enums';

export const CurrentTabContext = createContext({
  currentTab: TabsEnum.EPISODES,
  setCurrentTab: () => {}
});
