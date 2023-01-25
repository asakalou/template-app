import { Layout, Menu } from 'antd'
import { ReactElement } from 'react'
import styles from '../styles.module.css'
import { useMenuItems } from './useMenuItems'

type SideMenuProps = {
  collapsed: boolean
}

export function SideMenu({ collapsed }: SideMenuProps): ReactElement {
  const menuItems = useMenuItems()

  return (
    <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
      <div className={styles.logo} />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={menuItems}
      />
    </Layout.Sider>
  )
}
