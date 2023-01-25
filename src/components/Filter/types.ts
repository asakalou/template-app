type InputFilterItemConfig = {
  type: 'input'
  placeholder?: string
  field: string
}

type DropdownFilterItemConfig = {
  type: 'dropdown'
  field: string
}

export type FilterItemConfig = InputFilterItemConfig | DropdownFilterItemConfig

export type FilterConfig = Array<FilterItemConfig>
