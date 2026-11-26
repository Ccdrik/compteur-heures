

import type { Heure } from './types.ts';


export function convertirEnMinutes(horaire: Heure): number {
    const morceaux = horaire.split(":");
    const heures = Number(morceaux[0]);
    const minutes = Number(morceaux[1]);
    const calculminutes = heures * 60 + minutes;
    return calculminutes;
}

export function convertirEnHeures(minutes: number): Heure {

    const heures = Math.floor(minutes / 60);
    const minutesRestantes = minutes % 60;
    const heuresEnString = String(heures).padStart(2, "0");
    const minutesRestantesEnString = String(minutesRestantes).padStart(2, "0");
    return (`${heuresEnString}:${minutesRestantesEnString}`);

}

