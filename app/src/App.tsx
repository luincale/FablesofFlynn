import { useMemo, useState } from "react";
import type { Tab } from "./types";
import { META, CHAPTERS, ERAS, CHARACTERS, LOCATIONS, THREADS } from "./data";
import Header from "./components/Header";
import BottomTabBar from "./components/BottomTabBar";
import Home from "./components/screens/Home";
import Story from "./components/screens/Story";
import Timeline from "./components/screens/Timeline";
import Roster from "./components/screens/Roster";
import Places from "./components/screens/Places";

export default function App() {
  const [tab, setTab] = useState<Tab>("home");
  const [chapterId, setChapterId] = useState<string | null>(null);
  const [characterId, setCharacterId] = useState<string | null>(null);
  const [rosterGroup, setRosterGroup] = useState("All");
  const [rosterQuery, setRosterQuery] = useState("");
  const [placesGroup, setPlacesGroup] = useState("All");
  const [expandedEras, setExpandedEras] = useState<Record<string, boolean>>({ fables: true });
  const [threadsOpen, setThreadsOpen] = useState(false);

  const currentChapter = useMemo(
    () => (chapterId ? CHAPTERS.find((c) => c.id === chapterId) ?? null : null),
    [chapterId],
  );
  const chapterIndex = currentChapter ? CHAPTERS.findIndex((c) => c.id === currentChapter.id) : -1;
  const prevChapter = chapterIndex > 0 ? CHAPTERS[chapterIndex - 1] : null;
  const nextChapter = chapterIndex >= 0 && chapterIndex < CHAPTERS.length - 1 ? CHAPTERS[chapterIndex + 1] : null;
  const lastChapter = CHAPTERS.length ? CHAPTERS[CHAPTERS.length - 1] : null;

  const selectedCharacter = useMemo(() => {
    if (!characterId) return null;
    for (const g of CHARACTERS) {
      const found = g.people.find((p) => p.name === characterId);
      if (found) return { ...found, group: g.group };
    }
    return null;
  }, [characterId]);

  const characterCount = useMemo(() => CHARACTERS.reduce((n, g) => n + g.people.length, 0), []);
  const locationCount = useMemo(() => LOCATIONS.reduce((n, g) => n + g.places.length, 0), []);

  function openChapter(id: string) {
    setChapterId(id);
  }
  function closeChapter() {
    setChapterId(null);
  }
  function toggleEra(id: string) {
    setExpandedEras((s) => ({ ...s, [id]: !s[id] }));
  }
  function continueReading() {
    setTab("story");
    if (lastChapter) setChapterId(lastChapter.id);
  }
  function goThreads() {
    setTab("timeline");
    setThreadsOpen(true);
  }

  return (
    <div className="app-shell">
      <Header
        tab={tab}
        currentChapter={currentChapter}
        selectedCharacterName={selectedCharacter?.name ?? null}
        onCloseChapter={closeChapter}
        onCloseCharacter={() => setCharacterId(null)}
      />

      <div className="app-content">
        {tab === "home" && (
          <Home
            meta={META}
            lastChapter={lastChapter}
            chapterCount={CHAPTERS.length}
            characterCount={characterCount}
            locationCount={locationCount}
            onContinueReading={continueReading}
            onGoThreads={goThreads}
          />
        )}

        {tab === "story" && (
          <Story
            chapters={CHAPTERS}
            currentChapter={currentChapter}
            prevChapter={prevChapter}
            nextChapter={nextChapter}
            onOpenChapter={openChapter}
            onPrev={() => prevChapter && openChapter(prevChapter.id)}
            onNext={() => nextChapter && openChapter(nextChapter.id)}
          />
        )}

        {tab === "timeline" && (
          <Timeline
            eras={ERAS}
            expandedEras={expandedEras}
            onToggleEra={toggleEra}
            threads={THREADS}
            threadsOpen={threadsOpen}
            onToggleThreads={() => setThreadsOpen((v) => !v)}
          />
        )}

        {tab === "roster" && (
          <Roster
            characters={CHARACTERS}
            rosterGroup={rosterGroup}
            rosterQuery={rosterQuery}
            onSetRosterGroup={setRosterGroup}
            onSetRosterQuery={setRosterQuery}
            onOpenCharacter={(name) => setCharacterId(name)}
            selectedCharacter={selectedCharacter}
          />
        )}

        {tab === "places" && (
          <Places locations={LOCATIONS} placesGroup={placesGroup} onSetPlacesGroup={setPlacesGroup} />
        )}
      </div>

      <BottomTabBar tab={tab} onChange={setTab} />
    </div>
  );
}
