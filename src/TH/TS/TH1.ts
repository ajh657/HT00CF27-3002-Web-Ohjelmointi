const nimi: string = 'Pekka';
let ika: number | null;
let ulkonaSataa: boolean = false;
const lampotilat: number[] = [];
lampotilat.push(3.3, 0, 2.1, -3.3, -5.8, 0, 4.1);
let syote: number | string | null;

// oletetaan, että syöte voi olla tyypiltään null, string tai numero.
// testaa siten, että yksi yksi näin on kerrallaan kommentoimattomana.
syote = null;
syote = '23';
syote = 23;

ika = syote as unknown as number;
console.log(`Olen ${nimi} ja ${ika} vuotta vanha.`);
console.log(`Ulkona ${ulkonaSataa ? 'sataa' : 'ei sada'}`);
