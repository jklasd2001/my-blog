/**
 * https://www.gatsbyjs.com/plugins/gatsby-plugin-image
 */

import { StaticImage } from 'gatsby-plugin-image'

import { Seo, Layout, Container } from 'src/components'
import { Divider } from 'src/elements'

const IndexPage = () => {
  return (
    <Layout>
      <Container
        type="main"
        className="prose px-8 py-20 dark:prose-invert md:prose-base md:px-0 lg:prose-xl"
      >
        <div>
          <h1 id="about" className="font-bold">
            안녕하세요!
            <br /> 프론트엔드 개발자 <br />
            김영수입니다.
          </h1>

          <div className="text-right">
            <small>Updated at: 2022-12-10</small>
          </div>
        </div>

        <Divider />

        <div>
          <h2>🙋🏻‍♂️ Introduce</h2>

          <div className="mb-12 flex flex-col gap-2 md:flex-row md:gap-16">
            <StaticImage
              src="../assets/images/my-profile.jpg"
              alt="Profile"
              formats={['auto']}
              className="h-48 w-48 rounded-full shadow-lg ring-8 ring-slate-900 ring-opacity-5 "
            />

            <div className="flex flex-1 items-center justify-center">
              <ul className="list-disc">
                <li>
                  <span>Email | </span>
                  <a href="mailto:jklasd2001@gmail.com">jklasd2001@gmail.com</a>
                </li>

                <li>
                  <span>Github | </span>
                  <a href="https://github.com/jklasd2001" target="_blank" rel="noreferrer">
                    https://github.com/jklasd2001
                  </a>
                </li>

                <li>
                  <span>Notion | </span>
                  <a
                    href="https://www.notion.so/youngsukim/FE-feab96e0d6ea49cd99a67858a43e868a"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://www.notion.so/youngsukim/FE-feab96e0d6ea49cd99a67858a43e868a
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <ul className="list-disc">
            <li>5년 차, 프론트엔드 개발자 김영수입니다.</li>

            <li>(주)무스마 SW 개발팀에서 FE 파트 리딩 및 애플리케이션 개발을 담당하고 있습니다.</li>

            <li>반복되거나 중복되는 작업 및 코드를 간소화 시키는 작업을 좋아합니다.</li>

            <li>
              사람이 굳이 하지 않고 컴퓨터가 대신 할 수 있는 것들은 자동화하여 휴먼 에러를
              방지하려고 노력하고 있습니다.
            </li>

            <li>새로운 기술과 트렌드를 학습하고 적용해보는 것을 좋아합니다.</li>
          </ul>
        </div>

        <Divider />

        <div>
          <h2>🏢 Experiences</h2>

          <div>
            <h3>
              <a href="https://musma.net" target="_blank" rel="noreferrer">
                (주)무스마
              </a>
            </h3>

            <p className="mb-10">
              건설현장의 근로자 안전 및 중장비, 건설 자재 관리 및 모니터링 서비스 스타트업
            </p>

            <div className="flex flex-col gap-16 md:flex-row">
              <div className="w-[240px]">
                <div>
                  <strong>Frontend Developer</strong>
                </div>
                <small>기간: 2019.05.27 ~ 현재 재직 중</small>
              </div>

              <div className="flex-1">
                <div className="mb-10">
                  <h3 className="m-0">
                    <a href="https://developers.musma.net" target="_blank" rel="noreferrer">
                      공통 라이브러리 개발
                    </a>
                  </h3>
                  <small>2022.04 ~ 현재</small>

                  <h3>Description</h3>

                  <p className="mb-4">
                    생산성 향상을 위해 UI 컴포넌트, SVG 컴포넌트, 공통 함수 및 React Hooks, ESLint
                    Configuration들을 라이브러리로 만들어 배포 및 유지보수하고 있습니다.
                  </p>

                  <h3>Work</h3>

                  <ul className="mb-10">
                    <li>
                      UI의 일관성과 생산성을 높이기 위해 디자인 시스템 정립 및 UI 컴포넌트
                      라이브러리 개발 및 Github Packages 배포 및 관리
                    </li>

                    <li>SVG 컴포넌트 라이브러리 개발 및 Github Packages에 배포 및 관리</li>

                    <li>
                      함수 및 React Hooks를 모아놓은 라이브러리 개발 및 Github Packages에 배포 및
                      관리
                    </li>

                    <li>
                      무스마 ESLint Configuration 라이브러리를 Github Packages에 배포 및 모든
                      프로젝트에 적용
                    </li>

                    <li>
                      프로젝트 초기 구성을 쉽게 하기 위해 React, Emotion, Vite를 사용한 Template
                      repository 생성 및 관리
                    </li>
                  </ul>

                  <h3>Tech Stack</h3>
                  <p>React, Emotion, Typescript, @svgr/cli</p>
                </div>

                <Divider />

                <div>
                  <h3>현대중공업 - 중장비 모니터링 시스템</h3>
                  <span className="mb-4 block">2021.10 ~ 2022.05</span>

                  <h3>Description</h3>
                  <p className="mb-4">
                    현대중공업의 여러 건설현장에서 운용중인 중장비의 실시간 위치 및 엔진 상태,
                    배터리, 적재량 등의 가동 정보 모니터링 서비스입니다.
                  </p>

                  <h3>Work</h3>

                  <ul className="mb-10">
                    <li>
                      Button, Input, Textarea, Modal 등 UI 간의 일관성을 맞추고 생산성을 향상을 위해
                      UI 컴포넌트를 라이브러리화하여 NPM 배포
                    </li>

                    <li>Storybook을 사용하여 컴포넌트 테스트 작성</li>

                    <li>Cypress로 테스트 코드 작성하여 코드 커버리지(0% → 30%)</li>

                    <li>Tailwind CSS 도입으로 개발 시간 단축</li>
                  </ul>

                  <h3>Tech Stack</h3>
                  <p>React, Tailwind CSS, Mobx, Typescript, Cypress, Storybook</p>
                </div>

                <Divider />

                <div>
                  <h2>삼성엔지니어링 - 근로자, 중장비, 자재 관리 모니터링 시스템(MCAS)</h2>
                  <span className="mb-4 block">2020.05 ~ 현재</span>

                  <h3>Description</h3>
                  <p className="mb-4">
                    건설 현장의 근로자, 중장비, 자재의 실시간 위치 및 이동 히스토리, 작업 시간등의
                    통계를 볼 수 있는 관리 모니터링 서비스입니다.
                  </p>

                  <h3>Work</h3>

                  <ul className="mb-10">
                    <li>생산성 향상을 위해 코딩 컨벤션 및 폴더, 컴포넌트 구조 정립</li>

                    <li>
                      React Native를 이용하여 Android 앱 개발 및{' '}
                      <a
                        href="https://play.google.com/store/apps/details?id=com.mcasreactnative.lsp&hl=en&gl=US"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Google Play Store 출시
                      </a>
                    </li>

                    <li>Github Action을 이용하여 APK 빌드 및 PlayStore 배포 자동화</li>
                  </ul>

                  <h3>Tech Stack</h3>
                  <p>React, Material-UI, Mobx, Socket.io, Typescript</p>
                </div>

                <Divider />

                <div>
                  <h3>삼성중공업 - 화물창 온습도 모니터링 시스템</h3>
                  <span className="">2019.06 ~ 2020.01</span>

                  <h3>Description</h3>

                  <p className="mb-4">
                    선박안에 있는 화물창의 온/습도를 모니터링 할 수 있으며, 공조기를 제어하여 원하는
                    온/습도로 맞출 수 있는 시스템입니다.
                  </p>

                  <h3>Work</h3>

                  <ul className="mb-10">
                    <li>Context API + Mobx를 사용하여 스토어 디자인</li>

                    <li>Socket.io를 이용하여 화물창의 실시간 온/습도 및 상태 모니터링 기능 개발</li>
                  </ul>

                  <h3>Tech Stack</h3>

                  <p>React, Material-UI, Mobx, Socket.io, Typescript</p>
                </div>
              </div>
            </div>
          </div>

          <Divider />

          <div>
            <h3>(주)탐생</h3>

            <p className="mb-10">
              에듀테크 스타트업으로 공부시간 측정 기능을 기반으로 한 학습 애플리케이션 StudyHelper
              출시
            </p>

            <div className="flex gap-16">
              <div className="w-[240px]">
                <div>
                  <strong>Android Developer</strong>
                </div>
                <small>기간: 2017.05 - 2019.04</small>
              </div>

              <div className="flex-1">
                <div className="mb-10">
                  <h3 className="m-0">스터디헬퍼 v4 개발</h3>
                  <span className="mb-4 block">2017.07 ~ 2018.10</span>

                  <h3>Description</h3>
                  <p className="mb-4">
                    설정한 시간까지 스마트폰을 사용하지 못하게 하는 잠금 기능과 시간 측정 기능으로
                    공부 시간에 집중을 도와주는 모바일 앱입니다.
                  </p>

                  <h3>Work</h3>

                  <ul className="mb-10">
                    <li>
                      입사 직후 스터디 헬퍼 리뉴얼 프로젝트를 담당하여 개발 시작부터, Google Play
                      스토어 배포까지 경험
                    </li>

                    <li>안드로이드 UI 개발 80% 개발</li>
                  </ul>

                  <h3>Tech Stack</h3>
                  <p>Android, Java, DataBinding, Volley</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Divider />

        <div>
          <h2>🛠️ Skills</h2>

          <h3>Frontend</h3>
          <ul className="mb-10">
            <li>HTML/CSS3</li>

            <li>Typescript</li>

            <li>React, Next.js, React-Native</li>

            <li>
              CSS: <strong>Emotion</strong>, Tailwind CSS
            </li>

            <li>상태관리 라이브러리: Mobx</li>

            <li>
              번들러: <strong>Vite</strong>, Rollup
            </li>

            <li>
              Node 패키지 매니저: <strong>Pnpm</strong>, Yarn
            </li>

            <li>CI/CD: AWS Amplify, Github Actions</li>
          </ul>

          <h3>Collaboration & Tool</h3>
          <ul>
            <li>개발도구: Visual Studio Code</li>

            <li>메신저: Slack</li>

            <li>
              생산성 도구: <strong>Notion</strong>, Jira
            </li>

            <li>
              Git GUI: <strong>Fork</strong>, Sourcetree
            </li>

            <li>
              디자인 협업 툴: <strong>Figma</strong>, Zeplin
            </li>
          </ul>
        </div>

        <Divider />

        <div>
          <h2>👨🏼‍🎓 Education</h2>

          <StaticImage
            src="../assets/images/cup_emblem.jpg"
            alt="Profile"
            className="mb-6 h-24 w-24 rounded-full shadow-lg ring-8 ring-slate-900 ring-opacity-5"
          />

          <span className="block font-semibold">부산가톨릭대학교 컴퓨터공학과(학사)</span>

          <small className="block">기간: 2010.03 ~ 2017.02</small>
        </div>

        <Divider />

        <div>
          <h2>🎖️ Certification</h2>

          <span className="font-semibold">정보처리기사 취득(한국산업인력공단)</span>

          <small className="block">취득일: 2016-07</small>
        </div>
      </Container>
    </Layout>
  )
}

// www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
export const Head = () => <Seo title="About Me" />

export default IndexPage
