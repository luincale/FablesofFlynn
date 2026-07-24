import type { Character, CharacterGroup } from "../../data";

interface SelectedCharacter extends Character {
  group: string;
}

interface Props {
  characters: CharacterGroup[];
  rosterGroup: string;
  rosterQuery: string;
  onSetRosterGroup: (g: string) => void;
  onSetRosterQuery: (q: string) => void;
  onOpenCharacter: (name: string) => void;
  selectedCharacter: SelectedCharacter | null;
}

function shortDesc(desc: string): string {
  return desc.length > 90 ? desc.slice(0, 88) + "…" : desc;
}

export default function Roster({
  characters,
  rosterGroup,
  rosterQuery,
  onSetRosterGroup,
  onSetRosterQuery,
  onOpenCharacter,
  selectedCharacter,
}: Props) {
  if (selectedCharacter) {
    return (
      <div>
        <span className="tag tag-outline roster-detail-group">{selectedCharacter.group}</span>
        <div className="roster-detail-role">{selectedCharacter.role}</div>
        <p className="roster-detail-desc">{selectedCharacter.desc}</p>
      </div>
    );
  }

  const groupChips = ["All", ...characters.map((g) => g.group)];
  const q = rosterQuery.trim().toLowerCase();

  const view = characters
    .filter((g) => rosterGroup === "All" || g.group === rosterGroup)
    .map((g) => ({
      group: g.group,
      people: g.people.filter(
        (p) =>
          !q ||
          p.name.toLowerCase().includes(q) ||
          p.role.toLowerCase().includes(q) ||
          p.desc.toLowerCase().includes(q),
      ),
    }))
    .filter((g) => g.people.length > 0);

  const noResults = view.length === 0 && !!q;

  return (
    <div>
      <div className="field roster-search-field">
        <input
          className="input"
          type="text"
          placeholder="Search names, roles..."
          value={rosterQuery}
          onChange={(e) => onSetRosterQuery(e.target.value)}
        />
      </div>
      <div className="chip-row">
        {groupChips.map((name) => {
          const active = name === rosterGroup;
          return (
            <span
              key={name}
              className={`tag chip ${active ? "tag-accent" : "tag-outline"}`}
              onClick={() => onSetRosterGroup(name)}
            >
              {name}
            </span>
          );
        })}
      </div>

      <div className="group-list">
        {view.map((grp) => (
          <div key={grp.group}>
            <div className="group-label">{grp.group}</div>
            <div className="group-items">
              {grp.people.map((p) => (
                <div key={p.name} className="card roster-card" onClick={() => onOpenCharacter(p.name)}>
                  <div className="roster-card-name">{p.name}</div>
                  <div className="roster-card-role">{p.role}</div>
                  <div className="roster-card-desc">{shortDesc(p.desc)}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {noResults && <p className="roster-empty">No one matches that search.</p>}
    </div>
  );
}
