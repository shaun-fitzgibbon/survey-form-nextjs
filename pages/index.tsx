import type { NextPage } from 'next'
import Head from 'next/head'

import { prefix } from '../utils/prefix'
import SurveyForm from '../components/SurveyForm'

const Home: NextPage = () => {
  return (
    <div className='container'>
      <Head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />

        <title>Survey form</title>
        <meta
          name='description'
          content='A basic survey form designed using figma and coded using html and css, then converted to use NextJS and React Hook Forms, the project also uses Github actions to deploy the static site to Github pages on commits to the Main Branch'
        />
        <meta name='keywords' content='NextJS, React, React Hook Form' />
        <meta name='author' content='Shaun Fitzgibbon' />

        <meta property='og:title' content='Business - Survey form' />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content={`${prefix}/images/screenshot.png`}
          name='image'
        />
        <meta
          property='og:description'
          content='A basic survey form designed using figma and coded using html and css, then converted to use NextJS and React Hook Forms, the project also uses Github actions to deploy the static site to Github pages on commits to the Main Branch'
        />
        <meta
          property='og:url'
          content='//shaun-fitzgibbon.github.io/survey-form-next/'
        />

        <link rel='icon' href={`${prefix}/favicon.ico`} />
      </Head>

      <main>
        <header>
          <p>
            PLEASE NOTE - This form is for example purposed only, submiting the
            form will display an alert with the information submitted, showing
            that I have an understanding for how forms work, this information
            could then be used for many other purposes not displayed here. eg
            Submitting to a Database, Netlify Forms ...etc
          </p>
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
