import Link from "next/link";

interface Props {
  href: string;
  text: string;
  children?: React.ReactNode;
}

function IndexLink(props: Props): JSX.Element {
  const { href, text, children } = props;
  return (
    <Link href={href} passHref>
      <li>
        <style jsx>
          {`
            a:hover {
              text-decoration: underline;
            }
          `}
        </style>
        <span style={{ cursor: "pointer" }}>{text}</span>
        {children}
      </li>
    </Link>
  );
}

export default IndexLink;
