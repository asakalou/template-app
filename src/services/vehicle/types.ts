import { PaginationRequest } from '../types/paginationRequest'

// these filters can be adopted to support array of values each
export type LoadVehiclesFilter = {
  brand?: string
  model?: string
  category?: string
  year?: string
}

export type LoadVehiclesParams = {
  search?: string
  filter?: LoadVehiclesFilter
  pagination: PaginationRequest
}

export interface VehicleRecord {
  id: string
  brand: string
  model: string
  category: string
  year: number
}
