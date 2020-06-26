export class User {
  constructor(earthAge, country, sex, mercuryAge) {
    this.earthAge = earthAge;
    this.country = country;
    this.sex = sex;
    this.mercuryAge = mercuryAge;
  }

  calculateMercuryAge() {
    return Math.round(this.earthAge / .24);
  }
}