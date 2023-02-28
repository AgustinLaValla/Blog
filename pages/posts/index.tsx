import { AllPosts } from '@/components'
import { Post } from '@/interfaces/Post.interface';

const DUMMY_POSTS: Post[] = [
  {
    slug: 'getting-started-nextjs',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    date: '2023-02-02',
    description: 'React framework for production ready applications - it makes building fullstack apps a breeze and ships with SSR'
  },
  {
    slug: 'nextjs-file-based-routing',
    title: 'NextJS File Based Routing',
    image: 'nextjs-file-based-routing.png',
    date: '2022-03-03',
    description: 'React framework for production ready applications - it makes building fullstack apps a breeze and ships with SSR'
  }
];

export default function PostsPage() {
  return (
    <AllPosts posts={DUMMY_POSTS}/>
  )
}
