abstract class Teos {
  public Nimi: string;
  public Kustantaja: string;
  public JulkaisuVuosi: number;
  public tekijat: string[];
  public constructor(
    nimi: string,
    kustantaja: string,
    julkaisuvuosi: number,
    ...tekijat: string[]
  ) {
    this.Nimi = nimi;
    this.Kustantaja = kustantaja;
    this.JulkaisuVuosi = julkaisuvuosi;
    this.tekijat = tekijat;
  }
}

class Kirja extends Teos {
  private _sivumaara: number;
  private static sivujaYht = 0;

  public constructor(
    nimi: string,
    kustantaja: string,
    julkaisuvuosi: number,
    sivumaara: number,
    ...tekijat: string[]
  ) {
    super(nimi, kustantaja, julkaisuvuosi, ...tekijat);
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

class AaniKirja extends Kirja {
  public Lukija: string;
  public PituusMin: number;

  public constructor(
    nimi: string,
    kustantaja: string,
    julkaisuvuosi: number,
    sivumaara: number,
    lukija: string,
    pituusMin: number,
    ...tekijat: string[]
  ) {
    super(nimi, kustantaja, julkaisuvuosi, sivumaara, ...tekijat);
    this.Lukija = lukija;
    this.PituusMin = pituusMin;
  }

  public override julkaisuTiedot(): string {
    return `Kustantaja ${this.Kustantaja} julkaisi vuonna äänikirjan ${this.Nimi}, jonka pituus on ${this.PituusMin} minuuttia`;
  }
}

const kirja = new AaniKirja(
  'Tatu ja patu',
  'JAMK',
  2001,
  200,
  'Arttu',
  150,
  'Jarkko',
);

console.log(kirja.julkaisuTiedot());
