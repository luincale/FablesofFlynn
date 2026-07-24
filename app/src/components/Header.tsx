import type { Tab } from "../types";
import type { Chapter } from "../data";
import { BackIcon } from "./icons";

interface Props {
  tab: Tab;
  currentChapter: Chapter | null;
  selectedCharacterName: string | null;
  onCloseChapter: () => void;
  onCloseCharacter: () => void;
}

export default function Header({
  tab,
  currentChapter,
  selectedCharacterName,
  onCloseChapter,
  onCloseCharacter,
}: Props) {
  if (tab === "home") return null;

  if (tab === "story") {
    if (currentChapter) {
      return (
        <div className="app-header">
          <button type="button" className="btn btn-ghost btn-icon" aria-label="Back" onClick={onCloseChapter} style={{ flexShrink: 0 }}>
            <BackIcon color="currentColor" />
          </button>
          <div className="app-header-min-width0">
            <div className="app-header-title-part">{currentChapter.part}</div>
            <div className="app-header-title-main">{currentChapter.title}</div>
          </div>
        </div>
      );
    }
    return (
      <div className="app-header">
        <div>
          <div className="app-header-plain-title">The Story</div>
          <div className="app-header-plain-sub">Prologues &amp; Book One</div>
        </div>
      </div>
    );
  }

  if (tab === "timeline") {
    return (
      <div className="app-header">
        <div>
          <div className="app-header-plain-title">Timeline</div>
          <div className="app-header-plain-sub">Netheril to now</div>
        </div>
      </div>
    );
  }

  if (tab === "roster") {
    if (selectedCharacterName) {
      return (
        <div className="app-header">
          <button type="button" className="btn btn-ghost btn-icon" aria-label="Back" onClick={onCloseCharacter} style={{ flexShrink: 0 }}>
            <BackIcon color="currentColor" />
          </button>
          <div className="app-header-title-main">{selectedCharacterName}</div>
        </div>
      );
    }
    return (
      <div className="app-header">
        <div>
          <div className="app-header-plain-title">The Fables &amp; Allies</div>
          <div className="app-header-plain-sub">Everyone who matters</div>
        </div>
      </div>
    );
  }

  // places
  return (
    <div className="app-header">
      <div>
        <div className="app-header-plain-title">Places</div>
        <div className="app-header-plain-sub">Across the Sword Coast</div>
      </div>
    </div>
  );
}
