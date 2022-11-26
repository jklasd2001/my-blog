/**
 * https://www.gatsbyjs.com/plugins/gatsby-plugin-image
 */

import { StaticImage } from 'gatsby-plugin-image'

import { Seo, Layout, Row, MyLink } from 'src/components'
import { Box, Span, ListItem, Divider, Strong, List, Heading, Paragraph } from 'src/elements'

const IndexPage = () => {
  return (
    <Layout>
      <Row>
        <Heading type="h1" id="about">
          안녕하세요!
          <br /> 프론트엔드 개발자 김영수입니다.
        </Heading>
        <Box className="text-right">
          <Span className="text-md">Updated at: 2022-11-21</Span>
        </Box>
      </Row>

      <Row>
        <Heading type="h1">🙋🏻‍♂️ Introduce</Heading>

        <Box className="flex gap-16 mb-12">
          <StaticImage
            src="../assets/images/my-profile.jpg"
            alt="Profile"
            formats={['auto']}
            className="rounded-full w-48 h-48 shadow-lg ring-8 ring-slate-900 ring-opacity-5"
          />

          <Box className="flex-1 flex justify-center items-center">
            <List>
              <ListItem>
                <Span className="text-xl font-medium">Email | </Span>
                <MyLink href="mailto:jklasd2001@gmail.com">jklasd2001@gmail.com</MyLink>
              </ListItem>

              <ListItem>
                <Span className="text-xl font-medium">Github | </Span>
                <MyLink href="https://github.com/jklasd2001" target="_blank">
                  https://github.com/jklasd2001
                </MyLink>
              </ListItem>

              <ListItem>
                <Span className="text-xl font-medium">Notion | </Span>
                <MyLink
                  href="https://www.notion.so/youngsukim/FE-feab96e0d6ea49cd99a67858a43e868a"
                  target="_blank"
                >
                  https://www.notion.so/youngsukim/FE-feab96e0d6ea49cd99a67858a43e868a
                </MyLink>
              </ListItem>
            </List>
          </Box>
        </Box>

        <List>
          <ListItem>5년 차, 프론트엔드 개발자 김영수입니다.</ListItem>

          <ListItem>
            (주)무스마 SW 개발팀에서 FE 파트 리딩 및 애플리케이션 개발을 담당하고 있습니다.
          </ListItem>

          <ListItem>반복되거나 중복되는 작업 및 코드를 간소화 시키는 작업을 좋아합니다.</ListItem>

          <ListItem>
            사람이 굳이 하지 않고 컴퓨터가 대신 할 수 있는 것들은 자동화하여 휴먼 에러를 방지하려고
            노력하고 있습니다.
          </ListItem>

          <ListItem>새로운 기술과 트렌드를 학습하고 적용해보는 것을 좋아합니다.</ListItem>
        </List>
      </Row>

      <Row>
        <Heading type="h1">🏢 Experiences</Heading>

        <Box>
          <Heading type="h3">
            <MyLink href="https://musma.net" target="_blank">
              (주)무스마
            </MyLink>
          </Heading>

          <Paragraph className="mb-10">
            건설현장의 근로자 안전 및 중장비, 건설 자재 관리 및 모니터링 서비스 스타트업
          </Paragraph>

          <Box className="flex flex-col md:flex-row gap-16">
            <Box className="">
              <Box>
                <Strong>Frontend Developer</Strong>
              </Box>
              <Box>기간: 2019.05.27 ~ 현재 재직 중</Box>
            </Box>

            <Box className="flex-1">
              <Box className="mb-10">
                <Heading type="h4">
                  <MyLink href="https://developers.musma.net" target="_blank">
                    공통 라이브러리 개발
                  </MyLink>
                </Heading>
                <Span className="block mb-4">2022.04 ~ 현재</Span>

                <Heading type="h5">Description</Heading>
                <Paragraph className="mb-4">
                  생산성 향상을 위해 UI 컴포넌트, SVG 컴포넌트, 공통 함수 및 React Hooks, ESLint
                  Configuration들을 라이브러리로 만들어 배포 및 유지보수하고 있습니다.
                </Paragraph>

                <Heading type="h5">Work</Heading>

                <List className="mb-10">
                  <ListItem>
                    UI의 일관성과 생산성을 높이기 위해 디자인 시스템 정립 및 UI 컴포넌트 라이브러리
                    개발 및 Github Packages 배포 및 관리
                  </ListItem>

                  <ListItem>
                    SVG 컴포넌트 라이브러리 개발 및 Github Packages에 배포 및 관리
                  </ListItem>

                  <ListItem>
                    함수 및 React Hooks를 모아놓은 라이브러리 개발 및 Github Packages에 배포 및 관리
                  </ListItem>

                  <ListItem>
                    무스마 ESLint Configuration 라이브러리를 Github Packages에 배포 및 모든
                    프로젝트에 적용
                  </ListItem>

                  <ListItem>
                    프로젝트 초기 구성을 쉽게 하기 위해 React, Emotion, Vite를 사용한 Template
                    repository 생성 및 관리
                  </ListItem>
                </List>

                <Heading type="h5">Tech Stack</Heading>
                <Paragraph>React, Emotion, Typescript, @svgr/cli</Paragraph>
              </Box>

              <Divider />

              <Box>
                <Heading type="h4">현대중공업 - 중장비 모니터링 시스템</Heading>
                <Span className="block mb-4">2021.10 ~ 2022.05</Span>

                <Heading type="h5">Description</Heading>
                <Paragraph className="mb-4">
                  현대중공업의 여러 건설현장에서 운용중인 중장비의 실시간 위치 및 엔진 상태, 배터리,
                  적재량 등의 가동 정보 모니터링 서비스입니다.
                </Paragraph>

                <Heading type="h5">Work</Heading>

                <List className="mb-10">
                  <ListItem>
                    Button, Input, Textarea, Modal 등 UI 간의 일관성을 맞추고 생산성을 향상을 위해
                    UI 컴포넌트를 라이브러리화하여 NPM 배포
                  </ListItem>

                  <ListItem>Storybook을 사용하여 컴포넌트 테스트 작성</ListItem>

                  <ListItem>Cypress로 테스트 코드 작성하여 코드 커버리지(0% → 30%)</ListItem>

                  <ListItem>Tailwind CSS 도입으로 개발 시간 단축</ListItem>
                </List>

                <Heading type="h5">Tech Stack</Heading>
                <Paragraph>React, Tailwind CSS, Mobx, Typescript, Cypress, Storybook</Paragraph>
              </Box>

              <Divider />

              <Box>
                <Heading type="h4">
                  삼성엔지니어링 - 근로자, 중장비, 자재 관리 모니터링 시스템(MCAS)
                </Heading>
                <Span className="block mb-4">2020.05 ~ 현재</Span>

                <Heading type="h5">Description</Heading>
                <Paragraph className="mb-4">
                  건설 현장의 근로자, 중장비, 자재의 실시간 위치 및 이동 히스토리, 작업 시간등의
                  통계를 볼 수 있는 관리 모니터링 서비스입니다.
                </Paragraph>

                <Heading type="h5">Work</Heading>

                <List className="mb-10">
                  <ListItem>생산성 향상을 위해 코딩 컨벤션 및 폴더, 컴포넌트 구조 정립</ListItem>

                  <ListItem>
                    React Native를 이용하여 Android 앱 개발 및{' '}
                    <MyLink
                      href="https://play.google.com/store/apps/details?id=com.mcasreactnative.lsp&hl=en&gl=US"
                      target="_blank"
                    >
                      Google Play Store 출시
                    </MyLink>
                  </ListItem>

                  <ListItem>Github Action을 이용하여 APK 빌드 및 PlayStore 배포 자동화</ListItem>
                </List>

                <Heading type="h5">Tech Stack</Heading>
                <Paragraph>React, Material-UI, Mobx, Socket.io, Typescript</Paragraph>
              </Box>

              <Divider />

              <Box>
                <Heading type="h4">삼성중공업 - 화물창 온습도 모니터링 시스템</Heading>
                <Span className="block mb-4">2019.06 ~ 2020.01</Span>

                <Heading type="h5">Description</Heading>
                <Paragraph className="mb-4">
                  선박안에 있는 화물창의 온/습도를 모니터링 할 수 있으며, 공조기를 제어하여 원하는
                  온/습도로 맞출 수 있는 시스템입니다.
                </Paragraph>

                <Heading type="h5">Work</Heading>

                <List className="mb-10">
                  <ListItem>Context API + Mobx를 사용하여 스토어 디자인</ListItem>

                  <ListItem>
                    Socket.io를 이용하여 화물창의 실시간 온/습도 및 상태 모니터링 기능 개발
                  </ListItem>
                </List>

                <Heading type="h5">Tech Stack</Heading>
                <Paragraph>React, Material-UI, Mobx, Socket.io, Typescript</Paragraph>
              </Box>
            </Box>
          </Box>
        </Box>

        <Divider />

        <Box>
          <Heading type="h3">(주)탐생</Heading>

          <Paragraph className="mb-10">
            에듀테크 스타트업으로 공부시간 측정 기능을 기반으로 한 학습 애플리케이션 StudyHelper
            출시
          </Paragraph>

          <Box className="flex gap-16">
            <Box className="">
              <Box>
                <Strong>Android Developer</Strong>
              </Box>
              <Box>기간: 2017.05 - 2019.04</Box>
            </Box>

            <Box className="flex-1">
              <Box className="mb-10">
                <Heading type="h4">스터디헬퍼 v4 개발</Heading>
                <Span className="block mb-4">2017.07 ~ 2018.10</Span>

                <Heading type="h5">Description</Heading>
                <Paragraph className="mb-4">
                  설정한 시간까지 스마트폰을 사용하지 못하게 하는 잠금 기능과 시간 측정 기능으로
                  공부 시간에 집중을 도와주는 모바일 앱입니다.
                </Paragraph>

                <Heading type="h5">Work</Heading>

                <List className="mb-10">
                  <ListItem>
                    입사 직후 스터디 헬퍼 리뉴얼 프로젝트를 담당하여 개발 시작부터, Google Play
                    스토어 배포까지 경험
                  </ListItem>

                  <ListItem>안드로이드 UI 개발 80% 개발</ListItem>
                </List>

                <Heading type="h5">Tech Stack</Heading>
                <Paragraph>Android, Java, DataBinding, Volley</Paragraph>
              </Box>
            </Box>
          </Box>
        </Box>
      </Row>

      <Row>
        <Heading type="h1">🛠️ Skills</Heading>

        <Heading type="h3">Frontend</Heading>
        <List className="mb-10">
          <ListItem>HTML/CSS3</ListItem>

          <ListItem>Typescript</ListItem>

          <ListItem>React, Next.js, React-Native</ListItem>

          <ListItem>
            CSS: <Strong>Emotion</Strong>, Tailwind CSS
          </ListItem>

          <ListItem>상태관리 라이브러리: Mobx</ListItem>

          <ListItem>
            번들러: <Strong>Vite</Strong>, Rollup
          </ListItem>

          <ListItem>
            Node 패키지 매니저: <Strong>Pnpm</Strong>, Yarn
          </ListItem>

          <ListItem>CI/CD: AWS Amplify, Github Actions</ListItem>
        </List>

        <Heading type="h3">Collaboration & Tool</Heading>
        <List>
          <ListItem>개발도구: Visual Studio Code</ListItem>

          <ListItem>메신저: Slack</ListItem>

          <ListItem>
            생산성 도구: <Strong>Notion</Strong>, Jira
          </ListItem>

          <ListItem>
            Git GUI: <Strong>Fork</Strong>, Sourcetree
          </ListItem>

          <ListItem>
            디자인 협업 툴: <Strong>Figma</Strong>, Zeplin
          </ListItem>
        </List>
      </Row>

      <Row>
        <Heading type="h1">👨🏼‍🎓 Education</Heading>

        <StaticImage
          src="../assets/images/cup_emblem.jpg"
          alt="Profile"
          className="rounded-full w-24 h-24 shadow-lg ring-8 ring-slate-900 ring-opacity-5 mb-6"
        />

        <Span className="block text-lg font-semibold">부산가톨릭대학교 컴퓨터공학과(학사)</Span>

        <Span className="block">기간: 2010.03 ~ 2017.02</Span>
      </Row>

      <Row>
        <Heading type="h1">🎖️ Certification</Heading>

        <Span className="block text-lg font-semibold">정보처리기사 취득(한국산업인력공단)</Span>

        <Span className="block">취득일: 2016-07</Span>
      </Row>
    </Layout>
  )
}

// www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
export const Head = () => <Seo title="이력서 - 김영수" />

export default IndexPage
