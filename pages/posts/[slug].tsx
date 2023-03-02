import { PostDetailsContent } from "@/components";
import { Post } from "@/interfaces/Post.interface";
import { getPostData, getSlugs } from "@/lib/post-utils";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

export const PostDetails: NextPage<{ post: Post }> = ({ post }) =>
  <PostDetailsContent post={post} />

export const getStaticPaths: GetStaticPaths = async () => {

  const slugs = getSlugs();

  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const post = getPostData(context.params?.slug as string);
  return {
    props: {
      post
    },
    revalidate: 600
  }
}

export default PostDetails;