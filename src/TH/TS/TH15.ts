export class Ympyra {
  private _halkasia: number;
  public PII: number = 3.14;
  public constructor(halkaisia: number) {
    this._halkasia = halkaisia;
  }

  public ympyranKeha(): number {
    return this.PII * this._halkasia;
  }

  public pintaAla(): number {
    return this._halkasia ** 2 * this.PII;
  }
}

const ympyra = new Ympyra(10);

console.log(ympyra.pintaAla());
console.log(ympyra.ympyranKeha());
