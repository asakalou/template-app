import { ReactElement } from 'react'
import { Tag } from 'antd'
import { Page } from '../../components/Page'
import { Cards } from './Cards'

export function RecipesPage(): ReactElement {
  return (
    <Page title="Recipes">
      <div>
        <p>Demo of the recipes.</p>
        <p>
          Icon insertion is done via pseudo element and all styling for{' '}
          <Tag>active</Tag>
          state in the card with icons is done based on the <Tag>data</Tag>{' '}
          attributes. In case Card with icon is something usual we could do this
          in scope of the component styles and do not make any overrides outside
          (we won&apos;t need data attributes). This is example just shows how
          we can utilize pseudo element to add some markup.
        </p>
        <p>
          In case we want to go with external class and pseudo element we should
          expose css variable for <Tag>active</Tag> state background color, font
          color.
        </p>
      </div>
      <hr />
      <Cards />
    </Page>
  )
}
