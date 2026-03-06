interface Ihminen {
  etunimi: string;
  sukunimi: string;
  ika: number;
  taidot?: string[];
  taitotaso?: () => number | undefined;
}

const pekka: Ihminen = {
  etunimi: 'Pekka',
  sukunimi: 'Pekkanen',
  ika: 30,
  taidot: ['ohjelmointi', 'ahmiminen'],
  taitotaso() {
    return this.taidot?.length;
  },
};

function tiedot(hlo: Ihminen) {
  console.log(
    `Henkilö on ${hlo.etunimi} ${hlo.sukunimi} ja hänellä on ikää ${hlo.ika} vuotta`,
  );
}

tiedot(pekka);
