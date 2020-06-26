import { User } from '../src/space-age.js';

describe('User and all its initial properties age, country, sex before adding life expectancy', () => {
  let user;

  beforeEach(() => {
    user = new User(100, "Mexico", "Female", 417, 161, 53, 8, 71);
  });

  test('should correctly create a User object with three initial properties: age, country, sex', () => {
    expect(user.age).toEqual(100);
    expect(user.country).toEqual("Mexico");
    expect(user.sex).toEqual("Female");
  });

  test('should correctly return users age on mercury and update user object', () => {
    expect(user.calculateMercuryAge()).toEqual(417);
    expect(user.calculateMercuryAge()).toEqual(user.mercuryAge);
  });

  test('should correctly return users age on venus and update user object', () => {
    expect(user.calculateVenusAge()).toEqual(161);
    expect(user.calculateVenusAge()).toEqual(user.venusAge);
  });

  test('should correctly return users age on mars and update user object', () => {
    expect(user.calculateMarsAge()).toEqual(53);
    expect(user.calculateMarsAge()).toEqual(user.marsAge);
  });

  test('should correctly return users age on jupiter and update user object', () => {
    expect(user.calculateJupiterAge()).toEqual(8);
    expect(user.calculateJupiterAge()).toEqual(user.jupiterAge);
  });

  test('should correctly add life expectancy to user object', () => {
    expect(user.calculateLifeExpectancy()).toEqual(71);
    expect(user.calculateLifeExpectancy()).toEqual(user.lifeExpectancy);
  });

  test('should correctly return years left to live on mercury', () => {
    expect(user.calculateMercuryLifeExpectancy()).toEqual(`You have 192 years left to live on Mercury`);
  });

  test('should correctly return years left to live on venus', () => {
    expect(user.calculateVenusLifeExpectancy()).toEqual(`You have 75 years left to live on Venus`);
  });

  test('should correctly return years left to live on mars', () => {
    expect(user.calculateMarsLifeExpectancy()).toEqual(`You have 25 years left to live on Mars`);
  });

  test('should correctly return years left to live on jupiter', () => {
    expect(user.calculateJupiterLifeExpectancy()).toEqual(`You have 4 years left to live on Jupiter`);
  });
});