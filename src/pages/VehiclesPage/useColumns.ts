import type { ColumnsType } from 'antd/es/table'
import { useMemo } from 'react'
import { VehicleRecord } from '../../services/vehicle'

export const useColumns = (): ColumnsType<VehicleRecord> =>
  useMemo<ColumnsType<VehicleRecord>>(
    () => [
      {
        title: 'Brand',
        dataIndex: 'brand',
        key: 'brand',
        render: (text) => text,
      },
      {
        title: 'Model',
        dataIndex: 'model',
        key: 'model',
        render: (text) => text,
      },
      {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
        render: (text) => text,
      },
      {
        title: 'Year',
        dataIndex: 'year',
        key: 'year',
        render: (text) => text,
      },
    ],
    []
  )
