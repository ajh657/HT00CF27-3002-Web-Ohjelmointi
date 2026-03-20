class Kirja {
  public Nimi: string;
  public Kustantaja: string;
  public JulkaisuVuosi: number;
  public Sivumaara: number;
  public tekijat: string[];

  public constructor(
    nimi: string,
    kustantaja: string,
    julkaisuvuosi: number,
    sivumaara: number,
    ...tekijat: string[]
  ) {
    this.Nimi = nimi;
    this.Kustantaja = kustantaja;
    this.JulkaisuVuosi = julkaisuvuosi;
    this.Sivumaara = sivumaara;
    this.tekijat = tekijat;
  }

  public lisaaTekija(nimi: string): void {
    this.tekijat.push(nimi);
  }

  public julkaisutiedot(): string {
    return `Kustantaja ${this.Kustantaja} julkaisi vuonna ${this.JulkaisuVuosi} kirjan ${this.Nimi}`;
  }

  public tekijaLista(): string {
    return this.tekijat.join(',');
  }
}

const kirja = new Kirja('Tatu ja patu', 'JAMK', 2001, 200, 'Arttu', 'Jarkko');

console.log(kirja.julkaisutiedot());
console.log(kirja.tekijaLista());
kirja.lisaaTekija('Siri');
console.log(kirja.tekijaLista());
