import {
  LoadBrandsFilter,
  BrandRecord,
  brandService,
} from '../../services/brand'
import { useTableData, UseTableDataResult } from '../../hooks/useTableData'

export const useData = (): UseTableDataResult<BrandRecord, LoadBrandsFilter> =>
  useTableData<BrandRecord, LoadBrandsFilter>({
    requestData: ({ filter, search, pagination }) =>
      brandService.loadBrands({
        filter,
        search,
        pagination,
      }),
  })
