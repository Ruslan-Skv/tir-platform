export interface NavigationItem {
  name: string;
  href: string;
  hasDropdown: boolean;
  category: string;
}

export interface DropdownItem {
  name: string;
  href: string;
  productType: string;
  hasSubmenu?: boolean;
  submenu?: DropdownItem[];
}

export interface DropdownMenu {
  category: string;
  image: string;
  items: DropdownItem[];
}

export interface DropdownMenus {
  [key: string]: DropdownMenu;
}
