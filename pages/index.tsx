import Head from "next/head";
import { FeaturedPosts, Hero } from "@/components";
import { Post } from "@/interfaces/Post.interface";
import { getFeaturedPost } from "@/lib/post-utils";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

const HomePage: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Agustin blog</title>
        <meta name="description" content="I post about web development"></meta>
      </Head>
      <Hero></Hero>
      <FeaturedPosts posts={posts} />
    </>
  )
}



export const getStaticProps: GetStaticProps = async () => {
  const posts = await getFeaturedPost();
  return ({
    props: {
      posts
    },
    // revalidate: 100
  })
}

export default HomePage;