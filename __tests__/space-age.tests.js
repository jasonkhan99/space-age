import { User } from '../src/space-age.js';

describe('User and all its properties', () => {
  let user;

  beforeEach(() => {
    user = new User(25, "Mexico", "Female");
  });

  test('should correctly create a User object with three properties: age, country, sex', () => {
    expect(user.age).toEqual(25);
    expect(user.country).toEqual("Mexico");
    expect(user.sex).toEqual("Female");
  });

  test('should correctly return users age on mercury', () => {
    expect(user.calculateMercuryAge()).toEqual(104);
  });

  test('should correctly return users age on venus', () => {
    expect(user.calculateVenusAge()).toEqual(40);
  });

  test('should correctly return users age on mars', () => {
    expect(user.calculateMarsAge()).toEqual(13);
  });
});