import { Layout, theme } from 'antd'
import { ReactElement, useState } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './styles.module.css'
import { SideMenu } from './SideMenu'
import { ToggleMenuButton } from './ToggleMenuButton'

const { Header, Content } = Layout
export function AppRoot(): ReactElement {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Layout className={styles.root}>
      <SideMenu collapsed={collapsed} />

      <Layout className="site-layout">
        <Header
          className={styles.header}
          style={{ background: colorBgContainer }}
        >
          <ToggleMenuButton
            collapsed={collapsed}
            onClick={() => setCollapsed(!collapsed)}
          />
        </Header>
        <Content
          className={styles.content}
          style={{ background: colorBgContainer }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
