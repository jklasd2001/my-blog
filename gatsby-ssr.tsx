// import { Fragment } from 'react'

import type { GatsbySSR } from 'gatsby'

export const onRenderBody: GatsbySSR['onRenderBody'] = ({ setHtmlAttributes }, plguinOptions) => {
  setHtmlAttributes({ lang: `en` })
}

// export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({ element }) => {
//   return <Fragment />
// }
