import { GetServerSidePropsContext } from "next"
import Head from "next/head"
import React from 'react'
import { Button } from "components/Button/Button"
import { LP_GRID_ITEMS } from "../lp-items"

export default function Web() {
  return (
    <>
      <Head>
        <meta property="og:url" content="https://next-enterprise.vercel.app/" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/Blazity/next-enterprise/main/project-logo.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>Amica</title>
      </Head>
      <section className="bg-white dark:bg-gray-900 py-4">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl text-blue-500">
            Meet Amica.
            </h1>
            <h2 className="mb-4 max-w-2xl text-3xl font-extrabold leading-none tracking-tight dark:text-white md:text-4xl xl:text-5xl">
              A learning platform reimagined for tech professionals
            </h2>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              Amica enables tech professionals to stay at the cutting-edge. We curate hands-on learning experiences in collaboration with expert industry practitioners.
              Stay on top of the latest in AI, and never miss out.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
            {LP_GRID_ITEMS.map((singleItem) => (
              <div key={singleItem.title} className="flex flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-200 w-200 items-center justify-center rounded-full bg-primary-100 p-1.5 text-blue-700 dark:bg-primary-900">
                  {singleItem.icon && React.cloneElement(singleItem.icon, { style: { height: '150px', width: '150px' } })}
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">{singleItem.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{singleItem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <section className="bg-white dark:bg-gray-900 py-4">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-3xl font-extrabold leading-none tracking-tight dark:text-white md:text-4xl xl:text-5xl">
            Sign up for the waitlist.
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              We're launching soon. Sign up for the waitlist to get early access.
            </p>
          </div>
        </div>
      </section> */}
    </>
  )
}

export async function getServerSideProps({ req, res }: GetServerSidePropsContext) {
  if (req.headers?.host?.includes("next-enterprise.vercel.app")) {
    return {
      redirect: {
        destination: "https://blazity.com/open-source/nextjs-enterprise-boilerplate",
        permanent: true,
      },
    }
  }

  return {
    props: {},
  }
}
