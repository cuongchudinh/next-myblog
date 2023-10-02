import Link from "next/link";
import Image from "next/image";
import { getPosts } from "@/common/api";

export default async function PostList({
  category = "",
  page = "",
  numOfPage = 10,
}) {
  const { found, posts } = await getPosts(category, numOfPage, page);

  return (
    <ul>
      {posts.map((item, index) => (
        <li key={index}>
          <Link href={"/posts/".concat(item.slug)}>
            <Image
              key={index}
              src={item.featured_image}
              width={200}
              height={200}
              alt={item.slug}
            />
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
