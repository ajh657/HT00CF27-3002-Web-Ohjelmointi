interface IPerusfaktat {
  laji: string;
  svuosi: number;
}

interface ILiikkuva extends IPerusfaktat {
  liikkumisaani: string;
  liiku: (maara?: number) => void;
}

interface IAanteleva extends IPerusfaktat {
  aani: string;
  aantele: () => string;
}

interface LiikkuuJaAantelee extends ILiikkuva, IAanteleva {}

class Kilpikonna implements ILiikkuva {
  public constructor(laji: string, svuosi: number, liikumisAani: string) {
    this.laji = laji;
    this.svuosi = svuosi;
    this.liikkumisaani = liikumisAani;
  }
  public liikkumisaani: string;
  public laji: string;
  public svuosi: number;
  public liiku(): void {
    console.log(this.liikkumisaani);
  }
}

class Koira implements LiikkuuJaAantelee {
  public constructor(
    public laji: string,
    public svuosi: number,
    public aani: string,
    public liikkumisaani: string,
  ) {}

  public aantele(): string {
    return this.aani;
  }
  public liiku(maara?: number): void {
    if (maara != undefined) {
      for (let i = 0; i < maara; i++) {
        console.log(this.liikkumisaani);
      }
    }
  }
}

const konna = new Kilpikonna('Vihreä', 2000, '??');
konna.liiku();
const koira = new Koira('Saksan paimenkoira', 2020, 'Arf', 'Pant');
console.log(koira.aantele());
koira.liiku(10);
