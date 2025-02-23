import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const ThankYou = () => {
  return (
    <>
      <Head>
        <title>Thank You - Amica</title>
      </Head>
      <main className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-lg px-4 py-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
          <p className="mb-4 text-xl">
            We&apos;ve received your response and we&apos;ll be in touch soon!
          </p>
    
          <Link href="/">
            <a className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
              Return to Home
            </a>
          </Link>
        </div>
      </main>
    </>
  );
};

export default ThankYou;
