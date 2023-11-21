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
        <div className="mx-auto grid max-w-screen-xl px-4 py-4 text-center lg:py-4">
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
        <div className="mx-auto max-w-screen-xl px-4 py-4 sm:py-4 lg:px-6">
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
        <div className="flex flex-col items-center justify-center py-8">
  <div className="mb-4 max-w-2xl text-3xl font-extrabold text-center leading-none tracking-tight dark:text-white md:text-4xl xl:text-5xl">
    Sign-Up for our waitlist and secure your spot.
  </div>
  <form
  id="formdiv"
  action="https://formspree.io/f/mrgwvdwp"
  method="POST"
  className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
>
  <div className="mb-4 md:flex md:items-end">
    <div className="md:mr-4 md:mb-0 flex-grow">
      <label
        htmlFor="name"
        className="text-gray-600 dark:text-gray-400 inline-block mb-1 md:mb-0 md:mr-2"
      >
        Your name:
      </label>
      <input
        id="name"
        name="name"
        required
        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
      />
    </div>
    <div className="md:mr-4 md:mb-0 flex-grow">
      <label
        htmlFor="email"
        className="text-gray-600 dark:text-gray-400 inline-block mb-1 md:mb-0 md:mr-2"
      >
        Your email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        required
        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
      />
    </div>
    <div className="flex-grow">
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2.5 px-3 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
      >
        Submit
      </button>
    </div>
  </div>
</form>

</div>

      </section>
      
      <footer className="bg-white dark:bg-gray-900 py-4">
  <div className="mx-auto max-w-screen-xl px-4 flex justify-between items-center">
    <span className="text-gray-600 dark:text-gray-400 text-sm">
      Copyright &copy; 2023 Tanmay Agarwal and Ansh Khurana. All rights reserved.
    </span>
    <a
      href="/privacy-policy" // Replace with the actual link to your privacy policy
      className="text-blue-500 hover:text-blue-600 text-sm"
      target="_blank" // Opens the link in a new tab
      rel="noopener noreferrer" // Security measure for opening new tabs
    >
      Privacy Policy
    </a>
  </div>
</footer>

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
