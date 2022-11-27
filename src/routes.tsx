import { Navigate, useRoutes } from 'react-router-dom'
import { Home } from './pages/Home'
import { RootLayout } from './layout/RootLayout'
import { SuuBar } from './pages/SuuBar'
import { Page404 } from './pages/Page404'

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { path: 'home', element: <Home /> },
        { path: 'suubar', element: <SuuBar /> },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to='/404' /> },
      ],
    },
    {
      path: '/',
      element: <Navigate to='suubar' replace />,
      index: true,
    },
    { path: '*', element: <Navigate to='/404' replace /> },
  ])
}
