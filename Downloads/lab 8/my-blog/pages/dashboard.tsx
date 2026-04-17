import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
    const user = { id: "user-123", name: "Sagit", role: "user" };
    const analytics = {
        pageViews: 1250, 
    sessions: 420, 
    bounceRate: 15.5 
  };

  return {
    props: {
      user,
      analytics,
      currentTime: new Date().toISOString(),
    },
  };
};

export default function Dashboard({ user, analytics, currentTime }: any) {
    return (
        <div>
      <h1>Welcome, {user.name}</h1>
      <p>Last updated: {currentTime}</p>
      <div>Views: {analytics.pageViews}</div>
      <div>Sessions: {analytics.sessions}</div>
    </div>
  );
}