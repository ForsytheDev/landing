import Head from 'next/head'
import { NextPage } from 'next'

import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Footer } from '@/components/Footer'
import { Services } from '@/components/Services'
import { FAQ } from '@/components/FAQ'
import { Feedback } from '@/components/Feedback'
import { Portfolio } from '@/components/Portfolio'
import { Becauses } from '@/components/Becauses'
import { Socials } from '@/components/Socials'
import { Masters } from '@/components/Masters'
import { Rent } from '@/components/Rent'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>LeZote</title>
      </Head>
      <div className="min-h-full flex flex-col">
        <Header />
        <main className="main">
          <Hero />
          <About />
          <Services />
          <Masters />
          <Portfolio />
          <Becauses />
          <Socials />
          <Rent />
          <Feedback />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Home
