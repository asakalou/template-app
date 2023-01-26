import { ReactElement, useCallback, useState } from 'react'
import { useRecipesCards } from './useRecipesCards'
import styles from './styles.module.scss'
import { Card } from './Card'

export function Cards(): ReactElement {
  const [activeTabIndex, setActiveTabIndex] = useState<number>()
  const items = useRecipesCards()
  const handleClick = useCallback(
    (index: number) => setActiveTabIndex(index),
    []
  )

  return (
    <div className={styles.root}>
      <div className={styles.title}>Recipes</div>
      <div className={styles.list}>
        {items.map(({ className, value, label, valueColor }, index) => (
          <Card
            key={label}
            className={className}
            value={value}
            label={label}
            active={index === activeTabIndex}
            valueColor={valueColor}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  )
}
