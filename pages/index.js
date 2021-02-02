import Head from 'next/head'
import ArticleList from '../components/ArticleList'

export default function Home({ articles }) {
  console.log(articles);
  return (
    <>

      <Head>
        <title>Next Project</title>
        <meta name="keywords" content="web development, programming" />
      </Head>

      <ArticleList articles={articles} />

      <h1>This is a project linked with git.</h1>

    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}
