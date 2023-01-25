import { PropsWithChildren, ReactElement } from 'react'
import { Typography } from 'antd'

type PageProps = PropsWithChildren<{
  title: string
}>

export function Page({ title, children }: PageProps): ReactElement {
  return (
    <div>
      <Typography.Title level={2}>{title}</Typography.Title>
      {children}
    </div>
  )
}
