export class Signature {
  private _name: string;
  private _surname: string;

  constructor(name: string, surname: string) {
    this._name = name;
    this._surname = surname;
  }

  public toString():string {
    return `${this._name} ${this._surname}`;
  }
}