export type TablePagination = {
  current: number
  pageSize: number
  total: number
  onChange: (page: number, pageSize: number) => void
}

export type TableFilter<V> = {
  value: V
  onChange: (value: V) => void
}

export type TableSearch = {
  value?: string
  onChange: (value: string) => void
}
