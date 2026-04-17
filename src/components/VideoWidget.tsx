import { useState, useRef } from "react";

export default function VideoWidget() {
  const [expanded, setExpanded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const thumbSrc =
    "https://kinescope.io/embed/v4FeVNZwyDJ2Ph9p8tT7hA?autoplay=1&loop=1&muted=1&controls=0&playsinline=1";
  const expandedSrc =
    "https://kinescope.io/embed/v4FeVNZwyDJ2Ph9p8tT7hA?autoplay=1&muted=0";

  return (
    <>
      <div className={`video-widget ${expanded ? "video-widget--expanded" : ""}`}>
        {!expanded && (
          <div className="video-widget__thumb" onClick={() => setExpanded(true)}>
            <iframe
              ref={iframeRef}
              src={thumbSrc}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer"
              allowFullScreen
              style={{ borderRadius: "12px", pointerEvents: "none" }}
            />
          </div>
        )}

        {expanded && (
          <div className="video-widget__expanded">
            <button
              className="video-widget__collapse"
              onClick={() => setExpanded(false)}
              aria-label="Minimize video"
            >
              ✕
            </button>
            <iframe
              src={expandedSrc}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer"
              allowFullScreen
              style={{ borderRadius: "12px" }}
            />
          </div>
        )}
      </div>
    </>
  );
}
