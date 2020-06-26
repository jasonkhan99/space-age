export class User {
  constructor(earthAge, country, sex, mercuryAge, venusAge, marsAge, jupiterAge) {
    this.earthAge = earthAge;
    this.country = country;
    this.sex = sex;
    this.mercuryAge = mercuryAge;
    this.venusAge = venusAge;
    this.marsAge = marsAge;
    this.jupiterAge = jupiterAge;
  }

  calculateMercuryAge() {
    mercuryAge = this.age / .24;
  }
}