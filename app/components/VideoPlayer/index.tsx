import ReactPlayer from "react-player";

interface Props {
  
}

function VideosSection({...props}: Props): JSX.Element {
  const vimeoVideoIds = [
    "817935071",
    "817944807",
    "817938625",
  ];
  return (
    <div
    {...props}
     style={{display:'flex', gap: 150}}>
      {vimeoVideoIds.map((id) => (
        <ReactPlayer key={id} url={`https://player.vimeo.com/video/${id}`} controls />
      ))}
    </div>
  );
}

export default VideosSection;
