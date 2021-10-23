class Technology {
  private id: string | null = null;
  private name: string;

  constructor(name: string) {
    this.name = name.toUpperCase();
  }

  public getId(): string | null {
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
