
type TrackionAPI = {
  track: (name: string, properties?: Record<string, any>) => void;
  page: (properties?: Record<string, any>) => void;
  identify: (userId: string, traits?: Record<string, any>) => void;
  flush: () => void;
};

function getTrackion(): TrackionAPI | null {
  if (typeof window === "undefined") return null;
  return (window as any).trackion || null;
}

export function trackEvent(
  name: string,
  properties?: Record<string, any>
) {
  const t = getTrackion();

  if (!t) {
    return;
  }

  t.track(name, properties);
}
