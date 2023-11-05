import { User } from 'demo-lib';

describe('User', () => {
  it('should create an instance', () => {
    const user: User = {
      name: 'John',
      age: 42,
    };
    expect(user).toBeTruthy();
  });
});
