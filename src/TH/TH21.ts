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

class Elakelainen extends Henkilo {
  private elakevuodet: number;
  public constructor(
    etunimi: string,
    sukunimi: string,
    kengannumero: number,
    syntymavuosi: number,
    elakevuodet: number,
  ) {
    super(etunimi, sukunimi, kengannumero, syntymavuosi);
    this.elakevuodet = elakevuodet;
  }

  public elakkellaVuodesta(): number {
    return new Date().getFullYear() - this.elakevuodet;
  }

  public elakeIka(): number {
    return this.elakkellaVuodesta() - this.syntymavuosi;
  }
}

const elake = new Elakelainen('Tatu', 'tatsu', 44, 1890, 20);

console.log(elake.elakkellaVuodesta());
console.log(elake.elakeIka());
console.log(elake.ika);
