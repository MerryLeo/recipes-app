import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import { getRecipes } from '../lib/recipes';

export default function Home(): JSX.Element {
  return (
    <Layout>
      <div>Hello World</div>
    </Layout>
  );
}
