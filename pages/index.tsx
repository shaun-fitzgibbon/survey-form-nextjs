import type { NextPage } from 'next'
import Head from 'next/head'

import styles from '../styles/Home.module.css'
import SurveyForm from '../components/SurveyForm'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />

        <title>Survey form</title>
        <meta
          name='description'
          content='A basic survey form designed using figma and coded using html & css for freecodecamp project'
        />
        <meta name='keywords' content='HTML5, CSS3' />
        <meta name='author' content='Shaun Fitzgibbon' />

        <meta property='og:title' content='Business - Survey form' />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='//sfitzg.github.io/Survey-Form/images/screenshot.png'
          name='image'
        />
        <meta
          property='og:description'
          content='A basic survey form designed using figma and coded using html & css for freecodecamp project'
        />
        <meta property='og:url' content='//sfitzg.github.io/Survey-Form/' />

        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <header>
          <h1 id='title' className='title'>
            Company Survey Form
          </h1>
          <p id='description' className='subtitle'>
            Please take a minute to help us improve our services
          </p>
        </header>
        <SurveyForm />
      </main>
    </div>
  )
}

export default Home
