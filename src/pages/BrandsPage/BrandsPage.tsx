import { Table } from 'antd'
import { ReactElement } from 'react'
import { useData } from './useData'
import { useColumns } from './useColumns'
import { BrandsFilter } from './BrandsFilter'
import { Page } from '../../components/Page'
import { Search } from '../../components/Search'

export function BrandsPage(): ReactElement {
  const { data, pagination, filter, search, loading } = useData()
  const columns = useColumns()

  return (
    <Page title="Brands">
      <Search
        placeholder="Search..."
        value={search.value}
        onChange={search.onChange}
      />
      <BrandsFilter value={filter.value} onChange={filter.onChange} />
      <Table
        loading={loading}
        columns={columns}
        rowKey="name"
        dataSource={data}
        pagination={pagination}
      />
    </Page>
  )
}
