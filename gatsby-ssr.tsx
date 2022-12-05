import type { GatsbySSR } from 'gatsby'

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
  setHtmlAttributes,
  setPreBodyComponents,
}) => {
  const script = `
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const savedTheme = localStorage.getItem('theme');

  const theme = savedTheme || (darkQuery.matches ? 'dark' : 'light');

  if(theme === 'dark') {
    document.body.classList.add('dark');
    return
  };
  `

  setPreBodyComponents([
    <script key={'darkmode-script'} dangerouslySetInnerHTML={{ __html: script }} />,
  ])

  setHtmlAttributes({ lang: `en` })
}

// export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({ element }) => {
//   return <Fragment />
// }
