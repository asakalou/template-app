import { PaginationResponse } from '../types/paginationResponse'
import { LoadBrandsParams, BrandRecord } from './types'
import { brands } from '../../__data__/brands'
import { paginate } from '../../__data__/paginate'

export const generateResponse = ({
  search,
  filter,
  pagination,
}: LoadBrandsParams): PaginationResponse<BrandRecord> => {
  const filteredResult = brands.filter((brand) => {
    const searched = !search
      ? true
      : Object.values(brand).find((value) =>
          `${value}`.toLowerCase().includes(search.toLowerCase())
        )

    if (!searched) {
      return false
    }

    if (filter) {
      return Object.keys(filter).reduce((result, filterKey) => {
        // @ts-ignore
        if (filter[filterKey] !== '') {
          return (
            result &&
            // @ts-ignore
            brand[filterKey].toLowerCase() === filter[filterKey].toLowerCase()
          )
        }

        return result
      }, true)
    }

    return true
  })

  return paginate(filteredResult, pagination.page, pagination.pageSize)
}
