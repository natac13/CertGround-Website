import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import clsx from 'clsx'
import React from 'react'

const Quote: React.FC = () => {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context

  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.description}`}
    >
      <header>
        <h1 className="text-center">Request a Quote</h1>
      </header>
      <main className="mx-auto max-w-prose">
        <article id="pricing">
          <h2>Pricing</h2>
          <p>
            Pricing for CertGround&trade; is based off the total number of
            Members stored in your database.
          </p>
          <p>
            Each Client receives 10 Admin accounts which{' '}
            <span className="italic">do not</span> count towards your total
            Member.
          </p>
        </article>
        <article id="contact-us">
          <h3>Contact Us</h3>
          <p>You can contact a CertGround&trade; sales representative below</p>
          <ul className="p-0 my-6 list-none">
            <li className="inline-block w-full box-border">
              <a
                href="mailto:sean.campbell13@gmail.com"
                title="email"
                className="px-6 py-2 text-lg font-semibold border-2 border-solid transition duration-300 rounded-md hover:bg-primary hover:text-background hover:no-underline border-primary text-primary"
              >
                Email
              </a>
            </li>
          </ul>
        </article>
      </main>
    </Layout>
  )
}

export default Quote
