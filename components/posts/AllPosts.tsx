import { Post } from '@/interfaces/Post.interface';
import classes from './AllPosts.module.css'
import PostsGrid from './PostsGrid'

type Props = {
  posts: Post[];
}

export default function AllPosts({posts}: Props) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid {...{posts}}/>
    </section>
  )
}
