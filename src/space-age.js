export class User {
  constructor(age, country, sex) {
    console.log(age);
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
    this.lifeExpectancy = 71;
    return this.lifeExpectancy;
  }
}