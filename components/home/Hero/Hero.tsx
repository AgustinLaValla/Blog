import Image from 'next/image';
import classes from './Hero.module.css';

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src='/images/site/face.jpg' alt='Agustin La Valla'  width={300} height={300} /> 
      </div>

      <h1>{"Hi, I'm Agustin"}</h1>
      <p>I blog about web development - especially frontend frameworks and libraries like Angular, Nextjs or Remixjs...</p>
    </section>
  )
}
