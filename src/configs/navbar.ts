import { BsCoin } from 'react-icons/bs';
import { IoMdList } from 'react-icons/io';
export interface INavbarItem {
  name: string;
  pathTo: string;
  Icon: any;
  onClick?(): void;
}

export const heightLimit = 70; // pixels
export const navbarHeight = 5; // rem
export const navbarPadding = '1rem 17.5rem';

const navbarItems: INavbarItem[] = [
  {
    name: 'List',
    pathTo: '/list',
    Icon: IoMdList,
  },
  {
    name: 'Plans',
    pathTo: '/plans',
    Icon: BsCoin,
  },
];

export { navbarItems };
