import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout.js';
import utilStyles from '../styles/utils.module.css';


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hey, I'm <strong>Rohil</strong>. 
          I'm a senior at Harvard studying Applied Math, 
          and I work on <strong>AI for Bio</strong>
        </p>
        <p>
          You can contact me on <a href="https://twitter.com/rohilbadkundri">Twitter</a>
        </p>
      </section>
    </Layout>
  );
}