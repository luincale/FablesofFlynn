import type { Tab } from "../types";
import { HomeIcon, StoryIcon, TimelineIcon, RosterIcon, PlacesIcon } from "./icons";

interface Props {
  tab: Tab;
  onChange: (tab: Tab) => void;
}

const ITEMS: { tab: Tab; label: string; Icon: typeof HomeIcon }[] = [
  { tab: "home", label: "Home", Icon: HomeIcon },
  { tab: "story", label: "Story", Icon: StoryIcon },
  { tab: "timeline", label: "Timeline", Icon: TimelineIcon },
  { tab: "roster", label: "Roster", Icon: RosterIcon },
  { tab: "places", label: "Places", Icon: PlacesIcon },
];

export default function BottomTabBar({ tab, onChange }: Props) {
  return (
    <div className="app-tabbar">
      {ITEMS.map(({ tab: t, label, Icon }) => {
        const active = tab === t;
        const color = active ? "var(--color-accent-300)" : "var(--color-neutral-500)";
        return (
          <button key={t} type="button" className="app-tabbar-item" onClick={() => onChange(t)}>
            <Icon color={color} />
            <span className="app-tabbar-label" style={{ color }}>{label}</span>
          </button>
        );
      })}
    </div>
  );
}
