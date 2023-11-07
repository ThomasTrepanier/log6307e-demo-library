import { max } from './model';

describe('Model', () => {
  it('should return max', () => {
    expect(max(1, 2)).toEqual(2);
  });
});
