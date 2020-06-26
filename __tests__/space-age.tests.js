import { User } from '../src/space-age.js';

describe('User and all its properties', () => {

  test('should correctly create a User object with three properties: age, country, sex', () => {
    const user = new User(25, "Mexico", "Female");
    expect(user.age).toEqual(25);
    expect(user.country).toEqual("Mexico");
    expect(user.sex).toEqual("Female");
  });
});