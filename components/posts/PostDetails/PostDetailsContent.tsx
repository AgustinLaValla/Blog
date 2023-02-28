import { Post } from '@/interfaces/Post.interface'
import classes from './PostDetailsContent.module.css'
import PostDetailsHeader from './PostDetailsHeader'

const DUMMY_POST = {
  slug: 'getting-started-nextjs',
  title: 'Getting Started with NextJS',
  image: 'getting-started-nextjs.png',
  date: '2023-02-02',
  description: 'React framework for production ready applications - it makes building fullstack apps a breeze and ships with SSR',
  content: '# This is a first post',
}
export default function PostDetailsContent() {
  const post = DUMMY_POST;
  const { slug, title, image, content } = post;
  return (
    <article className={classes.content}>
      <PostDetailsHeader key={post.slug} title={title} image={`/images/posts/${slug}/${image}`} />
      { content }
    </article>
  )
}
