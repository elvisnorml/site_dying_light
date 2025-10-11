export const menuItems = [
  {
    name: 'Главная',
    link: '/'
  },
  {
    name: 'Сюжет',
    link: '/story',
    subItems: [
      { name: 'О сюжете', link: 'story1' },
      { name: 'Галерея', link: 'story2' },
      { name: 'Фракции', link: 'story3' },
      { name: 'События', link: 'story4' }
    ]
  },
  {
    name: 'Геймплей',
    link: '/gameplay',
    subItems: [
      { name: 'О геймплее', link: 'gameplay1' },
      { name: 'Механики', link: 'gameplay2' },
      { name: 'Персонаж', link: 'gameplay3' },
      { name: 'Выживание', link: 'gameplay4' }
    ]
  },
  {
    name: 'Оружие',
    link: '/weapons',
    subItems: [
      { name: 'О оружии', link: 'weapons1' },
      { name: 'Инвентарь', link: 'weapons2' }
    ]
  },
  {
    name: 'Карта',
    link: '/map',
    subItems: [
      { name: 'О карте', link: 'map1' },
      { name: 'Старый город', link: 'map2' },
      { name: 'Слумы', link: 'map3' },
      { name: 'Антенна', link: 'map4' },
      { name: 'Пригород', link: 'map5' }
    ]
  },
  {
    name: 'Новости',
    link: '/news'
  },
  {
    name: 'Галерея',
    link: '/gallery'
  }
]
