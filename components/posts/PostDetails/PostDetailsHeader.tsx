import Image from 'next/image'
import classes from './PostDetailsHeader.module.css'

type Props = {
  image: string;
  title: string
}

export default function PostDetailsHeader({title, image}: Props) {
  return (
    <header>
      <h1>{title}</h1>
      <Image
        src={image} 
        alt={title}
        fill
        className={classes.image}
      />
    </header>
  )
}
