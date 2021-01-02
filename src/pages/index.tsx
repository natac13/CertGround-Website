import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { BiTargetLock, BiShareAlt, BiClipboard } from 'react-icons/bi'
import Layout from '@theme/Layout'
import clsx from 'clsx'
import React from 'react'
import { Feature } from '../components/Feature'
import { Client } from '../components/Client'
import styles from './styles.module.css'
import Heading from '@theme/Heading'
import ThemedImage from '@theme/ThemedImage'

const H2Heading = Heading('h2')

const clients = [
  {
    name: 'IBEW120',
    imageUrl: 'img/IBEW120.png',
    website: 'ibew120.ca'
  }
]

export const features = [
  {
    title: 'Simple Training Center Management',
    icon: BiClipboard,
    description: (
      <>
        Control all your training records in one place with ease! Create the
        Courses offered, schedule Classes for members to attend, then complete
        those Classes, saving the training records of the Members who
        successfully completed the Course.
      </>
    )
  },
  {
    title: 'Focused on Ease of Use.',
    icon: BiTargetLock,
    description: (
      <>
        CertGround™ was designed to be as automatic as possible. Your job is
        running your Training Center, let CertGround™ worry about the record
        keeping. Plus every week your membership is checked for upcoming expired
        Courses; an email notice is sent to those affected.
      </>
    )
  },
  {
    title: 'Sustainable Record Keeping & Certificate Sharing',
    icon: BiShareAlt,
    description: (
      <>
        By moving your training center&apos;s record keeping to CertGround™ your
        membership gains the ability to share their Course Certifications with
        new employers. Members can generate a QRCode which with link to a
        Certification Share Table. <strong>No more plastic cards!</strong>
      </>
    )
  }
]

const Home: React.FC = () => {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context

  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.description}`}
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container mx-auto">
          <div className="row">
            <div
              className="col"
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <ThemedImage
                sources={{
                  dark: useBaseUrl('img/CertGround-Monogram-White-BlueBG.png'),
                  light: useBaseUrl(
                    'img/CertGround-Monogram-White-TransparentBG.png'
                  )
                }}
                alt="CertGround™ monogram logo"
                width={200}
              />
            </div>
          </div>
          <h1 className="my-8 text-6xl ">{siteConfig.title}</h1>
          <p className="mb-4 text-3xl text-center">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('docs/getting-started')}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className="w-screen my-8">
            <div className="container flex flex-row w-full mx-auto gap-5">
              {features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </section>
        )}

        {clients && clients.length > 0 && (
          <section className={styles.clientsWrapper}>
            <H2Heading id="clients" className="text-4xl text-center">
              Happy Clients
            </H2Heading>
            <section className="w-screen my-8">
              <div className="container mx-auto">
                <div className="flex flex-row justify-center w-full">
                  {clients.map((props, idx) => (
                    <Client key={idx} {...props} />
                  ))}
                </div>
              </div>
            </section>
          </section>
        )}
      </main>
    </Layout>
  )
}

export default Home
