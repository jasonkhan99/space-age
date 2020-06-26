export class User {
  constructor(age, country, sex, mercuryAge) {
    this.age = age;
    this.country = country;
    this.sex = sex;
  }

  calculateMercuryAge() {
    return Math.round(this.age / .24);
  }

  calculateVenusAge() {
    return Math.round(this.age / .62);
  }
}