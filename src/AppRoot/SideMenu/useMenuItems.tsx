import { ItemType } from 'antd/es/menu/hooks/useItems'
import { useMemo } from 'react'
import {
  UserOutlined,
  CarOutlined,
  DingdingOutlined,
  OrderedListOutlined,
} from '@ant-design/icons'
import { Link } from 'react-router-dom'

export const useMenuItems = (): ItemType[] =>
  useMemo(
    () => [
      {
        key: 'dashboard',
        icon: <UserOutlined />,
        label: <Link to="/dashboard">Dashboard</Link>,
      },
      {
        key: 'vehicles',
        icon: <CarOutlined />,
        label: <Link to="/vehicles">Vehicles</Link>,
      },
      {
        key: 'brands',
        icon: <DingdingOutlined />,
        label: <Link to="/brands">Brands</Link>,
      },
      {
        key: 'recipes',
        icon: <OrderedListOutlined />,
        label: <Link to="/recipes">Recipes</Link>,
      },
    ],
    []
  )
