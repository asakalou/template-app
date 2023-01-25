import type { ColumnsType } from 'antd/es/table'
import { useMemo } from 'react'
import { BrandRecord } from '../../services/brand'

export const useColumns = (): ColumnsType<BrandRecord> =>
  useMemo<ColumnsType<BrandRecord>>(
    () => [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => text,
      },
    ],
    []
  )
