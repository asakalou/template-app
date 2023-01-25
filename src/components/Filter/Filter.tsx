import { ReactElement } from 'react'
import { FilterConfig } from './types'
import { InputFilterItem } from './InputFilterItem'
import styles from './styles.module.css'

type FilterProps = {
  config: FilterConfig
  value: Record<string, string>
  onChange: (value: Record<string, unknown>) => void
}

export function Filter({ config, value, onChange }: FilterProps): ReactElement {
  const handleChange = (field: string, fieldValue: string) => {
    onChange({
      ...value,
      [field]: fieldValue,
    })
  }

  return (
    <div className={styles.root}>
      {config.map((configItem) => {
        switch (configItem.type) {
          case 'input':
            return (
              <InputFilterItem
                key={configItem.field}
                placeholder={configItem.placeholder}
                value={value[configItem.field]}
                onChange={(fieldValue) =>
                  handleChange(configItem.field, fieldValue)
                }
              />
            )
          default:
            return null
        }
      })}
    </div>
  )
}
