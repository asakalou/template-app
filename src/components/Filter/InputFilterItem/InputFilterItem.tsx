import { ReactElement } from 'react'
import { Input } from 'antd'

type InputFilterItemProps = {
  placeholder?: string
  value: string
  onChange: (value: string) => void
}
export function InputFilterItem({
  placeholder,
  value,
  onChange,
}: InputFilterItemProps): ReactElement {
  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}
