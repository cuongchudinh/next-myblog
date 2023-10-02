import Image from "next/image";
import { getPost } from "@/common/api";
import styles from "./page.module.css";

export default async function Post({ params }) {
  const { slug } = params;
  const data = await getPost(slug);
  const metadata = {
    title: slug,
  };
  return (
    <div>
      <h1>{data.title}</h1>
      <Image
        src={data.featured_image}
        width={200}
        height={200}
        alt={data.title}
      />
      <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
    </div>
  );
}
