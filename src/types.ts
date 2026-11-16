export type Heure = string;

export type Journee = {
    date: string;
    presences: Periode[];


}

export type Periode = {
    entree: Heure;
    sortie: Heure
}