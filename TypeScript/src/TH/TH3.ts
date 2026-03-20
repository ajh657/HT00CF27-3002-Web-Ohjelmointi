function kertotaulu(x: number, y: number): number[] {
  const kertsi: number[] = [];
  for (let i = 1; i <= y; i++) {
    kertsi.push(i * x);
  }
  return kertsi;
}

const keskiarvoMerkkijono = (laskettava: string, numerot: number[]): string => {
  let summa = 0;
  numerot.forEach((x) => (summa += x));
  return `Keskiarvo (${laskettava}) on ${summa / numerot.length}`;
};

const kolmosenKertsi = kertotaulu(3, 10);
console.log(keskiarvoMerkkijono('ikä', kolmosenKertsi));
