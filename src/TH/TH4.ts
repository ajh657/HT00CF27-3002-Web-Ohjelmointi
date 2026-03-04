const summaHomma = function (
  taul: number[],
  cb: (luku: number) => number,
): number {
  let tulos = 0;
  for (const alkio of taul) {
    tulos += cb(alkio);
  }
  return tulos;
};

const taulukko = [1, 2, 3, 4, 5];
// laske pelkkä summa
console.log(summaHomma(taulukko, (luku) => luku));
// laske summa neliöistä, kakkosen potensseista
console.log(summaHomma(taulukko, (luku) => luku * luku));
