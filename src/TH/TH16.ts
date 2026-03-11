interface Ihminen {
  etunimi: string;
  sukunimi: string;
  kengannumero: number;
  taidot?: string[];
  taitotaso?: () => number | undefined;
}

const pekka: Ihminen = {
  etunimi: 'Pekka',
  sukunimi: 'Pekkanen',
  kengannumero: 44,
  taidot: ['ohjelmointi', 'ahmiminen'],
  taitotaso() {
    return this.taidot?.length;
  },
};

function tiedot(hlo: Ihminen): void {
  console.log(
    `Henkilö on ${hlo.etunimi} ${hlo.sukunimi} ja hänellä on kengät numeroltaan ${hlo.kengannumero}.`,
  );
}

tiedot(pekka);
