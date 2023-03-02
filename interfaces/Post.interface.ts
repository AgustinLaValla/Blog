export interface Post { 
  title: string;
  image: string;
  description: string;
  date: string;
  slug: string;
  isFeatured?: boolean;
  content: string;
}