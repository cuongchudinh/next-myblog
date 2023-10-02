import PostList from "@/components/postList";
import styles from "./page.module.css";

export default async function Posts({ params }) {
  const { slug } = params;
  return (
    <div className={styles.container}>
      <PostList category={slug} />
    </div>
  );
}
