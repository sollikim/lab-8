import { GetServerSideProps } from "next";

export default function AboutSSR({ renderTime }: { renderTime: string }) {
    return (
        <div>
      <h1>About Us (SSR)</h1>
      <p>This page is generated on every request. Render time changes.</p>
      <p>Render time: {renderTime}</p>
      </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: {
            renderTime: new Date().toISOString(),
          },
        };
      };