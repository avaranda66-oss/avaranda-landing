type LoopVideoProps = {
  webm: string;
  mp4?: string;
  poster: string;
  className?: string;
};

export function LoopVideo({ webm, mp4, poster, className }: LoopVideoProps) {
  return (
    <video
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      aria-hidden="true"
    >
      <source src={webm} type="video/webm" />
      {mp4 ? <source src={mp4} type="video/mp4" /> : null}
    </video>
  );
}
