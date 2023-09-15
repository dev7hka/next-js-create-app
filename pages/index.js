import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import {getSortedPostsData} from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return (
    {
      props: {
        allPostsData
      }
    }
  )
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <p>You can visit <Link href="/posts/first-post">First Post Page</Link></p>

      <ul>{allPostsData.map(item => {
        return <li key={item.id}>{item.id} -- {item.date} -- 
        <Link href={`/posts/${item.id}`}>{item.title}</Link>
        </li>
      })}
      </ul>
    </Layout>
  );
}