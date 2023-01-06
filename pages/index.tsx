import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Recipes App</title>
        <meta name="author" content="Léo Taillon" />
        <meta name="description" content="Recipe Sampling Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        Hello World!
      </main>
    </>
  )
}
