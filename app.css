import type { Era } from "../../data";

interface Props {
  eras: Era[];
  expandedEras: Record<string, boolean>;
  onToggleEra: (id: string) => void;
  threads: string[];
  threadsOpen: boolean;
  onToggleThreads: () => void;
}

export default function Timeline({
  eras,
  expandedEras,
  onToggleEra,
  threads,
  threadsOpen,
  onToggleThreads,
}: Props) {
  return (
    <div className="timeline-list">
      {eras.map((era) => {
        const expanded = !!expandedEras[era.id];
        return (
          <div key={era.id}>
            <div className="card timeline-era-card" onClick={() => onToggleEra(era.id)}>
              <div className="card-kicker">{era.range}</div>
              <div className="card-title">{era.label}</div>
              <p className="card-body">{era.blurb}</p>
            </div>
            {expanded && (
              <div className="timeline-events">
                {era.events.map((ev, i) => (
                  <div key={i}>
                    <div className="timeline-event-date">{ev.date}</div>
                    <div className="timeline-event-title">{ev.title}</div>
                    <p className="timeline-event-body">{ev.body}</p>
                    {ev.annal && <p className="timeline-event-annal">{ev.annal}</p>}
                    {ev.figures && ev.figures.length > 0 && (
                      <div className="timeline-event-figures">
                        {ev.figures.map((fig) => (
                          <span key={fig} className="tag tag-neutral" style={{ fontSize: 11 }}>{fig}</span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}

      <div className="timeline-threads-block">
        <div className="card timeline-era-card" onClick={onToggleThreads}>
          <div className="card-kicker">What's Unresolved</div>
          <div className="card-title">Threads Still Open</div>
        </div>
        {threadsOpen && (
          <div className="timeline-threads-list">
            {threads.map((thread, i) => (
              <div key={i} className="timeline-thread-row">
                <span className="timeline-thread-mark">❖</span>
                <span>{thread}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
