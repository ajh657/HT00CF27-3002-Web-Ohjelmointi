interface IPerusfaktat {
  laji: string;
  svuosi: number;
}

class Koira implements IPerusfaktat {
  public omistaja: string;
  public laji: string;
  public svuosi: number;

  public constructor(omistaja: string, laji: string, syntymavuosi: number) {
    this.omistaja = omistaja;
    this.laji = laji;
    this.svuosi = syntymavuosi;
  }

  public Tiedot(): string {
    return `Minun omistaja on ${this.omistaja} ja synnyin vuonna ${this.svuosi}`;
  }
}

class Kilpikonna implements IPerusfaktat {
  private ruoka: string;
  public laji: string;
  public svuosi: number;

  constructor(ruoka: string, laji: string, syntymavuosi: number) {
    this.ruoka = ruoka;
    this.laji = laji;
    this.svuosi = syntymavuosi;
  }

  public Syo(): string {
    return `Syön ${this.ruoka}`;
  }
}

const koira = new Koira('Jarkko', 'Saksan paimen koira', 2010);
const konna = new Kilpikonna('Salaatti', 'Vihreä', 2000);

console.log(koira.Tiedot());
console.log(konna.Syo());
