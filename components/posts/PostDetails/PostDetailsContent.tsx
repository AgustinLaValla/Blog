import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import { CodeProps } from 'react-markdown/lib/ast-to-react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark as codeStyle } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import PostDetailsHeader from './PostDetailsHeader'
import classes from './PostDetailsContent.module.css'
import { Post } from '@/interfaces/Post.interface'

type Props = {
  post: Post
}

export default function PostDetailsContent({ post }: Props) {
  const { slug, title, image, content, description } = post;

  const customRenderers = {
    p(paragraph: any) {
      const { node } = paragraph;

      if (node.children[0].tagName === 'img') {
        const image = node.children[0];

        return (
          <div style={{ padding: '0.5rem 0.75rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image
              src={image.properties.src}
              alt={image.properties.alt}
              width={1638}
              height={791}
              style={{
                width: '100%',
                height: 'auto'
              }}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },

    code(code: CodeProps) {
      { code.node.content }
      const { children, className, ...props } = code;
      return <SyntaxHighlighter
        language={code.lang as string}
        style={codeStyle}
        children={String(children).replace(/\n$/, "")}
      />
    }

  };


  return (
    <article className={classes.content}>
      <PostDetailsHeader key={post.slug} title={title} image={`/images/posts/${slug}/${image}`} />
      <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
    </article >
  )
}
