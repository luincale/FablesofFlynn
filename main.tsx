import type { Chapter } from "../../data";

interface Props {
  chapters: Chapter[];
  currentChapter: Chapter | null;
  prevChapter: Chapter | null;
  nextChapter: Chapter | null;
  onOpenChapter: (id: string) => void;
  onPrev: () => void;
  onNext: () => void;
}

const ANNAL_RE = /per the candlekeep|emporium conservatory/i;

function isAnnal(paragraph: string): boolean {
  return paragraph.indexOf("❖") === 0 || ANNAL_RE.test(paragraph.slice(0, 40));
}

export default function Story({
  chapters,
  currentChapter,
  prevChapter,
  nextChapter,
  onOpenChapter,
  onPrev,
  onNext,
}: Props) {
  if (!currentChapter) {
    return (
      <div className="story-list">
        {chapters.map((ch) => (
          <div key={ch.id} className="card story-clickable-card" onClick={() => onOpenChapter(ch.id)}>
            <div className="card-kicker">{ch.part}</div>
            <div className="card-title">{ch.title}</div>
            <p className="card-body">{ch.teaser}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <h2 style={{ marginBottom: "var(--space-4)" }}>{currentChapter.title}</h2>
      {currentChapter.paragraphs.map((text, i) =>
        isAnnal(text) ? (
          <p key={i} className="story-annal-p">{text}</p>
        ) : (
          <p key={i} className="story-prose-p">{text}</p>
        ),
      )}

      <div className="story-figures">
        {currentChapter.figures.map((fig) => (
          <span key={fig} className="tag tag-neutral">{fig}</span>
        ))}
      </div>

      <div className="story-chapter-nav">
        {prevChapter && (
          <button type="button" className="btn btn-secondary story-chapter-nav-btn prev" onClick={onPrev}>
            ← {prevChapter.title}
          </button>
        )}
        {nextChapter && (
          <button type="button" className="btn btn-secondary story-chapter-nav-btn next" onClick={onNext}>
            {nextChapter.title} →
          </button>
        )}
      </div>
    </div>
  );
}
