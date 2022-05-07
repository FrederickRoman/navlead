import Head from "next/head";

interface Props {
  title: string;
  description: string;
}

function PageHead(props: Props): JSX.Element {
  const { title, description } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default PageHead;
