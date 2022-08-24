import { GiFiles, GiHouse } from 'react-icons/gi';

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
    name: 'Home',
    pathTo: '/marketplaces',
    Icon: GiHouse,
  },
  {
    name: 'MyFiles',
    pathTo: '/multisign',
    Icon: GiFiles,
  },
];

export { navbarItems };
