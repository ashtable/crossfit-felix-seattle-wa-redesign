
import React from 'react';

interface HeroVideoProps {
  src: string;
}

const HeroVideo: React.FC<HeroVideoProps> = ({ src }) => {
  return (
    <video
      data-testid="hero-video"
      className="absolute inset-0 w-full h-full object-cover"
      src={src}
      autoPlay
      loop
      muted
      playsInline
    />
  );
};

export default HeroVideo;
