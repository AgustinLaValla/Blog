import ReactMarkdown from 'react-markdown'
import PostDetailsHeader from './PostDetailsHeader'
import classes from './PostDetailsContent.module.css'
import { Post } from '@/interfaces/Post.interface'

type Props = {
  post: Post
}

export default function PostDetailsContent({post}: Props) {
  const { slug, title, image, content } = post;

  return (
    <article className={classes.content}>
      <PostDetailsHeader key={post.slug} title={title} image={`/images/posts/${slug}/${image}`} />
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  )
}
