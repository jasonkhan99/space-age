export class User {
  constructor(age, country, sex, mercuryAge, venusAge, marsAge, jupiterAge, lifeExpectancy) {
    this.age = age;
    this.country = country;
    this.sex = sex;
    this.mercuryAge = mercuryAge;
    this.venusAge = venusAge;
    this.marsAge = marsAge;
    this.jupiterAge = jupiterAge;
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
    this.jupiterAge = Math.round(this.age / 11.86);
    return this.jupiterAge;
  }

  calculateLifeExpectancy() {
    this.lifeExpectancy = 71; // This would be a formula based on a database of info regarding sex and country life expectancy
    return this.lifeExpectancy;
  }

  calculateMercuryLifeExpectancy() {
    return `You have ${Math.round(this.lifeExpectancy / .24) - this.mercuryAge} years left to live on Mercury`;
  }
}