class Laatikko<T> {
  private sisalto: T | null = null;

  public Laita(x: T): void {
    this.sisalto = x;
  }

  public ota(): T | null {
    const tavara = this.sisalto;
    this.sisalto = null;
    return tavara;
  }
}
