export class Foo {
  public id: number | undefined;
  public name: string;

  constructor(name: string, id?: number) {
    this.id = id;
    this.name = name;
  }
}
