class Kirja {
  public Nimi: string;
  public Kustantaja: string;
  public JulkaisuVuosi: number;
  public tekijat: string[];

  private _sivumaara: number;
  private static sivujaYht = 0;

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
    this._sivumaara = sivumaara;
    this.tekijat = tekijat;
    Kirja.sivujaYht += sivumaara;
  }

  public set Sivumaara(maara: number) {
    Kirja.sivujaYht -= this._sivumaara;
    this._sivumaara = maara;
    Kirja.sivujaYht += this._sivumaara;
  }

  public lisaaTekija(nimi: string): void {
    this.tekijat.push(nimi);
  }

  public julkaisuTiedot(): string {
    return `Kustantaja ${this.Kustantaja} julkaisi vuonna ${this.JulkaisuVuosi} kirjan ${this.Nimi}`;
  }

  public tekijaLista(): string {
    return this.tekijat.join(',');
  }

  public static sivujaKirjoissa(): number {
    return this.sivujaYht;
  }
}

const kirja = new Kirja('Tatu ja patu', 'JAMK', 2001, 200, 'Arttu', 'Jarkko');
const kirja2 = new Kirja('Tatu ja patu', 'JAMK', 2001, 500, 'Arttu', 'Jarkko');

console.log(kirja.julkaisuTiedot());
console.log(kirja.tekijaLista());
kirja.lisaaTekija('Siri');
console.log(kirja.tekijaLista());
console.log(kirja2.julkaisuTiedot());

console.log(Kirja.sivujaKirjoissa());

kirja2.Sivumaara = 1000;

console.log(Kirja.sivujaKirjoissa());
