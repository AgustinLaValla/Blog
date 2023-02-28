import { useRouter } from "next/router"

export default function PostDetails() {

  const { query } = useRouter();

  return (
    <div>{query.slug}</div>
  )
}
