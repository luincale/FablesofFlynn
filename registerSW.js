// Fables of Flynn — campaign content
// Ported verbatim from project/data.js

export interface Chapter {
  id: string;
  part: string;
  title: string;
  teaser: string;
  figures: string[];
  paragraphs: string[];
}

export interface EraEvent {
  date: string;
  title: string;
  figures?: string[];
  body: string;
  annal?: string;
}

export interface Era {
  id: string;
  label: string;
  range: string;
  blurb: string;
  events: EraEvent[];
}

export interface Character {
  name: string;
  role: string;
  desc: string;
}

export interface CharacterGroup {
  group: string;
  note?: string;
  people: Character[];
}

export interface Place {
  name: string;
  desc: string;
}

export interface PlaceGroup {
  group: string;
  places: Place[];
}

export interface Meta {
  title: string;
  subtitle: string;
  year: string;
  chapterCount: number;
}

export const META: Meta = {
  title: "The Fables of Flynn",
  subtitle: "A Chronicle of the Emporium of Wonders",
  year: "1491 DR",
  chapterCount: 11,
};

export const CHAPTERS: Chapter[] = [
  {
    id: "p1", part: "Prologue I", title: "The Oni of Tyl Myerda",
    teaser: "Bastion hires a rogue and a fighter to seize a pirate ship and unmask a false Lord Justice.",
    figures: ["Ty'Ny De'Ath", "Bastion Drake"],
    paragraphs: [
      "Bastion hired the halfling rogue Ty'Ny De'Ath and a human fighter. They seized a pirate ship (gaining a strange bird companion), sailed to the magic-banning isle of Tyl Myerda, slew an Oni masquerading as the Lord Justice, and secured a provisions contract for the Emporium.",
    ],
  },
  {
    id: "p2", part: "Prologue II", title: "Hunting Flames",
    teaser: "Ty'Ny recruits the druid Kaladin Tempest to burn out a Cult of Flame cell near Inndale.",
    figures: ["Ty'Ny De'Ath", "Kaladin Tempest"],
    paragraphs: [
      "Ty'Ny recruited the blue-skinned druid Kaladin Tempest. Together they destroyed a Cult of Flame acolyte cell and its summoned salamander near Inndale, delivering the corpse to the Emporium for study.",
    ],
  },
  {
    id: "c1", part: "Book One · Ch. 1", title: "The Fables Assemble",
    teaser: "The Fables are hired, meet Flynn's Three Companions, and break the Redbrands in Phandalin.",
    figures: ["Finnegan Flynn", "Iarno ‘Glasstaff’ Albrek", "Nezznar the Black Spider", "Sildar Hallwinter"],
    paragraphs: [
      "Then came Book One. The Fables were formally hired and met Flynn's Three Companions. In Phandalin they broke the Redbrands, unmasked Iarno \"Glasstaff\" Albrek (mind-controlled by the drow Nezznar, the Black Spider), rescued Sildar Hallwinter, and located the lost Mines of Phandelver. In Wave Echo Cave they wrested the mine from the Black Spider outright.",
    ],
  },
  {
    id: "c2", part: "Book One · Ch. 4", title: "The Soulfire Forge",
    teaser: "Hariqua's reborn cult falls on Thornhold's dwarves — and Flynn claims the Forge as his prize.",
    figures: ["Hariqua Na'Haran", "Finnegan Flynn", "Clan Stoneshaft"],
    paragraphs: [
      "At the Soulfire Forge, the Fables met Hariqua Na'Haran herself and her reborn Cult of Flame — an encounter bound up with the tragedy at Thornhold Keep. Hariqua's assault fell first on the keep's dwarven garrison, the shield dwarves who had held Thornhold's underground halls for generations; she slaughtered them where they stood, meaning to claim the fortress above as her own. The Fables and the Emporium arrived in time to break her siege — not in time to save the dwarves.",
      "Once the Fables had battled Hariqua to a standstill and sent her fleeing back to the Fire Plane, Flynn himself arrived — and in a rare display of his own considerable might, laid low the hidden caverns of the Circle of Flame outright. He claimed the Soulfire Forge itself as a prize of war, an artifact of fire magic potent enough to be worth a wizard's personal attention.",
      "❖ Per the Candlekeep Annals: those were the shield dwarves of Clan Stoneshaft, who had dwelt in caverns beneath Thornhold since long before the keep changed hands to the Zhentarim in 1368 DR. That their long stewardship should end at a fire genasi's hand struck the Conservatory's scholars as a bitter, final page to a very old story.",
    ],
  },
  {
    id: "c3", part: "Book One · Ch. 5", title: "Chasing a Necromancer",
    teaser: "Hamun Kost is run to ground — and his trail leads straight to Wingsong Tower.",
    figures: ["Hamun Kost", "Moira'Val", "Halia Thornton"],
    paragraphs: [
      "They chased the necromancer Hamun Kost, a Red Wizard of Thay who had murdered Moira'Val's master Peer'Na to steal a book studying Wingsong Tower and a species of firefly that could reveal it. Kost now rots in Thornhold's dungeons; his patron, they learned, had been Halia Thornton of the Zhentarim.",
    ],
  },
  {
    id: "c4", part: "Book One · Ch. 6", title: "Fireflies in the Underdark",
    teaser: "Hideaway Bay's deep gnomes trade tower-lore for a new home — and Thundertree must be won first.",
    figures: ["Gypsa", "Kaladin Tempest", "Chief Tackkl"],
    paragraphs: [
      "The hunt for the tower drove the Fables into the Underdark, chasing the fireflies before the Zhentarim could. In the Underdark they found Hideaway Bay, the last deep gnomes of drowned Tingstone. In exchange for a new home at Thundertree, the gnomes shared the firefly lore — and the brilliant young engineer Gypsa would go on to captain the Fables' skyship.",
      "But Thundertree had to be won first. The ruined village was held by a young green dragon — one of Hariqua Na'Haran's own cult allies. With the region already calmer after the Fables' earlier rout of the Zhentarim's grip on Phandalin, the druid Kaladin Tempest led the retaking of Thundertree, and the Fables slew the dragon. The victory both gave the deep gnomes a peaceful place to settle and cut away one of the Circle of Flame's alliances.",
    ],
  },
  {
    id: "c5", part: "Book One · Ch. 7", title: "Plague, Tower, and Return",
    teaser: "A poisoned library, a fallen tower, and the Raven Queen's first, quiet visit.",
    figures: ["The Raven Queen", "Carrolyn del Thristen", "Ty'Ny De'Ath"],
    paragraphs: [
      "At Larkspur Heath, the Fables found the great Library sealed by Sir Bently Rhammer on the orders of Lord Neebo Wimbleblat, its librarians dying of a mystery poison. The confrontation turned to slaughter: Rhammer fell, the disgraced ex-chancellor Newton Filz was exposed as a Zhentarim agent and killed, and the poison was traced to Wimbleblat-marked supplies. The librarians were healed and raised.",
      "At last the Fables reached Wingsong Tower. They passed through its Fey and Shadow demiplanes and its Anchor Chamber, and there vanquished the Macroscian — the Long Shadow — to close the Shadowfell tear. The moment it toppled, something in the chamber changed: an apparition rose where the creature had stood, wearing Val'Orea Wingsong's face. The figure was no ghost of Val'Orea herself, though — it was the Raven Queen, borrowing that face to speak.",
      "She explained little of herself or her purposes, but she gave two things freely. First, a truth: that both Moira'Val and Pim carried Wingsong blood in their lineage. Second, a gift: a cloak she named the Mantle of the Raven Queen, bestowed on Ty'Ny — a charge to slay the undead, and to stand against any shadow that would bend death's power to infernal ends. Then, almost in passing, she asked one more thing: that the Fables send her greetings to Flynn, the next time they spoke with him.",
      "The mad archmage del Thristen finally met his end at the hands of his oldest friend, Dante, now awakened as Pim's fey companion. The Fables escaped with the Mythallar of ancient Larkspur — and though the Zhentarim seized Lord Damien Wingsong and two Knights of Wingsong, the Fables broke the encirclement and freed them, carrying all three safely home.",
    ],
  },
  {
    id: "c6", part: "Book One · Ch. 8", title: "The Knights, the Bloodline, and Who Flynn Really Is",
    teaser: "Damien's true history — and Flynn's staggering confession about the Pact Primordial.",
    figures: ["Damien Wingsong", "Finnegan Flynn", "Asmodeus / Ahriman"],
    paragraphs: [
      "Speaking with Moira'Val, Damien admitted he does not carry Wingsong blood at all. The Order of the Knights of Wingsong had stood watch for a thousand years before House Wingsong ever existed, and only later took the family's name and purpose as its own. He does not yet know that a true heir still walks beside him — for Flynn has appeared throughout history as different people, not quite reincarnation, but close enough.",
      "Then, upon the Fables' return, Flynn offered clarity of his own. The Mythallars, he explained, were never merely engines of flight: building them cleaved the fabric of magic, matter, and time, fraying the Weave, and tore open a loophole in the Pact Primordial for Asmodeus to exploit.",
      "Flynn confessed his true nature: he is not a man but a living dream of Jazirian, the primordial couatl-deity of law, light, and mercy. Asmodeus — who also hides beneath the name Ahriman — is Jazirian's twin sibling, scheming to unmake the world and refashion the broken Pact to his sole will.",
      "Worst of all: when Hariqua Na'Haran tried to twist Flynn's Wish to her own ends, she unwittingly re-forged a bond of patronage between Flynn and his fiendish sibling. Flynn had wished for access to Ahriman's own power, gambling that a measure of his brother's strength would let him mend the Pact before Asmodeus could seize it — but something did not work as intended. He suspects a missing fulcrum to the twinned powers he and his brother embody, and senses something — or someone — foreboding, standing unseen between the brothers.",
    ],
  },
  {
    id: "c7", part: "Book One · Ch. 8 (cont.)", title: "Five Gathering Storms",
    teaser: "Bastion lays out the choices ahead as the Fables return to a Thornhold transformed.",
    figures: ["Bastion Drake", "The Peregost", "Shar"],
    paragraphs: [
      "Bastion lays out the choices ahead, naming five gathering storms: a chaotic gray mist over the Silver Marches; the sudden emergence of the Zhentarim's leader, the Peregost; the Well of Dragons gone active, its smoke blinding the Emporium's many eyes; Baldur's Gate drowning in blood and murder as the names of the Dead Three spread and war with Amn looms to the south; and Shar, dancing at the very edge of sight for reasons no one can yet fathom.",
      "Aboard the flaming, battered Fables' Fortune, under Gypsa's piloting, the band returns at last to Thornhold — now dwarfed by Flynn's ever-growing citadel. Behind them drift fell winds — Shar's gaze, and the Zhentarim seeking their arrest in the name of Waterdeep's nobility. Zoey and Bastion wait at Flynn's side, and the search for the next lost Mythallar is only beginning.",
    ],
  },
  {
    id: "c8", part: "Interlude", title: "Four Hands, One Wonder",
    teaser: "How Flynn, Damien, Bastion, and Zoey built the Emporium — and the Citadel rising above it all.",
    figures: ["Finnegan Flynn", "Damien Wingsong", "Bastion Drake", "Zoey Drake"],
    paragraphs: [
      "Damien was never meant to recruit mercenaries or sign trade agreements. What he brought to the Emporium was heart, loyalty, and a fairness that never once bent. He is, by a wide margin, the oldest of Flynn's three companions — and found Flynn before Flynn was born this time, standing guard the very night Flynn was reborn into the world he now walks.",
      "Bastion built the trade — the whole regional web from Phandalin to Triboar to Larkspur Heath, and Southwall from bare ground beneath Thornhold's south wall, its heart the Wayfarer Inn run by Parker Peterson.",
      "Zoey built the wall, and everything the wall was built to protect. The Serpent Mercenaries did not exist five years ago; she built their rank structure, their training, and their discipline from nothing, and turned Flynn's captured Soulfire Forge into the Fables' Fortune alongside her close friend Gypsa.",
      "The Citadel Rising is what all four of them add up to: pale stone in ribbed, scalloped domes over the western sea-cliff, terraced stairways down to Southwall's rooftops, and, hidden within the old Stoneshaft tunnels beneath it, the Fables' own unmarked headquarters — a sea-cave vast enough to dock the Fables' Fortune, guarded by Glorn the spectator and Ben Pendragon.",
    ],
  },
  {
    id: "c9", part: "Interlude", title: "The Shadow: Wimbleblat's Confederation",
    teaser: "A legal, deniable political war against the Emporium — and the two people watching it happen.",
    figures: ["Lord Neebo Wimbleblat", "Elminster", "Laeral Silverhand"],
    paragraphs: [
      "Lord Neebo Wimbleblat did not survive Larkspur Heath by being reckless twice. He simply stopped fighting the war he'd already lost and started the one he could win — a confederation of old Waterdeep houses whose fortunes have thinned in exact proportion to the Emporium's rise.",
      "The confederation's weapons are entirely legal: inquiries before the Watchful Order, the courting of the Masked Lords, rival trade offers timed to bleed the Emporium's goodwill. Bastion has not lost a single one of those fights yet — and has quietly begun assembling his own dossier on the confederation's members, unused so far.",
      "Elminster and Laeral watch all of this and say almost nothing to Wimbleblat at all — not because Neebo is wrong, but because the confederation is asking them to rule against family. The two people who love Flynn most are beginning, quietly, to wonder what he'll do the day loving him is no longer enough to keep him honest.",
    ],
  },
];

export const ERAS: Era[] = [
  {
    id: "netherese", label: "The Netherese Age", range: "−339 DR & before",
    blurb: "The sky-empire of Netheril lifts its cities on Mythallars — until one archmage's ambition dooms them all.",
    events: [
      { date: "before", title: "del Thristen raises Larkspur", figures: ["Carrolyn del Thristen", "Dante Saturnid", "House Wingsong"],
        body: "Carrolyn del Thristen, the youngest mage ever named to Netheril's High Council, wins fame by building a Mythallar strong enough to lift the whole floating city of Larkspur — at the cost of only a single life. House Wingsong warns the Mythallars invite ruin, and is exiled from Larkspur before Karsus ever works his folly, raising Wingsong Manor on the empire's western edge." },
      { date: "−339 DR", title: "Karsus's Folly", figures: ["Netheril", "Larkspur"],
        body: "An archmage's attempt to seize the power of the goddess of magic herself collapses the Weave. Netheril falls from the sky in an instant, and Larkspur crashes to earth — at the very spot where the Larkspur Library will one day stand.",
        annal: "Per the Candlekeep Annals: the goddess of magic gave her life rather than let Karsus hold her power, and was reborn as Mystra. Arcane magic itself briefly died with her — the true cause, the Annals say, of Netheril's fall." },
      { date: "−338 DR", title: "Refuge at Wingsong Manor", figures: ["del Thristen", "Dante", "House Wingsong"],
        body: "del Thristen and Dante lead Larkspur's shattered survivors west to Wingsong Manor — the one roof still standing that can shelter them. What starts as a plea for shelter will not stay one for long." },
      { date: "−335 DR", title: "The Feywild demiplane", figures: ["Dante Saturnid"],
        body: "Drawing on the Mythallar's intrinsic magic, del Thristen tears open a Feywild demiplane. Dante and some of the survivors move inside — and are unknowingly trapped there for years." },
      { date: "−328 DR", title: "Shadowfell & the Macroscian", figures: ["The Macroscian", "Val'Orea Wingsong"],
        body: "del Thristen opens a matching Shadowfell demiplane and tethers a Macroscian within it. In the same siege he kills the manor's mortal defender, Lord Val'Orea Wingsong. Robed monks seeking their lord — the early Knights of Wingsong — are turned away and told he is dead." },
      { date: "−327 DR", title: "The Infinite Planar Cycler", figures: ["del Thristen", "Dante"],
        body: "del Thristen completes his masterwork: a machine blending Feywild and Shadowfell fuel into limitless mana. He betrays his oldest friend, forcing Dante into eternal slumber as the machine's pole of light." },
      { date: "−289 DR", title: "Shar's Shadovar repelled", figures: ["Shar", "the Shadovar"],
        body: "The goddess Shar sends the Shadovar to find the tower. del Thristen fights them off and seals Wingsong's doors permanently — locking himself inside with his creations.",
        annal: "Per the Candlekeep Annals: Shar sheltered these very Shadovar within a hidden Shadowfell enclave, Thultanthar — the City of Shade — where they would not return openly to Faerûn for well over a thousand years." },
      { date: "−250 DR", title: "The archmage unravels", figures: ["del Thristen"],
        body: "del Thristen loses control of the tower's clashing energies. Wingsong begins flickering through planes and time, and its maker spirals into madness. By −221 DR his journals fall silent altogether." },
    ],
  },
  {
    id: "silence", label: "The Long Silence", range: "−221 → 1385 DR",
    blurb: "For centuries the tower drifts unseen while the pieces of the coming story quietly fall into place.",
    events: [
      { date: "347 DR", title: "Mad ramblings resume", figures: ["del Thristen"],
        body: "After more than five centuries of silence, del Thristen's journals restart — the ravings of a mind long gone, hinting the archmage has decayed into a Nothic." },
      { date: "951 DR", title: "Tresendar Manor falls", figures: ["Phandalin"],
        body: "Orc raids empty Tresendar Manor near Phandalin. Its cellars will sit abandoned for centuries — until they become the hideout of the Redbrands." },
      { date: "1372 DR", title: "The Shadovar return",
        body: "Far to the north, an old enemy stirs back into the light of day.",
        annal: "Per the Candlekeep Annals: the Shadovar of Thultanthar return openly to Faerûn after more than a thousand years of silence. Somewhere, an old goddess's patience begins to stir again." },
      { date: "1385 DR", title: "The Spellplague", figures: ["Dante", "Pim", "the deep gnomes of Tingstone"],
        body: "The Spellplague sweeps the Realms and stills the tower's magic. Dante blinks into a half-controlled dream — years later reached by a young girl named Pim. Drider forces overrun Tingstone, driving survivors into Hideaway Bay.",
        annal: "Emporium Conservatory archives: the Conservatory's own troubling annotation marks this as the very year Asmodeus is recorded to ascend to full godhood." },
      { date: "1451 DR", title: "Mount Hotenow erupts",
        body: "Fire and ash reshape the north.",
        annal: "Per the Candlekeep Annals: the eruption devastates the Neverwinter region and empties the village of Thundertree — leaving it exactly the kind of forsaken ruin a young dragon would one day claim." },
      { date: "1487 DR", title: "The Second Sundering",
        body: "The world's magic steadies again, on the very eve of the Emporium's rise.",
        annal: "Per the Candlekeep Annals: the Weave, broken since the Spellplague, is repaired — just a handful of years before a wizard out of Neverwinter opens the doors of a certain Emporium." },
    ],
  },
  {
    id: "rise", label: "Rise of the Emporium", range: "~5 years ago",
    blurb: "A wizard out of Neverwinter builds a house of wonders — and makes a bargain that will echo across the planes.",
    events: [
      { date: "~5 yrs", title: "The Emporium is founded", figures: ["Finnegan Flynn", "Damien", "Zoey", "Bastion", "Hariqua Na'Haran"],
        body: "Finnegan Flynn is still building his dream when the Lord's Alliance calls him south to face Hariqua Na'Haran's Circle of Flame. With his three companions he cuts through the cult in the Trollclaws." },
      { date: "~5 yrs", title: "The Wish is bargained", figures: ["Flynn", "Hariqua Na'Haran", "Sildar Hallwinter"],
        body: "In the final duel, Flynn halts instead of striking Hariqua down, trading her freedom for a single immense wish. Publicly the cult is \"broken,\" and Flynn is rewarded the Waterdeep barracks that becomes the Emporium of Wonders." },
      { date: "since", title: "Hariqua's vengeance", figures: ["Hariqua Na'Haran", "the Efreeti Sultan"],
        body: "The Sultan judges Hariqua weak for trading a wish for her own life, exiles her, then restores her power with a command: \"Conquer Flynn and make Waterdeep suffer.\" She returns to rebuild the Circle of Flame." },
    ],
  },
  {
    id: "fables", label: "The Fables", range: "1491 DR",
    blurb: "A new band is drawn into Flynn's orbit — and their hunt for a lost Mythallar reaches all the way to the gods.",
    events: [
      { date: "Prologues", title: "Oni & Hunting Flames", figures: ["Ty'Ny De'Ath", "Kaladin Tempest", "Bastion Drake"],
        body: "Bastion recruits Ty'Ny De'Ath and Kaladin Tempest. They seize a pirate ship, break an Oni's grip on Tyl Myerda, and destroy a Cult of Flame cell near Inndale." },
      { date: "Ch. 1–3", title: "Phandalin & Wave Echo Cave", figures: ["Iarno ‘Glasstaff’", "Nezznar", "Sildar Hallwinter"],
        body: "The Fables break the Redbrands in Phandalin, unmask Glasstaff as Nezznar's puppet, rescue Sildar Hallwinter, then wrest the Mines of Phandelver from the Black Spider himself." },
      { date: "Ch. 4–5", title: "Soulfire Forge → Hamun Kost", figures: ["Hariqua Na'Haran", "Flynn", "Hamun Kost", "Moira'Val"],
        body: "The Fables survive their first clash with Hariqua's reborn cult and the tragedy of Thornhold Keep. Flynn lays low the Circle of Flame's hidden caverns, claiming the Soulfire Forge. The Fables then run down Hamun Kost, murderer of Moira'Val's master Peer'Na.",
        annal: "Per the Candlekeep Annals: those were the shield dwarves of Clan Stoneshaft, who had held caverns beneath Thornhold since long before the keep briefly fell to the Zhentarim in 1368 DR — and left the Emporium as Thornhold's first uncontested holder in all its long history." },
      { date: "Ch. 6", title: "Fireflies in the Underdark", figures: ["Gypsa", "Chief Tackkl"],
        body: "Deep beneath the world the Fables find Hideaway Bay, the last deep gnomes of drowned Tingstone. In exchange for guiding them to Thundertree, the elders share the firefly lore, and Gypsa joins the crew." },
      { date: "Thundertree", title: "Peace at Thundertree", figures: ["Kaladin Tempest", "the green dragon"],
        body: "The ruined village of Thundertree is held by a young green dragon, a Circle of Flame ally. Kaladin Tempest leads the retaking, and the Fables slay the dragon, freeing the village for the deep gnomes.",
        annal: "Emporium Conservatory archives, filed by Beratrymus Villium: the Conservatory's notes even venture a name for the beast — Venomfang." },
      { date: "Ch. 7", title: "Plague at Larkspur Heath", figures: ["Sir Bently Rhammer", "Newton Filz", "Lord Neebo Wimbleblat"],
        body: "The Fables find the great Library sealed, its scholars poisoned. Rhammer falls, Filz is exposed as a Zhentarim agent and killed, and the poison is traced to Wimbleblat-marked supplies. The librarians are healed and raised.",
        annal: "Per the Candlekeep Annals: a death curse abroad in the world has lately made true resurrection rare and costly — which may say something quiet about Flynn's own hand in the working." },
      { date: "Ch. 8", title: "Wingsong Tower found", figures: ["The Raven Queen", "Dante", "del Thristen", "the Zhentarim"],
        body: "The Fables destroy the Long Shadow to close the Shadowfell tear, guided by the Raven Queen speaking through Val'Orea's memory. The awakened Dante slays his old friend del Thristen at last. The Fables escape with the Mythallar as the Zhentarim seize Damien and two knights." },
      { date: "Return", title: "Thornhold & the reckoning", figures: ["Flynn / Jazirian", "Asmodeus (Ahriman)", "Shar", "the Peregost"],
        body: "Breaking the Zhentarim's ring, the Fables free Damien and his couatl knights and sail home to Thornhold. There Flynn reveals the truth: he is a living dream of Jazirian, his twin is Asmodeus, and the Mythallars fractured the Pact Primordial. Bastion names five gathering storms.",
        annal: "Per the Candlekeep Annals: the Well of Dragons is where the Cult of the Dragon has gathered to raise Tiamat herself — if the smoke there is theirs, that storm is graver than Bastion knows. The Annals also whisper of a town near Baldur's Gate once dragged bodily into Avernus, Asmodeus's own dominion." },
      { date: "Next", title: "The road to Warlock's Crypt", figures: ["Larloch the Shadow King", "the Moon Orb"],
        body: "How many Mythallars survive is unknown even to the Emporium. Flynn and Bastion send the Fables to parlay with Larloch, the Shadow King, said to hold the Moon Orb, believed in truth to be a mythallar. The search continues.",
        annal: "Emporium Conservatory archives: Larloch is one of the very few Netherese archwizards who survived Karsus's Folly under his own power, rather than by del Thristen's contrivances — perhaps the only living witness to that whole age who is not a prisoner of Wingsong Tower." },
    ],
  },
];

export const THREADS: string[] = [
  "Flynn / Jazirian vs. Asmodeus: mending the Pact Primordial the Mythallars broke, while Hariqua's tampering re-tethers Flynn to his fiendish sibling.",
  "The missing fulcrum & the figure between: something foreboding stands unseen between Flynn and Ahriman — for now the bond hides Flynn from his brother's sight.",
  "Shar dances at the edge of sight — a shadow of Asmodeus, her purpose unknown even to Flynn.",
  "The night Flynn was reborn: Damien's knighthood stood guard the night of that rebirth — a story neither has ever told in full.",
  "The Raven Queen's greeting: has it been delivered to Flynn yet, and how will he react?",
  "Hariqua Na'Haran is alive on the Fire Plane, cult rebuilt, sworn to ruin Flynn.",
  "The Zhentarim & Red Wizards of Thay race the Emporium for lost Mythallars; Halia's successor is unknown.",
  "Wimbleblat's Confederation wages a legal, deniable war on the Emporium's goodwill — Bastion is winning it, so far.",
  "Elminster and Laeral Silverhand grow warier of the power the Emporium is gathering.",
  "The next Mythallar: the Fables are being sent to parlay with Larloch, the Shadow King, for the Moon Orb.",
];

export const CHARACTERS: CharacterGroup[] = [
  {
    group: "The Fables", note: "The player characters — six, with a seventh counted in spirit.",
    people: [
      { name: "Ty'Ny De'Ath", role: "Halfling Rogue · Serpent Captain", desc: "The first Fable recruited; now bears the Mantle of the Raven Queen, and with it a charge to hunt the undead and any shadow that would bend death's power to infernal ends." },
      { name: "Kaladin Tempest", role: "Blue-skinned Druid · Master of Druids", desc: "Led the retaking of Thundertree and gained new elemental mastery; carries the Mythallar home in his rucksack. Mentors three Conservatory students, and is sought as a successor by Reidoth, High Druid of the Sword Coast." },
      { name: "Lorafina (\"Lora\")", role: "Fable of the company", desc: "Pilfered gold from dead Zhentarim at the tower and helped interrogate Filz." },
      { name: "Moira'Val", role: "Head Librarian · Sorceress", desc: "Descendant of the mortal Wingsong bloodline, kin to Pim by it; her master Peer'Na was murdered by Hamun Kost." },
      { name: "Pim", role: "Head Archivist", desc: "As a child she reached the sleeping Dante; now his companion. Also of Wingsong blood, kin to Moira'Val. Records the Fables' tales with Erka Coo's feather." },
      { name: "Salihafa (Dr. Salihafa)", role: "Cleric · Master of Divinity", desc: "Returns hearing his god clearly, speaking through an alligator skull from the Marsh of Dead Men." },
      { name: "Erka Coo", role: "Owl-like plumed heroine", desc: "A Fable of the early adventures; now runs the Owl's Roost Orphanage in Neverwinter and gave Flynn the feather Pim writes with." },
    ],
  },
  {
    group: "Emporium Leadership", note: "Flynn's Three Companions.",
    people: [
      { name: "Finnegan Flynn", role: "Proprietor of the Emporium", desc: "Wizard “to kings and enchanter of queens.” Secretly a living dream of Jazirian, reincarnating across ages. Rarely shows his true power — but once laid low the Circle of Flame's caverns single-handed." },
      { name: "Bastion Drake, Esquire", role: "Chief of Acquisitions", desc: "Tiefling bard, 32, twin to Zoey; charming strategist and Flynn's chief correspondent. Kept the Drake name — never formally adopted — but is chosen family and equal to Flynn in all but blood." },
      { name: "Zoey Drake", role: "Commander of the Serpent Mercenaries", desc: "Tiefling, 32, twin to Bastion; blunt and practical where Bastion charms. A rare combination of engineering and battle-tactics genius, and physically the stronger of the twins." },
      { name: "Damien Wingsong", role: "Knight Commander of the Knights of Wingsong", desc: "Dragonborn couatl; Chief of Research and Investigation. Carries no Wingsong blood — took up the family's name himself, believing the true bloodline extinct. Fair, kind, and likely wiser than Flynn; raised Bastion and Zoey in all but blood." },
    ],
  },
  {
    group: "Allies & Retainers",
    people: [
      { name: "Laeral Silverhand", role: "Open Lord of Waterdeep", desc: "Chosen of Mystra; allied with Flynn, for now — scolds him like the son she never had time to raise properly." },
      { name: "Elminster", role: "Archwizard", desc: "Wary mentor-figure to Flynn and Bastion, tending the recovering Mordenkainen; the one voice in the world Flynn never tries to charm." },
      { name: "Sildar Hallwinter", role: "Retired Griffon Cavalry knight", desc: "Lord's Alliance agent who recruited Flynn against the Circle of Flame." },
      { name: "Reidoth", role: "High Druid of the Sword Coast", desc: "Long a friend of Qelline Alderleaf; has taken an interest in Kaladin Tempest as a possible successor." },
      { name: "Gypsa", role: "Deep gnome engineer · Captain of the Fables' Fortune", desc: "From Hideaway Bay; fast friends with Zoey Drake — her undimmable joy is one of the few things that reliably softens Zoey's edges." },
      { name: "Parker Peterson", role: "Proprietor, the Wayfarer Inn", desc: "Discovered by Bastion running a small Triboar Trail inn; genuinely the best innkeeper on the High Road, unaware the ale and music that made his inn famous are quietly Bastion's own touch." },
      { name: "Gerk", role: "Quartermaster & Banker", desc: "Once Phandalin's town clerk; now lives in the caverns below the Citadel, closer to the ledgers than to daylight, and happier for it." },
      { name: "Glorn & Ben Pendragon", role: "Guardians of the Fables' HQ", desc: "Glorn, a spectator found in the Mines beneath Phandalin, is kept calm at the hidden headquarters' door by Ben, the stableboy who has a knack for it." },
      { name: "The Raven Queen", role: "Deity of death, fate, and winter", desc: "Appeared wearing Val'Orea Wingsong's face; revealed the Wingsong bloodline's truth and gave Ty'Ny her Mantle. Spoke of Flynn as an old, familiar acquaintance." },
      { name: "Jazirian", role: "Primordial couatl-deity of law, light, and mercy", desc: "A being of pure positive energy; Flynn is her living dream. Twin of Asmodeus, whose fiendish power runs to the negative pole." },
    ],
  },
  {
    group: "Antagonists & Dark Powers",
    people: [
      { name: "Hariqua Na'Haran", role: "Fire genasi sorceress", desc: "Founder of the Circle of Flame; illegitimate daughter of the Efreeti Sultan; bound and then betrayed by Flynn's Wish. Slaughtered the Stoneshaft dwarves of Thornhold in a failed bid to claim the keep." },
      { name: "Asmodeus / Ahriman", role: "Archfiend of Baator", desc: "Jazirian's twin; seeks to unmake and remake the world via the broken Pact Primordial." },
      { name: "Shar", role: "Goddess of darkness", desc: "Asmodeus's shadow; hunted the tower via the Shadovar; now watching the Fables." },
      { name: "The Peregost", role: "Leader of the Zhentarim", desc: "Newly emerged, changing the balance of power in the Black Network." },
      { name: "Carrolyn del Thristen (deceased)", role: "Netherese archmage", desc: "Built the tower's Infinite Planar Cycler; decayed into a Nothic across the centuries; slain at last by Dante." },
      { name: "The Macroscian (destroyed)", role: "Long Shadow", desc: "Netherese shadow-horror tethered as the tower's dark pole; slain by the Fables. Some fragment of Val'Orea Wingsong's memory lingered within it until its fall." },
      { name: "Hamun Kost", role: "Red Wizard of Thay · Necromancer", desc: "Slew Moira'Val's master Peer'Na for the Wingsong book; now imprisoned in Thornhold." },
      { name: "Lord Neebo Wimbleblat", role: "Patriarch, House Wimbleblat", desc: "Orchestrated the Larkspur poisonings, then pivoted to building a political confederation of old-money nobles against the Emporium." },
      { name: "Larloch, the Shadow King", role: "Ancient Netherese lich", desc: "Enthroned at Warlock's Crypt, said to hold the Moon Orb. Neither clearly ally nor enemy — a power unto himself." },
      { name: "The Dead Three", role: "Rising gods of murder and strife", desc: "Invoked in the blood and unrest sweeping Baldur's Gate." },
    ],
  },
];

export const LOCATIONS: PlaceGroup[] = [
  {
    group: "The Emporium's Domain",
    places: [
      { name: "Waterdeep", desc: "Seat of the Emporium and the Lord's Alliance." },
      { name: "Thornhold Keep", desc: "The Emporium's original northern stronghold on the High Road; its old walls now sit eastward, humbled beneath the new Citadel. Holds Hamun Kost in its dungeons." },
      { name: "The Emporium Citadel", desc: "Flynn's new seat, raised atop the thorn's western peak over the sea-cliff. Pale stone, ribbed slate-dark domes, and spired towers hung with ten-pointed banners, linked to Southwall by terraced cliffside stairways." },
      { name: "The Fables' Headquarters", desc: "A hidden sea-cliff cavern beneath the Citadel, reached through the old Stoneshaft tunnels, vast enough to dock the Fables' Fortune. Guarded by Glorn and Ben Pendragon." },
      { name: "The Conservatory Campus", desc: "The Emporium Conservatory's walled home ground on the thorn's north side, halls of arcane and divine study, adjoining the Druid's Forest." },
    ],
  },
  {
    group: "The High Road",
    places: [
      { name: "Phandalin", desc: "Frontier mining town on the Triboar Trail; the Emporium's first proof of concept, now safeguarded by standing Serpent patrols." },
      { name: "The Triboar Trail", desc: "Road linking Phandalin to Triboar and the High Road, Emporium-patrolled its full length, past the ruins of Conyberry." },
      { name: "Wave Echo Cave", desc: "The lost Mines of Phandelver and the Forge of Spells; now an Emporium research outpost." },
      { name: "Triboar & Yartar", desc: "Rival crossroads trade towns; Bastion brokered parallel deals with both during the hunt for Hamun Kost, unknown to either." },
      { name: "Southwall", desc: "Village Bastion built from bare ground beneath Thornhold's south wall to house the citadel's workers; heart of the community is the Wayfarer Inn." },
    ],
  },
  {
    group: "Underdark & Beyond",
    places: [
      { name: "Hideaway Bay / Tingstone", desc: "Underdark refuge of the deep gnomes on the Shimmerlake, beset by driders and yugoloths." },
      { name: "Thundertree", desc: "Ruined village retaken by the Fables after slaying the young green dragon that held it; now the deep gnomes' peaceful surface home." },
      { name: "Larkspur Heath", desc: "Built where floating Larkspur fell; site of the poison plot and the Great Library." },
      { name: "Wingsong Tower", desc: "Once Wingsong Manor before del Thristen's siege; the Netherese watchtower, home to the Mythallar, the Fey and Shadow demiplanes, and the Anchor Chamber." },
      { name: "Tyl Myerda", desc: "Magic-banning island now supplying the Emporium; site of the Oni prologue." },
    ],
  },
  {
    group: "The Frontier of the Unknown",
    places: [
      { name: "Warlock's Crypt", desc: "Seat of Larloch the Shadow King near the Sword Coast; the Fables' next destination, where the Moon Orb is said to rest." },
      { name: "City of Brass", desc: "Efreeti capital on the Plane of Fire; Hariqua's origin." },
      { name: "Baator", desc: "The Nine Hells, where the injured Asmodeus/Ahriman broods." },
      { name: "The Silver Marches, Well of Dragons, Baldur's Gate, Amn", desc: "Sites of Bastion's five gathering storms." },
      { name: "Neverwinter", desc: "Flynn's and the Drakes' childhood home; site of the Owl's Roost Orphanage." },
    ],
  },
];
