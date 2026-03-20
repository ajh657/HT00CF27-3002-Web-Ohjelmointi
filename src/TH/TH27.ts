class Laatikko<T> {
  private sisalto: T | null = null;

  public constructor(tavara: T | null) {
    this.sisalto = tavara;
  }

  public Laita(x: T): void {
    this.sisalto = x;
  }

  public ota(): T | null {
    const tavara = this.sisalto;
    this.sisalto = null;
    return tavara;
  }

  public katoSisalto(): T | null {
    return this.sisalto;
  }
}

const laatikko = new Laatikko<string>('arguments');

console.log(laatikko.katoSisalto());

laatikko.Laita('testi');
console.log(laatikko.ota());
console.log(laatikko.katoSisalto());
