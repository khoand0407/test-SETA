import { algorithm1, sumNumTop2 } from '../caculator';

describe('caculator algorithm1', () => {
  it('should get correctly array of string', () => {
    const input = ['a', 'ab', 'abc', 'cd', 'def'];
    const expectedResult = ['abc', 'def'];

    expect(algorithm1(input)).toEqual(expectedResult);
  });

  it('should get empty array of string if input not array', () => {
    const input = 1;
    const expectedResult = [];

    expect(algorithm1(input)).toEqual(expectedResult);
  });
});

describe('caculator sumNumTop2', () => {
  it('should get correctly number is sum of top 2 numbers', () => {
    const input = [1, 4, 2, 3, 5];
    const expectedResult = 9;

    expect(sumNumTop2(input)).toBe(expectedResult);
  });

  it('should get -1 if input is not exsited', () => {
    const input = null;
    const expectedResult = -1;

    expect(sumNumTop2(input)).toBe(expectedResult);
  });
});
