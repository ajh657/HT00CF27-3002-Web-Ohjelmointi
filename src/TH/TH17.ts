class Henkilo {
  public etunimi: string;
  public sukunimi: string;
  public kengannumero: number;
  protected syntymavuosi: number;
  private _ika: number = 0;

  public set ika(vuosi: number) {
    this._ika = new Date().getFullYear() - vuosi;
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
    return `Nimeni on ${this.etunimi} ${this.sukunimi} ja kengännumeroni on ${this.kengannumero}`;
  }
}

const pekka = new Henkilo('Pekka', 'Pakkanen', 44, 1980);

console.log(pekka.faktat());
pekka.syntymavuosi = 2000;
console.log(pekka.syntymavuosi);
