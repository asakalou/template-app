import { LoadBrandsParams, BrandRecord } from './types'
import { PaginationResponse } from '../types/paginationResponse'
import { generateResponse } from './mockData'

class BrandService {
  loadBrands = (
    params: LoadBrandsParams
  ): Promise<PaginationResponse<BrandRecord>> =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(generateResponse(params))
      }, 1500)
    })
}

export const brandService = new BrandService()
