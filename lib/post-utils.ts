import * as fs from 'fs'
import * as path from 'path'
import matter from 'gray-matter';
import { Post } from '@/interfaces/Post.interface';

const postDirectory = path.join(process.cwd(), 'content');

export const getPostFiles = () => fs.readdirSync(postDirectory);

export const getSlugs = () => getPostFiles().map(fileName => removeExtName(fileName));

export const removeExtName = (fileName: string) => fileName.replace(/\.md$/, '');

export const getPostData = (fileName: string) => {
  const postSlug = removeExtName(fileName);
  const filePath = path.join(postDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(fileContent);


  return {
    slug: postSlug,
    ...data,
    content
  } as Post
}

export const getAllPost = () => {
  const postFiles = getPostFiles();

  return postFiles
    .map(fileName => getPostData(fileName))
    .sort((a, b) => new Date(a.date) > new Date(b.date) ? -1 : 1);
}

export const getFeaturedPost = () => getAllPost().filter(post => post.isFeatured);