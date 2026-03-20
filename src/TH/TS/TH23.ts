abstract class Elain {
  public LajinNimi: string;
  public Nimi: string;
  public Ika: number;
  public constructor(lajinNimi: string, nimi: string, ika: number) {
    this.LajinNimi = lajinNimi;
    this.Nimi = nimi;
    this.Ika = ika;
  }

  public abstract Aantele(): string;
}

class Kissa extends Elain {
  public Varit: string[];
  public constructor(nimi: string, ika: number, varit: string[]) {
    super('Kissa', nimi, ika);
    this.Varit = varit;
  }

  public Aantele(): string {
    return 'miau';
  }
}

class Papukaija extends Elain {
  public constructor(nimi: string, ika: number) {
    super('Papukaija', nimi, ika);
  }

  public Aantele(): string {
    return 'Kraah, nimeni on ' + this.Nimi;
  }
}

const kissa = new Kissa('Misse', 5, ['musta', 'valkoinen']);
console.log(kissa.Aantele());
const kaija = new Papukaija('Polly', 20);
console.log(kaija.Aantele());
