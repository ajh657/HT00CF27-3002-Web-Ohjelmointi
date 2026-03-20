class Henkilo {
  public etunimi: string;
  public sukunimi: string;
  public kengannumero: number;
  protected syntymavuosi: number;

  public set ika(ika: number) {
    this.syntymavuosi = new Date().getFullYear() - ika;
  }

  public get ika(): number {
    return new Date().getFullYear() - this.syntymavuosi;
  }

  public constructor(
    etunimi: string,
    sukunimi: string,
    kengannumero: number,
    syntymavuosi: number,
  ) {
    this.etunimi = etunimi;
    this.sukunimi = sukunimi;
    this.kengannumero = kengannumero;
    this.syntymavuosi = syntymavuosi;
  }

  public faktat(): string {
    return `Nimeni on ${this.etunimi} ${this.sukunimi} syntynyt vuonna ${this.syntymavuosi} ja kengännumeroni on ${this.kengannumero}`;
  }
}

const pekka = new Henkilo('Pekka', 'Pakkanen', 44, 1980);

console.log(pekka.faktat());
pekka.ika = 36;
console.log(pekka.faktat());
