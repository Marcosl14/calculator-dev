import shortId from 'shortid';

class Technology {
  private id: string;
  private name: string;

  constructor(name: string) {
    this.id = shortId.generate();
    this.name = name;
  }

  public getId(): string {
    return this.id;
  }

  public setId(pid: string) {
    this.id = pid;
  }

  public getName(): string {
    return this.name;
  }

  public setName(pname: string) {
    this.name = pname;
  }
}
export default Technology;
