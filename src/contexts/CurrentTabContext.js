import { createContext } from 'react';
import { TabsEnum } from '../constants';

export const CurrentTabContext = createContext({
  currentTab: TabsEnum.EPISODES,
  setCurrentTab: () => {}
});
