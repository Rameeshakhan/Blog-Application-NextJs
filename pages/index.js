import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/post';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <p>This is rameesha Khan , A software Engineering Student. She is a JavaScript Developer and currently learning and growing in this domain.AI fascinates her a lot. Her future goal is to dive into Web 3.0.</p>
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Blog</h2>
      <ul className={utilStyles.list}>
        {allPostsData.map(({ id, date, title }) => (
       <li className={utilStyles.listItem} key={id}>
       <Link href={`/posts/${id}`}>{title}</Link>
       <br />
       <small className={utilStyles.lightText}>
         <Date dateString={date} />
       </small>
     </li>
        ))}
      </ul>
    </section>
    </Layout>
  );
}