const nimi = 'Pekka'; //ei tarvitse koska ei tule muuttumaan
let ika: number | null; // tämä saattaa muuttua koska se on osa syötteen käsittelyä
let ulkonaSataa: boolean = false; // koska tämä tulee muuttumaan
const lampotilat: number[] = []; //Koska tämä tulee muttumaan ja pitää varmistaa että ei voi asettaa eri tyyppistä tietoa
lampotilat.push(3.3, 0, 2.1, -3.3, -5.8, 0, 4.1);
let syote: number | string | null; //tämä on osa käyttäjän syötettä

// oletetaan, että syöte voi olla tyypiltään null, string tai numero.
// testaa siten, että yksi yksi näin on kerrallaan kommentoimattomana.
syote = null;
syote = '23';
syote = 23;

ika = syote as unknown as number;
console.log(`Olen ${nimi} ja ${ika} vuotta vanha.`);
console.log(`Ulkona ${ulkonaSataa ? 'sataa' : 'ei sada'}`);
