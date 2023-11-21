import React from 'react';
import Head from 'next/head';

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - Amica</title>
      </Head>
      <main className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-lg px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
          <p className="mb-4">
            At Amica, accessible from https://next-enterprise.vercel.app/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Amica and how we use it.
          </p>

          <h2 className="text-2xl font-bold mb-3">Data Collection</h2>
          <p className="mb-4">
            We collect data when you sign up for our waitlist through the form on our website. The information collected includes:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Your Name</li>
            <li>Your Email Address</li>
            <li>The Date and Time of your form submission</li>
          </ul>
          <h2 className="text-2xl font-bold mb-3">Your Data Rights</h2>
          <p className="mb-4">
            As a user, you have the right to:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Access your data at any time upon request.</li>
            <li>Edit your information if it changes or is inaccurate.</li>
            <li>Request the deletion of your data from our records.</li>
            <li>Withdraw your consent for us to use your data.</li>
            <li>Receive any data we have about you in a readable format.</li>
          </ul>
          <p className="mb-4">
            To exercise any of these rights, please contact us at our email: support@amica.com.
          </p>

          
          <h2 className="text-2xl font-bold mb-3">Why We Collect This Data</h2>
          <p className="mb-4">
            The data we collect helps us maintain a waitlist and reach out to interested parties when our product is ready for use. It allows us to provide updates and ensure that those eager to learn more about our offerings are informed in a timely manner.
          </p>

          <h2 className="text-2xl font-bold mb-3">Data Storage and Security</h2>
          <p className="mb-4">
            The data collected through our form is stored securely using Formspree, which adheres to GDPR and CCPA compliance. For detailed information on Formspree's security practices, please visit <a href="https://formspree.io/security" className="text-blue-500 hover:text-blue-600" target="_blank" rel="noopener noreferrer">formspree.io/security</a>.
          </p>

          <h2 className="text-2xl font-bold mb-3">Updates to This Privacy Policy</h2>
          <p>
            We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.
          </p>
          <h2 className="text-2xl font-bold mb-3">Consent</h2>
          <p>
            By using our website, you hereby consent to our Privacy Policy and agree to its terms.
          </p>
        </div>
      </main>
    </>
  );
};

export default PrivacyPolicy;
