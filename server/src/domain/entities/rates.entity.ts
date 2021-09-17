class User {
  private id: number;
  private name: string;
  private surname: string;
  private readonly email: string;
  private password: string;
  private emailHashVerified: boolean;
  private role: string;

  constructor(name: string, surname: string, email: string, hashedPassword: string) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = hashedPassword;
    this.emailHashVerified = false;
  }

  public getId(): number {
    return this.id;
  }

  public changeName(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }

  public getName(): string {
    return this.name;
  }

  public getSurname(): string {
    return this.surname;
  }

  public getRole(): string {
    return '';
  }

  public haveRole(role: string) {
    return this.role === role;
  }

  public getEmail(): string {
    return this.email;
  }

  public hashEmailVerified() {
    return this.emailHashVerified === true;
  }

  public getPassword() {
    return this.password;
  }
}
export default User;
