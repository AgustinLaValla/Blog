
import Head from 'next/head';
import { ContactForm } from '@/components';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact me</title>
        <meta name="description" content="Send me your messages"></meta>
      </Head>
      <ContactForm />
    </>
  )
}
