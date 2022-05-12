interface Props {
  title: string;
  videoId: string;
}

function YouTubeVideo(props: Props): JSX.Element {
  const { title, videoId } = props;
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;
  return (
    <iframe
      allowFullScreen
      frameBorder="0"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title={title}
      src={videoSrc}
      width="100%"
      height="100%"
      style={{ background: "#424242" }}
    >
      Your browser does not support iframes.
    </iframe>
  );
}

export default YouTubeVideo;
