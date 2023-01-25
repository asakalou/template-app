import { Table } from 'antd'
import { ReactElement } from 'react'
import { useData } from './useData'
import { useColumns } from './useColumns'
import { VehiclesFilter } from './VehiclesFilter'
import { Page } from '../../components/Page'
import { Search } from '../../components/Search'

export function VehiclesPage(): ReactElement {
  const { data, pagination, filter, search, loading } = useData()
  const columns = useColumns()

  return (
    <Page title="Vehicles">
      <Search
        placeholder="Search..."
        value={search.value}
        onChange={search.onChange}
      />
      <VehiclesFilter value={filter.value} onChange={filter.onChange} />
      <Table
        loading={loading}
        columns={columns}
        rowKey="id"
        dataSource={data}
        pagination={pagination}
      />
    </Page>
  )
}
