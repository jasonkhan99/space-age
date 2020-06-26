export class User {
  constructor(age, country, sex) {
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

  calculateMarsAge() {
    return Math.round(this.age / 1.88);
  }

  calculateJupiterAge() {
    return Math.round(this.age / 11.86);
  }

  calculateLifeExpectancy() {
    User.lifeExpectancy = 71;
  }
}