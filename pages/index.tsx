import { FeaturedPosts, Hero } from "@/components";
import { Post } from "@/interfaces/Post.interface";
import { getFeaturedPost } from "@/lib/post-utils";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

const HomePage: NextPage<{posts: Post[]}> = ({ posts }) => { 
  return (
    <>
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