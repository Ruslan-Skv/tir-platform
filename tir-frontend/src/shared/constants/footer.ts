export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface CompanyInfo {
  workingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  phone: string;
  email: string;
  developer: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
  ariaLabel: string;
}

export interface SocialLinks {
  vk: SocialLink;
}

export const companyInfo: CompanyInfo = {
  workingHours: {
    weekdays: 'пн-пт: 11-19',
    saturday: 'сб: 12-16',
    sunday: 'вс: выходной',
  },
  phone: '8 (8152) 60-12-70',
  email: 'skvirya@mail.ru',
  developer: 'ИП Сквиря Р.В.',
};

export const footerSections: FooterSection[] = [
  {
    title: 'О нас',
    links: [
      { name: 'Контакты', href: '/contacts' },
      { name: 'Наши работы', href: '/portfolio' },
      { name: 'Вакансии', href: '/careers' },
    ],
  },
  {
    title: 'Каталог',
    links: [
      { name: 'Ремонт квартир', href: '/repair' },
      { name: 'Двери', href: '/doors' },
      { name: 'Окна', href: '/windows' },
      { name: 'Потолки', href: '/ceilings' },
      { name: 'Жалюзи', href: '/blinds' },
      { name: 'Мебель', href: '/furniture' },
      { name: 'Акции', href: '/sales' },
    ],
  },
];

export const socialLinks: SocialLinks = {
  vk: {
    name: 'ВКонтакте',
    href: 'https://vk.com/pskpobeda',
    icon: '/images/icons-vk.png',
    ariaLabel: 'ВКонтакте',
  },
};
