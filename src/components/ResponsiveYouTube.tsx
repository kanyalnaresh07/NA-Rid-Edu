import React from 'react';

interface ResponsiveYouTubeProps {
  videoUrl: string;
  className?: string;
}

export const ResponsiveYouTube: React.FC<ResponsiveYouTubeProps> = ({ videoUrl, className = '' }) => {
  // Extract VIDEO_ID from any YouTube URL (watch, share, shorts, embed)
  const getYouTubeId = (url: string) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeId(videoUrl);

  if (!videoId) {
    return (
      <div className="w-full aspect-video bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-400 rounded-xl">
        Invalid YouTube URL
      </div>
    );
  }

  // Construct embed URL with HD playback preference (vq=hd1080) and no related videos from other channels (rel=0)
  const embedUrl = `https://www.youtube.com/embed/${videoId}?vq=hd1080&rel=0`;

  return (
    <div className={`w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-slate-900 relative ${className}`}>
      <iframe
        className="absolute top-0 left-0 w-full h-full border-0"
        src={embedUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default ResponsiveYouTube;
