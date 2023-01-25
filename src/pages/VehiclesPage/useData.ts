import {
  LoadVehiclesFilter,
  VehicleRecord,
  vehicleService,
} from '../../services/vehicle'
import { useTableData, UseTableDataResult } from '../../hooks/useTableData'

export const useData = (): UseTableDataResult<
  VehicleRecord,
  LoadVehiclesFilter
> =>
  useTableData<VehicleRecord, LoadVehiclesFilter>({
    requestData: ({ filter, search, pagination }) =>
      vehicleService.loadVehicles({
        filter,
        search,
        pagination,
      }),
  })
