export type PaginationResponse<T> = {
  content: T[]
  page: number
  count: number
  totalPages: number
  totalCount: number
}
