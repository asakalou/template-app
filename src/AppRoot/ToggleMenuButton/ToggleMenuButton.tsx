import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { ReactElement } from 'react'
import styles from './styles.module.css'

type ToggleMenuButtonProps = {
  collapsed: boolean
  onClick: () => void
}

export function ToggleMenuButton({
  collapsed,
  onClick,
}: ToggleMenuButtonProps): ReactElement {
  const IconComponent = collapsed ? MenuUnfoldOutlined : MenuFoldOutlined

  return <IconComponent className={styles.root} onClick={onClick} />
}
