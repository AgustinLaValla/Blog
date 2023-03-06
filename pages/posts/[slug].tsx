import Head from "next/head";
import { PostDetailsContent } from "@/components";
import { Post } from "@/interfaces/Post.interface";
import { getPostData, getSlugs } from "@/lib/post-utils";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

export const PostDetails: NextPage<{ post: Post }> = ({ post }) =>
  <>
    <Head>
      <title>{post.title}</title>
      <meta name="description" content={post.description} />
    </Head>
    <PostDetailsContent post={post} />
  </>


export const getStaticProps: GetStaticProps = async (context) => {
  const post = getPostData(context.params?.slug as string);
  return {
    props: {
      post
    },
    revalidate: 600
  }
}

export const getStaticPaths: GetStaticPaths = async () => {

  const slugs = getSlugs();

  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: false
  }
}

export default PostDetails;