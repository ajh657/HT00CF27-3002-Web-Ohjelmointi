const nimi = 'Pekka';
let ika;
let ulkonaSataa = false;
const lampotilat = [];
lampotilat.push(3.3, 0, 2.1, -3.3, -5.8, 0, 4.1);
let syote;
// oletetaan, että syöte voi olla tyypiltään null, string tai numero.
// testaa siten, että yksi yksi näin on kerrallaan kommentoimattomana.
// syote = null;
// syote = '23';
syote = 23;
ika = syote;
console.log(`Olen ${nimi} ja ${ika} vuotta vanha.`);
console.log(`Ulkona ${ulkonaSataa ? 'sataa' : 'ei sada'}`);
export {};
//# sourceMappingURL=TH1.js.map