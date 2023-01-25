import { ReactElement } from 'react'
import { LoadVehiclesFilter } from '../../../services/vehicle'
import { Filter, FilterConfig } from '../../../components/Filter'

type VehiclesFilterProps = {
  value: LoadVehiclesFilter
  onChange: (value: LoadVehiclesFilter) => void
}

const filterConfig: FilterConfig = [
  {
    type: 'input',
    placeholder: 'Name',
    field: 'name',
  },
]

export function BrandsFilter({
  value,
  onChange,
}: VehiclesFilterProps): ReactElement {
  return <Filter config={filterConfig} value={value} onChange={onChange} />
}
