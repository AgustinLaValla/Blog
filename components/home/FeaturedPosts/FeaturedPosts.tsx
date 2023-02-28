import PostsGrid from '@/components/posts/PostsGrid';
import { Post } from '@/interfaces/Post.interface';
import classes from './FeaturedPost.module.css';

type Props = {
  posts: Post[];
}

export default function FeaturedPosts({ posts }: Props) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts}/>
    </section>
  )
}
