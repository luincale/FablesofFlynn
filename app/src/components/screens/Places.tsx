import type { PlaceGroup } from "../../data";

interface Props {
  locations: PlaceGroup[];
  placesGroup: string;
  onSetPlacesGroup: (g: string) => void;
}

export default function Places({ locations, placesGroup, onSetPlacesGroup }: Props) {
  const groupChips = ["All", ...locations.map((g) => g.group)];
  const view = locations.filter((g) => placesGroup === "All" || g.group === placesGroup);

  return (
    <div>
      <div className="chip-row">
        {groupChips.map((name) => {
          const active = name === placesGroup;
          return (
            <span
              key={name}
              className={`tag chip ${active ? "tag-accent" : "tag-outline"}`}
              onClick={() => onSetPlacesGroup(name)}
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
              {grp.places.map((pl) => (
                <div key={pl.name} className="card place-card">
                  <div className="place-card-name">{pl.name}</div>
                  <div className="place-card-desc">{pl.desc}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
