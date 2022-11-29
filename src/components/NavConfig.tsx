import { Docs, Help, History, Lock, Mainpage, Settings, Suubar } from './icons'

const navConfig = [
  {
    title: 'SuuBar',
    path: '/suubar',
    icon: <Suubar />,
  },
  {
    title: 'Главная страница',
    path: '/home',
    icon: <Mainpage />,
  },
  {
    title: 'История',
    path: '/history',
    icon: <History />,
  },
  {
    title: 'Отчетность',
    path: '/dashboard/blog',
    icon: <Lock />,
  },
  {
    title: 'Регистрация/Вход',
    path: '/login',
    icon: <Docs />,
  },
  {
    title: 'Настройки',
    path: '/register',
    icon: <Settings />,
  },
  {
    title: 'Помощь',
    path: '/register',
    icon: <Help />,
  },
]

export default navConfig
