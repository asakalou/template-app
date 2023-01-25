import { LoadVehiclesParams, VehicleRecord } from './types'
import { PaginationResponse } from '../types/paginationResponse'
import { generateResponse } from './mockData'

class VehicleService {
  loadVehicles = (
    params: LoadVehiclesParams
  ): Promise<PaginationResponse<VehicleRecord>> =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(generateResponse(params))
      }, 1500)
    })
}

export const vehicleService = new VehicleService()
