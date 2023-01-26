import { useMemo } from 'react'
import { RecipeCardItem } from './types'
import styles from './styles.module.scss'

const response = {
  overallStats: {
    allCount: 6,
    activeCount: 4,
    archivedCount: 2,
    issuesCount: 0,
  },
}

export function useRecipesCards(): RecipeCardItem[] {
  return useMemo<RecipeCardItem[]>(
    () => [
      {
        label: 'Total Recipes',
        value: response.overallStats.allCount,
        valueColor: '#8ee3e6',
        className: styles.totalRecipesCard,
      },
      {
        label: 'Active Recipes',
        value: response.overallStats.activeCount,
        valueColor: '#afd1a8',
      },
      {
        label: 'Archive Recipes',
        value: response.overallStats.archivedCount,
        valueColor: '#ababa0',
      },
      {
        label: 'Recipe Issues',
        value: response.overallStats.issuesCount,
        valueColor: '#c47c73',
      },
    ],
    []
  )
}
