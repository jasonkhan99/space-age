import { User } from '../src/space-age.js';

describe('User and all its initial properties age, country, sex before adding life expectancy', () => {
  let user;

  beforeEach(() => {
    user = new User(25, "Mexico", "Female", 71);
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

  test('should correctly return users age on jupiter', () => {
    expect(user.calculateJupiterAge()).toEqual(2);
  });

  test('should correctly add life expectancy to user object', () => {

    expect(user.calculateLifeExpectancy()).toEqual(71);
    expect(user.calculateLifeExpectancy()).toEqual(user.lifeExpectancy);
  });
});