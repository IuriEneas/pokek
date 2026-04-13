export interface Move {
  id: number;
  name: string;
  accuracy: number;
  power: number;
  pp: number;
  priority: number;

  damage_class: NamedAPIResource;
  type: NamedAPIResource;
  target: NamedAPIResource;
  generation: NamedAPIResource;

  contest_type: NamedAPIResource;
  contest_effect: APIResource;
  super_contest_effect: APIResource;

  contest_combos: ContestCombos;

  effect_entries: VerboseEffect[];
  effect_changes: any[];

  flavor_text_entries: FlavorText[];

  learned_by_pokemon: NamedAPIResource[];

  machines: any[];

  meta: MoveMeta;

  names: Name[];

  past_values: any[];

  stat_changes: any[];

  effect_chance: number | null;
}

export interface NamedAPIResource {
  name: string;
  url: string;
}

export interface APIResource {
  url: string;
}

export interface ContestCombos {
  normal: ComboDetail;
  super: ComboDetail;
}

export interface ComboDetail {
  use_before: NamedAPIResource[] | null;
  use_after: NamedAPIResource[] | null;
}

export interface VerboseEffect {
  effect: string;
  short_effect: string;
  language: NamedAPIResource;
}

export interface FlavorText {
  flavor_text: string;
  language: NamedAPIResource;
  version_group: NamedAPIResource;
}

export interface MoveMeta {
  ailment: NamedAPIResource;
  category: NamedAPIResource;

  ailment_chance: number;
  crit_rate: number;
  drain: number;
  flinch_chance: number;
  healing: number;

  max_hits: number | null;
  min_hits: number | null;

  max_turns: number | null;
  min_turns: number | null;

  stat_chance: number;
}

export interface Name {
  language: NamedAPIResource;
  name: string;
}
