/**
 * https://www.gatsbyjs.com/plugins/gatsby-plugin-image
 */
import { StaticImage } from 'gatsby-plugin-image'

import { Seo, Layout, Divider } from 'src/components'

const IndexPage = () => (
  <Layout className="">
    <h1 id="about" className="">
      안녕하세요!
      <br /> 프론트엔드 개발자 김영수입니다.
    </h1>
    <div className="text-right">
      <i className="text-sm">Updated at: 2022-11-09</i>
    </div>
    <p>
      현재 [(주)무스마](https://www.musma.net/) SW 개발팀에서 FE 파트 리딩 및 애플리케이션 개발을
      담당하고 있습니다. - 반복되거나 중복되는 작업 및 코드를 간소화 시키는 작업을 좋아합니다. -
      새로운 기술과 트렌드를 학습하고 적용해보려 노력하고 있습니다.
    </p>

    <StaticImage
      src="../images/my-profile.jpeg"
      alt="Profile"
      className="rounded-full w-32 h-32 shadow-lg"
    />
    <Divider />
    <h1 id="">Experiences</h1>
    <p>
      생산성 향상을 위해 UI 컴포넌트, SVG 컴포넌트, 공통 함수 및 React Hooks, ESLint
      Configuration들을 라이브러리로 만들어 배포 및 유지보수했습니다.
    </p>
    <h4>Musma</h4>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
