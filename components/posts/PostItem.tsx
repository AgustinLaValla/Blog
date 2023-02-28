import { Post } from '@/interfaces/Post.interface';
import Image from 'next/image';
import Link from 'next/link'
import classes from './PostItem.module.css'

type Props = {
  post: Post;
}

export default function PostItem({ post }: Props) {
  const { slug, image, date, description, title } = post;

  const parseDate = () => new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  return (
    <li className={classes.post}>
      <Link href={`/posts/${slug}`}>
        <div>
          <Image
            src={`/images/posts/${slug}/${image}`}
            alt={title}
            fill
            className={classes.image}
          />
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{parseDate()}</time>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}
