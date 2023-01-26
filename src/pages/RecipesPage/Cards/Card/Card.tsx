import { ReactNode } from 'react'
import cx from 'classnames'
import styles from './styles.module.css'

type CardProps = {
  className?: string
  label: ReactNode
  value: number
  valueColor: string
  active?: boolean
  onClick: () => void
}
export function Card({
  active,
  className,
  value,
  label,
  valueColor,
  onClick,
}: CardProps) {
  return (
    <button
      type="button"
      className={cx(styles.root, className)}
      data-card-active={active}
      onClick={onClick}
    >
      <div
        data-card-content=""
        className={cx(styles.content, active && styles.active, 'card-content')}
      >
        <div className={styles.value} style={{ color: valueColor }}>
          {value}
        </div>
        <div className={styles.label}>{label}</div>
      </div>
    </button>
  )
}
