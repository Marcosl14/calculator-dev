import shortId from 'shortid';

class Technology {
  private _id: string;
  private _name: string;

  constructor(name: string) {
    this._id = shortId.generate();
    this._name = name;
  }

  public get id(): string {
    return this._id;
  }

  public set id(pid: string) {
    this._id = pid;
  }

  public get name(): string {
    return this._name;
  }

  public set name(pname: string) {
    this._name = pname;
  }
}
export default Technology;
