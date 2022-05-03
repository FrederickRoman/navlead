import Link from "@mui/material/Link";

interface Props {
  children: React.ReactNode;
  href: string;
}

function ExternalLink(props: Props): JSX.Element {
  const { href, children } = props;
  return (
    <Link href={href} target="_blank" rel="noopener" color="inherit">
      {children}
    </Link>
  );
}

export default ExternalLink;
