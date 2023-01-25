export const paginate = <T>(items: T[], page = 0, pageSize = 10) => {
  const offset = pageSize * page
  const totalPages = Math.ceil(items.length / pageSize)
  const content = items.slice(offset, pageSize * (page + 1))

  return {
    content,
    page,
    count: content.length,
    totalPages,
    totalCount: items.length,
  }
}
