

import type { Heure } from './types.ts';


export function convertirEnMinutes(horaire: Heure): number {
    const morceaux = horaire.split(":");
    const heures = Number(morceaux[0]);
    const minutes = Number(morceaux[1]);
    const calculminutes = heures * 60 + minutes;
    return calculminutes;
}
