import YouTubePlayer from "react-player/youtube";
import { TikTok } from "react-tiktok";

interface Props {

}

function VideosSection({ ...props }: Props): JSX.Element {
  const tiktokVideoIds = [
    "QdSSvXdG0p0",
    "axGtxZNYqyU",
    "Fub7yOyHciU",
    "PzNHyk2JAas",
    "EocJm3Dry4E"
  ];
  return (
    <div
      {...props}
      style={{ display: 'flex', gap: 150 }}>
      {tiktokVideoIds.map(v =>
        <YouTubePlayer key={v} opts={{
          height: 640,
          width: 390,
        }} url={`https://youtu.be/${v}`} />
      )}
    </div>
  );
}

export default VideosSection;
