import { PostDetailsContent } from "@/components";
import { useRouter } from "next/router"

export default function PostDetails() {

  const { query } = useRouter();

  return (
    <PostDetailsContent/>
  )
}
