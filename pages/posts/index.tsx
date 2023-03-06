import Head from 'next/head';
import { AllPosts } from '@/components'
import { Post } from '@/interfaces/Post.interface';
import { getAllPost } from '@/lib/post-utils';
import { GetStaticProps, NextPage } from 'next';

export const PostsPage: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>All posts</title>
        <meta name="description" content="All my posts" />
      </Head>
      <AllPosts posts={posts} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const posts = await getAllPost();

  return {
    props: {
      posts
    },
    // revalidate: 1000
  }
}


export default PostsPage;