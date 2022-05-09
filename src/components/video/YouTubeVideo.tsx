interface Props {
  title: string;
  videoId: string;
  width: number | string;
  height: number | string;
}

function YouTubeVideo(props: Props): JSX.Element {
  const { title, videoId, width, height } = props;
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;
  return (
    <iframe
      allowFullScreen
      frameBorder="0"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title={title}
      src={videoSrc}
      width={width}
      height={height}
      style={{ background: "#424242" }}
    >
      <p>Your browser does not support iframes.</p>
    </iframe>
  );
}

export default YouTubeVideo;
