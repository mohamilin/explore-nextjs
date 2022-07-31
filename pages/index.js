/* eslint-disable jsx-a11y/alt-text */
import Head from 'next/head'
import Image from 'next/image'
import { HomePageContent } from '../components/moleculs/home/homepage-content'
import { Page } from '../components/moleculs/page'
import { Container } from '../components/moleculs/UI/container'
import MainArticel from '../components/origanism/MainArticel'
import MainBanner from '../components/origanism/MainBanner'
import MainFeature from '../components/origanism/MainFeature'
import MainHero from '../components/origanism/MainHero'
import MainInspiration from '../components/origanism/MainInspiration'
import MainStatic from '../components/origanism/MainStatic'
import Blog1 from '../public/MainHero/1.jpg'

export default function Home() {
  return (
  <Page>
    <HomePageContent>
    <Container className="space-y-3 mt-3">
    <MainHero/>
    <MainFeature/>
    <MainStatic/>
    <MainInspiration/>
    <MainBanner />
    <MainArticel/>
    </Container>
    <style jsx>{`
          article {
            margin: 0 auto;
          }
          h1 {
            text-align: center;
          }
          
        `}</style>
    </HomePageContent>
   

  </Page>
  )
}
