import type { CSSProperties } from "react";

interface IconProps {
  color: string;
  size?: number;
}

export function BackIcon({ color, size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 5l-7 7 7 7" />
    </svg>
  );
}

export function ChevronRight({ color, size = 13, style }: IconProps & { style?: CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" style={style}>
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

export function HomeIcon({ color }: IconProps) {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 11.5L12 4l8 7.5" />
      <path d="M6 10v9a1 1 0 001 1h4v-6h2v6h4a1 1 0 001-1v-9" />
    </svg>
  );
}

export function StoryIcon({ color }: IconProps) {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 5.5A2 2 0 016 3.5h5.5a1 1 0 011 1V20a1 1 0 01-1 1H6a2 2 0 01-2-2V5.5z" />
      <path d="M20 5.5A2 2 0 0018 3.5h-5.5a1 1 0 00-1 1V20a1 1 0 001 1H18a2 2 0 002-2V5.5z" />
    </svg>
  );
}

export function TimelineIcon({ color }: IconProps) {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2.3" />
    </svg>
  );
}

export function RosterIcon({ color }: IconProps) {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
      <circle cx="17" cy="9.5" r="2.3" />
      <path d="M15.3 14.7c2.6.3 4.7 2.3 4.7 5.3" />
    </svg>
  );
}

export function PlacesIcon({ color }: IconProps) {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s7-6.7 7-12a7 7 0 10-14 0c0 5.3 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.4" />
    </svg>
  );
}
