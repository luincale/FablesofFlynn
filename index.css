import type { Chapter, Meta } from "../../data";
import { ChevronRight } from "../icons";

interface Props {
  meta: Meta;
  lastChapter: Chapter | null;
  chapterCount: number;
  characterCount: number;
  locationCount: number;
  onContinueReading: () => void;
  onGoThreads: () => void;
}

export default function Home({
  meta,
  lastChapter,
  chapterCount,
  characterCount,
  locationCount,
  onContinueReading,
  onGoThreads,
}: Props) {
  return (
    <div>
      <div style={{ paddingTop: "var(--space-4)" }}>
        <div className="home-kicker">A Living Chronicle</div>
        <h1>{meta.title}</h1>
        <p className="home-subtitle">{meta.subtitle}</p>
        <span className="tag tag-outline">{meta.year}</span>
      </div>

      {lastChapter && (
        <div style={{ marginTop: "var(--space-8)" }}>
          <div className="card elev-md story-clickable-card" onClick={onContinueReading}>
            <div className="card-kicker">Continue Reading</div>
            <div className="card-title">{lastChapter.title}</div>
            <p className="card-body">{lastChapter.teaser}</p>
            <div className="card-meta">
              <ChevronRight color="currentColor" />
              <span>{lastChapter.part}</span>
            </div>
          </div>
        </div>
      )}

      <div className="home-stats-grid">
        <div className="card home-stat-card">
          <div className="home-stat-value">{chapterCount}</div>
          <div className="home-stat-label">Chapters</div>
        </div>
        <div className="card home-stat-card">
          <div className="home-stat-value">{characterCount}</div>
          <div className="home-stat-label">Characters</div>
        </div>
        <div className="card home-stat-card">
          <div className="home-stat-value">{locationCount}</div>
          <div className="home-stat-label">Places</div>
        </div>
      </div>

      <div style={{ marginTop: "var(--space-6)" }}>
        <div className="card story-clickable-card" onClick={onGoThreads}>
          <div className="card-kicker">Threads Still Open</div>
          <p className="card-body">
            Ten questions the Fables haven't answered yet — from the Raven Queen's greeting to the road to
            Warlock's Crypt.
          </p>
          <div className="card-meta">
            <ChevronRight color="currentColor" />
            <span>See the Timeline</span>
          </div>
        </div>
      </div>

      <p className="home-footnote">
        Compiled by the Emporium Conservatory, cross-referenced against Candlekeep's copied scrolls.
      </p>
    </div>
  );
}
