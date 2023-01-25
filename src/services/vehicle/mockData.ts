import { PaginationResponse } from '../types/paginationResponse'
import { LoadVehiclesParams, VehicleRecord } from './types'
import { cars } from '../../__data__/cars'
import { paginate } from '../../__data__/paginate'

export const generateResponse = ({
  search,
  filter,
  pagination,
}: LoadVehiclesParams): PaginationResponse<VehicleRecord> => {
  const filteredResult = cars.filter((car) => {
    const { id, ...values } = car

    const searched = !search
      ? true
      : !!Object.values(values).find((value) =>
          value.toString().toLowerCase().includes(search.toLowerCase())
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
            car[filterKey].toString().toLowerCase() ===
              // @ts-ignore
              filter[filterKey].toLowerCase()
          )
        }

        return result
      }, true)
    }

    return true
  })

  return paginate(filteredResult, pagination.page, pagination.pageSize)
}
