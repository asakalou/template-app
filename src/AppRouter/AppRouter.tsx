import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ReactElement } from 'react'
import { AppRoot } from '../AppRoot'
import { VehiclesPage } from '../pages/VehiclesPage'
import { BrandsPage } from '../pages/BrandsPage'
import { DashboardPage } from '../pages/DashboardPage'
import { RecipesPage } from '../pages/RecipesPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppRoot />,
    children: [
      {
        path: '/dashboard',
        element: <DashboardPage />,
      },
      {
        path: '/vehicles',
        element: <VehiclesPage />,
      },
      {
        path: '/brands',
        element: <BrandsPage />,
      },
      {
        path: '/recipes',
        element: <RecipesPage />,
      },
    ],
  },
])
export function AppRouter(): ReactElement {
  return <RouterProvider router={router} />
}
