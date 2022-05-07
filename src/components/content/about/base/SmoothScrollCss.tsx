function SmoothScrollCss(): JSX.Element {
  return (
    <style global jsx>
      {`
        html {
          scroll-behavior: smooth;
        }
      `}
    </style>
  );
}

export default SmoothScrollCss;
