export class User {
  constructor(age, country, sex) {
    this.age = age;
    this.country = country;
    this.sex = sex;
  }

  calculateMercuryAge() {
    return this.age / .24;
  }
}