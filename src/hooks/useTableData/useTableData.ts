import { useCallback, useEffect, useMemo, useState } from 'react'
import { PaginationResponse } from '../../services/types/paginationResponse'
import { PaginationRequest } from '../../services/types/paginationRequest'
import { TableFilter, TablePagination, TableSearch } from './types'

export type UseTableDataResult<R, F> = {
  data: R[]
  pagination: TablePagination
  filter: TableFilter<F>
  search: TableSearch
  loading: boolean
}

type UseDataParams<R, F> = {
  requestData: (params: {
    filter?: F
    search?: string
    pagination: PaginationRequest
  }) => Promise<PaginationResponse<R>>
}

export const useTableData = <R, F extends Record<string, unknown>>({
  requestData,
}: UseDataParams<R, F>): UseTableDataResult<R, F> => {
  const [loading, setLoading] = useState(true)
  const [result, setResult] = useState<PaginationResponse<R>>({
    content: [],
    totalPages: 0,
    totalCount: 0,
    page: 0,
    count: 0,
  })
  const [pagination, setPagination] = useState<PaginationRequest>({
    page: 0,
    pageSize: 10,
  })
  const [filter, setFilter] = useState<F>({} as F)
  const [search, setSearch] = useState<string>('')

  const tablePagination = useMemo<TablePagination>(
    () => ({
      total: result.totalCount,
      pageSize: pagination.pageSize,
      current: pagination.page + 1,
      onChange: (page, pageSize) => setPagination({ page: page - 1, pageSize }),
    }),
    [result.totalCount, pagination.pageSize, pagination.page]
  )

  const handleFilterChange = useCallback((value: F) => setFilter(value), [])
  const handleSearchChange = useCallback(
    (value: string) => setSearch(value),
    []
  )

  const loadData = useCallback(async () => {
    setLoading(true)

    const response = await requestData({
      pagination,
      filter,
      search,
    })

    setResult(response)
    setLoading(false)
  }, [pagination, filter, search])

  useEffect(() => {
    loadData()
  }, [loadData])

  return {
    data: result.content,
    pagination: tablePagination,
    filter: {
      value: filter,
      onChange: handleFilterChange,
    },
    search: {
      value: search,
      onChange: handleSearchChange,
    },
    loading,
  }
}
