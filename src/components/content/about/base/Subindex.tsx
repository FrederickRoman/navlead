interface Props {
  children: React.ReactNode;
}

function Subindex(props: Props): JSX.Element {
  return <ul style={{ listStyleType: "decimal" }}>{props.children}</ul>;
}

export default Subindex;
