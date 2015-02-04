export class Welcome {
  constructor() {
    this.heading = 'Welcome';
    this.firstName = 'John';
    this.lastName = 'Doe';
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  welcome() {
    alert(`Welcome ${this.firstName}`);
  }
}