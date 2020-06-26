export class User {
  constructor(age, country, sex, mercuryAge, venusAge, marsAge, lifeExpectancy) {
    this.age = age;
    this.country = country;
    this.sex = sex;
    this.mercuryAge = mercuryAge;
    this.venusAge = venusAge;
    this.marsAge = marsAge;
    this.lifeExpectancy = lifeExpectancy;
  }

  calculateMercuryAge() {
    this.mercuryAge = Math.round(this.age / .24);
    return this.mercuryAge;
  }

  calculateVenusAge() {
    this.venusAge = Math.round(this.age / .62);
    return this.venusAge;
  }

  calculateMarsAge() {
    this.marsAge = Math.round(this.age / 1.88);
    return this.marsAge;
  }

  calculateJupiterAge() {
    return Math.round(this.age / 11.86);
  }

  calculateLifeExpectancy() {
    this.lifeExpectancy = 71; // This would be a formula based on a database of info regarding sex and country life expectancy
    return this.lifeExpectancy;
  }
}