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
    placeholder: 'Brand',
    field: 'brand',
  },
  {
    type: 'input',
    placeholder: 'Model',
    field: 'model',
  },
  {
    type: 'input',
    placeholder: 'Year',
    field: 'year',
  },
]

export function VehiclesFilter({
  value,
  onChange,
}: VehiclesFilterProps): ReactElement {
  return <Filter config={filterConfig} value={value} onChange={onChange} />
}
