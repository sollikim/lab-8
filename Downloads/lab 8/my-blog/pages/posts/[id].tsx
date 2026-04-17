import { GetStaticProps, GetStaticPaths } from "next";
import { Post } from "@/types";
import { getAllPosts, getPostById } from "@/lib/api";

interface PostProps {
    post: Post;
  }

  export default function PostPage({ post }: PostProps) {
    if (!post) return <div>Post not found</div>;

    return (
        <article>
            <h1>{post.title}</h1>
            <p>{post.date} | {post.readTime} min read</p>
      <div>{post.content}</div>
      </article>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await getAllPosts();
    const paths = posts.map(post => ({
        params: { id: post.id },
      }));

      return {
        paths,
        fallback: "blocking",
      };
    };

    export const getStaticProps: GetStaticProps = async ({ params }) => {
        const post = await getPostById(params?.id as string);

        if (!post) {
            return { notFound: true };
          }

          return {
            props: { post },
            revalidate: 60,
          };
        };