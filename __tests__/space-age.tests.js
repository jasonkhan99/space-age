import { User } from '../src/space-age.js';

describe('User and all its properties', () => {
  let user;

  beforeEach(() => {
    user = new User(25, "Mexico", "Female");
  });

  test('should correctly create a User object with three properties: age, country, sex', () => {
    expect(user.earthAge).toEqual(25);
    expect(user.country).toEqual("Mexico");
    expect(user.sex).toEqual("Female");
  });

  test('should correctly return users age on mercury', () => {
    expect(user.calculateMercuryAge()).toEqual(104);
  });
});