import { PaginationRequest } from '../types/paginationRequest'

// these filters can be adopted to support array of values each
export type LoadBrandsFilter = {
  brand?: string
  model?: string
  category?: string
  year?: string
}

export type LoadBrandsParams = {
  search?: string
  filter?: LoadBrandsFilter
  pagination: PaginationRequest
}

export interface BrandRecord {
  name: string
  logo: string
}
