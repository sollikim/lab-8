import { GetStaticProps } from "next";


export default function About({ renderTime }: { renderTime: string }) {
    return (
      <div>
        <h1>About Us (SSG)</h1>
      <p>This page was generated at build time. Render time is static.</p>
      <p>Render time: {renderTime}</p>
      </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            renderTime: new Date().toISOString(),
          },
        };
      };