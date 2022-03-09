import type { NextPage } from "next";
import Head from "next/head";
import Unity3DMap from "../src/components/guidance/map/Unity3DMap";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Navlead</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Unity3DMap />
      </main>
    </div>
  );
};

export default Home;
