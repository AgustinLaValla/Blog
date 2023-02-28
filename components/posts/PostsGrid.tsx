import { Post } from '@/interfaces/Post.interface'
import PostItem from './PostItem'
import classes from './PostsGrid.module.css'

type Props = {
  posts: Post[]
}

export default function PostsGrid({ posts }: Props) {
  return (
    <ul className={classes.grid}>
      {posts.map(post => <PostItem key={post.slug} post={post}/>)}
    </ul>
  )
}
