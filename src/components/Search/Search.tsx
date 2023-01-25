import { ChangeEventHandler, ReactElement, useCallback } from 'react'
import { Input } from 'antd'
import styles from './styles.module.css'

type SearchProps = {
  placeholder?: string
  value?: string
  onChange: (value: string) => void
}
export function Search({
  placeholder,
  value,
  onChange,
}: SearchProps): ReactElement {
  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => onChange(e.target.value),
    [onChange]
  )

  return (
    <Input
      className={styles.root}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  )
}
