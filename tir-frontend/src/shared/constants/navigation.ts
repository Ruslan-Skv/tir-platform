import type { DropdownItem, DropdownMenus, NavigationItem } from '../types';

export const navigation: NavigationItem[] = [
  {
    name: 'Мебель',
    href: '/furniture',
    hasDropdown: true,
    category: 'furniture',
  },
  {
    name: 'Ремонт квартир',
    href: '/repair',
    hasDropdown: true,
    category: 'repair',
  },
  {
    name: 'Двери',
    href: '/doors',
    hasDropdown: true,
    category: 'doors',
  },
  {
    name: 'Окна',
    href: '/windows',
    hasDropdown: true,
    category: 'windows',
  },
  {
    name: 'Натяжные потолки',
    href: '/ceilings',
    hasDropdown: true,
    category: 'ceilings',
  },
  {
    name: 'Жалюзи',
    href: '/blinds',
    hasDropdown: true,
    category: 'blinds',
  },
];

export const dropdownMenus: DropdownMenus = {
  Мебель: {
    category: 'furniture',
    image: '../images/mebel1.jpg',
    items: [
      {
        name: 'Мягкая мебель',
        href: '/furniture/sofas',
        productType: 'sofas',
        hasSubmenu: true,
        submenu: [
          {
            name: 'Диваны',
            href: '/furniture/sofas/sofas',
            productType: 'sofas',
          },
          {
            name: 'Кресла',
            href: '/furniture/sofas/armchairs',
            productType: 'armchairs',
          },
          {
            name: 'Угловые диваны',
            href: '/furniture/sofas/corner-sofas',
            productType: 'corner_sofas',
          },
          {
            name: 'Модульные диваны',
            href: '/furniture/sofas/modular-sofas',
            productType: 'modular_sofas',
          },
        ],
      },
      {
        name: 'Обеденные группы',
        href: '/furniture/dining-groups',
        productType: 'dining_groups',
        hasSubmenu: true,
        submenu: [
          {
            name: 'Столы',
            href: '/furniture/dining-groups/tables',
            productType: 'dining_tables',
          },
          {
            name: 'Стулья',
            href: '/furniture/dining-groups/chairs',
            productType: 'dining_chairs',
          },
          {
            name: 'Обеденные гарнитуры',
            href: '/furniture/dining-groups/sets',
            productType: 'dining_sets',
          },
          {
            name: 'Барные стулья',
            href: '/furniture/dining-groups/bar-stools',
            productType: 'bar_stools',
          },
        ],
      },
      {
        name: 'Товары для сна',
        href: '/furniture/sleep-products',
        productType: 'sleep_products',
        hasSubmenu: true,
        submenu: [
          {
            name: 'Кровати',
            href: '/furniture/sleep-products/beds',
            productType: 'beds',
          },
          {
            name: 'Матрасы',
            href: '/furniture/sleep-products/mattresses',
            productType: 'mattresses',
          },
          {
            name: 'Наматрасники',
            href: '/furniture/sleep-products/mattress-protectors',
            productType: 'mattress_protectors',
          },
          {
            name: 'Чехлы',
            href: '/furniture/sleep-products/covers',
            productType: 'covers',
          },
          {
            name: 'Подушки',
            href: '/furniture/sleep-products/pillows',
            productType: 'pillows',
          },
        ],
      },
      {
        name: 'Кухни по индивидуальным размерам',
        href: '/furniture/custom-kitchens',
        productType: 'custom_kitchens',
        hasSubmenu: true,
        submenu: [
          {
            name: 'Проектирование кухни',
            href: '/furniture/custom-kitchens/design',
            productType: 'kitchen_design',
          },
          {
            name: 'Кухонные гарнитуры',
            href: '/furniture/custom-kitchens/sets',
            productType: 'kitchen_sets',
          },
          {
            name: 'Кухонные фасады',
            href: '/furniture/custom-kitchens/facades',
            productType: 'kitchen_facades',
          },
          {
            name: 'Столешницы',
            href: '/furniture/custom-kitchens/countertops',
            productType: 'countertops',
          },
        ],
      },
      {
        name: 'Шкафы по индивидуальным размерам',
        href: '/furniture/custom-wardrobes',
        productType: 'custom_wardrobes',
        hasSubmenu: true,
        submenu: [
          {
            name: 'Гардеробные системы',
            href: '/furniture/custom-wardrobes/wardrobe-systems',
            productType: 'wardrobe_systems',
          },
          {
            name: 'Встроенные шкафы',
            href: '/furniture/custom-wardrobes/built-in-wardrobes',
            productType: 'built_in_wardrobes',
          },
          {
            name: 'Распашные шкафы',
            href: '/furniture/custom-wardrobes/swing-wardrobes',
            productType: 'swing_wardrobes',
          },
          {
            name: 'Раздвижные шкафы',
            href: '/furniture/custom-wardrobes/sliding-wardrobes',
            productType: 'sliding_wardrobes',
          },
        ],
      },
    ],
  },
  'Ремонт квартир': {
    category: 'repair',
    image: '../images/remont-kvartir.jpg',
    items: [
      {
        name: 'Сантехника',
        href: '/repair/plumbing',
        productType: 'plumbing',
        hasSubmenu: true,
        submenu: [
          {
            name: 'Установка сантехники',
            href: '/repair/plumbing/installation',
            productType: 'plumbing_installation',
          },
          {
            name: 'Замена труб',
            href: '/repair/plumbing/pipe-replacement',
            productType: 'pipe_replacement',
          },
          {
            name: 'Монтаж водоснабжения',
            href: '/repair/plumbing/water-supply',
            productType: 'water_supply',
          },
        ],
      },
      {
        name: 'Электрика',
        href: '/repair/electrical',
        productType: 'electrical',
        hasSubmenu: true,
        submenu: [
          {
            name: 'Электромонтажные работы',
            href: '/repair/electrical/installation',
            productType: 'electrical_installation',
          },
          {
            name: 'Замена проводки',
            href: '/repair/electrical/wiring-replacement',
            productType: 'wiring_replacement',
          },
          {
            name: 'Установка розеток и выключателей',
            href: '/repair/electrical/outlets-switches',
            productType: 'outlets_switches',
          },
        ],
      },
      {
        name: 'Стены',
        href: '/repair/walls',
        productType: 'walls',
        hasSubmenu: true,
        submenu: [
          {
            name: 'Штукатурные работы',
            href: '/repair/walls/plastering',
            productType: 'plastering',
          },
          {
            name: 'Шпаклевка',
            href: '/repair/walls/putty',
            productType: 'putty',
          },
          {
            name: 'Покраска стен',
            href: '/repair/walls/painting',
            productType: 'wall_painting',
          },
          {
            name: 'Обои',
            href: '/repair/walls/wallpaper',
            productType: 'wallpaper',
          },
        ],
      },
      {
        name: 'Полы',
        href: '/repair/floors',
        productType: 'floors',
        hasSubmenu: true,
        submenu: [
          {
            name: 'Стяжка пола',
            href: '/repair/floors/screed',
            productType: 'floor_screed',
          },
          {
            name: 'Укладка ламината',
            href: '/repair/floors/laminate',
            productType: 'laminate',
          },
          {
            name: 'Укладка паркета',
            href: '/repair/floors/parquet',
            productType: 'parquet',
          },
          {
            name: 'Укладка плитки',
            href: '/repair/floors/tiles',
            productType: 'floor_tiles',
          },
        ],
      },
      {
        name: 'Потолки',
        href: '/repair/ceilings',
        productType: 'repair_ceilings',
        hasSubmenu: true,
        submenu: [
          {
            name: 'Натяжные потолки',
            href: '/repair/ceilings/stretch',
            productType: 'stretch_ceilings',
          },
          {
            name: 'Гипсокартонные потолки',
            href: '/repair/ceilings/drywall',
            productType: 'drywall_ceilings',
          },
          {
            name: 'Покраска потолков',
            href: '/repair/ceilings/painting',
            productType: 'ceiling_painting',
          },
        ],
      },
      {
        name: 'Плиточные работы',
        href: '/repair/tiling',
        productType: 'tiling',
        hasSubmenu: true,
        submenu: [
          {
            name: 'Укладка керамической плитки',
            href: '/repair/tiling/ceramic',
            productType: 'ceramic_tiles',
          },
          {
            name: 'Укладка мозаики',
            href: '/repair/tiling/mosaic',
            productType: 'mosaic',
          },
          {
            name: 'Затирка швов',
            href: '/repair/tiling/grouting',
            productType: 'grouting',
          },
        ],
      },
    ],
  },
  Двери: {
    category: 'doors',
    image: '../images/dveri.jpg',
    items: [
      {
        name: 'Входные двери',
        href: '/doors/entrance-doors',
        productType: 'entrance_doors',
        hasSubmenu: true,
        submenu: [
          {
            name: 'Металлические двери',
            href: '/doors/entrance-doors/metal',
            productType: 'metal_doors',
          },
          {
            name: 'Бронированные двери',
            href: '/doors/entrance-doors/armored',
            productType: 'armored_doors',
          },
          {
            name: 'Двери с терморазрывом',
            href: '/doors/entrance-doors/thermal-break',
            productType: 'thermal_break_doors',
          },
        ],
      },
      {
        name: 'Межкомнатные двери',
        href: '/doors/interior-doors',
        productType: 'interior_doors',
        hasSubmenu: true,
        submenu: [
          {
            name: 'Двери из массива',
            href: '/doors/interior-doors/solid-wood',
            productType: 'solid_wood_doors',
          },
          {
            name: 'Шпонированные двери',
            href: '/doors/interior-doors/veneer',
            productType: 'veneer_doors',
          },
          {
            name: 'Стеклянные двери',
            href: '/doors/interior-doors/glass',
            productType: 'glass_doors',
          },
          {
            name: 'Раздвижные двери',
            href: '/doors/interior-doors/sliding',
            productType: 'sliding_doors',
          },
        ],
      },
      {
        name: 'Фурнитура',
        href: '/doors/hardware',
        productType: 'door_hardware',
        hasSubmenu: true,
        submenu: [
          {
            name: 'Ручки',
            href: '/doors/hardware/handles',
            productType: 'door_handles',
          },
          {
            name: 'Замки',
            href: '/doors/hardware/locks',
            productType: 'door_locks',
          },
          {
            name: 'Петли',
            href: '/doors/hardware/hinges',
            productType: 'door_hinges',
          },
          {
            name: 'Доводчики',
            href: '/doors/hardware/closers',
            productType: 'door_closers',
          },
        ],
      },
      {
        name: 'Дополнительные услуги',
        href: '/doors/additional-services',
        productType: 'doors_services',
        hasSubmenu: true,
        submenu: [
          {
            name: 'Установка дверей',
            href: '/doors/additional-services/installation',
            productType: 'doors_installation',
          },
        ],
      },
    ],
  },
  Окна: {
    category: 'windows',
    image: '../images/okna.jpg',
    items: [
      {
        name: 'Рассчитать стоимость (конструктор по окнам)',
        href: '/windows/calculator',
        productType: 'window_calculator',
      },
      {
        name: 'Окна Veka',
        href: '/windows/veka',
        productType: 'veka_windows',
        hasSubmenu: true,
        submenu: [
          {
            name: 'Пластиковые окна Veka',
            href: '/windows/veka/plastic',
            productType: 'veka_plastic',
          },
          {
            name: 'Алюминиевые окна Veka',
            href: '/windows/veka/aluminum',
            productType: 'veka_aluminum',
          },
          {
            name: 'Профильные системы Veka',
            href: '/windows/veka/profiles',
            productType: 'veka_profiles',
          },
        ],
      },
      {
        name: 'Окна Rehau',
        href: '/windows/rehau',
        productType: 'rehau_windows',
        hasSubmenu: true,
        submenu: [
          {
            name: 'Пластиковые окна Rehau',
            href: '/windows/rehau/plastic',
            productType: 'rehau_plastic',
          },
          {
            name: 'Алюминиевые окна Rehau',
            href: '/windows/rehau/aluminum',
            productType: 'rehau_aluminum',
          },
          {
            name: 'Профильные системы Rehau',
            href: '/windows/rehau/profiles',
            productType: 'rehau_profiles',
          },
        ],
      },
      {
        name: 'Дополнительные услуги',
        href: '/windows/additional-services',
        productType: 'window_services',
        hasSubmenu: true,
        submenu: [
          {
            name: 'Установка окон',
            href: '/windows/additional-services/installation',
            productType: 'window_installation',
          },
          {
            name: 'Замена стеклопакетов',
            href: '/windows/additional-services/glass-replacement',
            productType: 'glass_replacement',
          },
          {
            name: 'Регулировка фурнитуры',
            href: '/windows/additional-services/hardware-adjustment',
            productType: 'hardware_adjustment',
          },
        ],
      },
    ],
  },
  'Натяжные потолки': {
    category: 'ceilings',
    image: '../images/potolki.jpg',
    items: [
      {
        name: 'Рассчитать стоимость (конструктор по потолкам)',
        href: '/ceilings/calculator',
        productType: 'ceiling_calculator',
      },
      {
        name: 'Каталог натяжных потолков',
        href: '/ceilings/catalog',
        productType: 'ceiling_catalog',
        hasSubmenu: true,
        submenu: [
          {
            name: 'Глянцевые потолки',
            href: '/ceilings/catalog/glossy',
            productType: 'glossy_ceilings',
          },
          {
            name: 'Матовые потолки',
            href: '/ceilings/catalog/matte',
            productType: 'matte_ceilings',
          },
          {
            name: 'Сатиновые потолки',
            href: '/ceilings/catalog/satin',
            productType: 'satin_ceilings',
          },
          {
            name: 'Перфорированные потолки',
            href: '/ceilings/catalog/perforated',
            productType: 'perforated_ceilings',
          },
        ],
      },
      {
        name: 'Каталог освещения',
        href: '/ceilings/lighting',
        productType: 'ceiling_lighting',
        hasSubmenu: true,
        submenu: [
          {
            name: 'Точечные светильники',
            href: '/ceilings/lighting/spotlights',
            productType: 'spotlights',
          },
          {
            name: 'Люстры',
            href: '/ceilings/lighting/chandeliers',
            productType: 'chandeliers',
          },
          {
            name: 'Светодиодные ленты',
            href: '/ceilings/lighting/led-strips',
            productType: 'led_strips',
          },
          {
            name: 'Карнизная подсветка',
            href: '/ceilings/lighting/cornice-lighting',
            productType: 'cornice_lighting',
          },
        ],
      },
      {
        name: 'Дополнительные услуги',
        href: '/ceilings/additional-services',
        productType: 'ceiling_services',
        hasSubmenu: true,
        submenu: [
          {
            name: 'Установка потолков',
            href: '/ceilings/additional-services/installation',
            productType: 'ceiling_installation',
          },
          {
            name: 'Ремонт потолков',
            href: '/ceilings/additional-services/repair',
            productType: 'ceiling_repair',
          },
          {
            name: 'Монтаж освещения',
            href: '/ceilings/additional-services/lighting-installation',
            productType: 'lighting_installation',
          },
        ],
      },
    ],
  },
  Жалюзи: {
    category: 'blinds',
    image: '../images/zhalyuzi.jpg',
    items: [
      {
        name: 'Рассчитать стоимость (конструктор по жалюзям)',
        href: '/blinds/calculator',
        productType: 'blinds_calculator',
      },
      {
        name: 'Каталог жалюзей',
        href: '/blinds/catalog',
        productType: 'blinds_catalog',
        hasSubmenu: true,
        submenu: [
          {
            name: 'Горизонтальные жалюзи',
            href: '/blinds/catalog/horizontal',
            productType: 'horizontal_blinds',
          },
          {
            name: 'Вертикальные жалюзи',
            href: '/blinds/catalog/vertical',
            productType: 'vertical_blinds',
          },
          {
            name: 'Рулонные шторы',
            href: '/blinds/catalog/roller',
            productType: 'roller_blinds',
          },
          {
            name: 'Плиссе',
            href: '/blinds/catalog/pleated',
            productType: 'pleated_blinds',
          },
          {
            name: 'Римские шторы',
            href: '/blinds/catalog/roman',
            productType: 'roman_blinds',
          },
        ],
      },
      {
        name: 'Управление и автоматизация',
        href: '/blinds/automation',
        productType: 'blinds_automation',
        hasSubmenu: true,
        submenu: [
          {
            name: 'Электрические жалюзи',
            href: '/blinds/automation/electric',
            productType: 'electric_blinds',
          },
          {
            name: 'Умное управление',
            href: '/blinds/automation/smart-control',
            productType: 'smart_control',
          },
          {
            name: 'Пульты управления',
            href: '/blinds/automation/remotes',
            productType: 'blinds_remotes',
          },
        ],
      },
    ],
  },
};

export function getPathForProductType(productType: string): string {
  for (const menu of Object.values(dropdownMenus)) {
    const item = menu.items.find(item => item.productType === productType);
    if (item) {
      return item.href;
    }
    for (const mainItem of menu.items) {
      if (mainItem.submenu) {
        const subItem = mainItem.submenu.find(subItem => subItem.productType === productType);
        if (subItem) {
          return subItem.href;
        }
      }
    }
  }
  return '/catalog';
}

export function getProductTypesForCategory(category: string): string[] {
  const menu = dropdownMenus[category];
  if (!menu) return [];

  const productTypes: string[] = [];

  menu.items.forEach(item => {
    if (item.productType) {
      productTypes.push(item.productType);
    }
    if (item.submenu) {
      item.submenu.forEach(subItem => {
        if (subItem.productType) {
          productTypes.push(subItem.productType);
        }
      });
    }
  });

  return productTypes;
}

export function getMenuItemByProductType(productType: string): DropdownItem | null {
  for (const menu of Object.values(dropdownMenus)) {
    for (const item of menu.items) {
      if (item.productType === productType) {
        return item;
      }
      if (item.submenu) {
        const subItem = item.submenu.find(subItem => subItem.productType === productType);
        if (subItem) {
          return subItem;
        }
      }
    }
  }
  return null;
}
