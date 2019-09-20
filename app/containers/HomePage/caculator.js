import { isArray } from 'lodash';
/**
 *
 * @param {input: array of string} // e.g: [‘a’, ‘ab’, ‘abc’, ‘cd’, ‘def’]
 * @return the strings’ length that appear most in input
 * e.g: [‘abc’, ‘def’]
 */
export const algorithm1 = input => {
  if (!isArray(input)) return [];

  const maps = new Map();

  for (let i = 0, len = input.length; i < len; i += 1) {
    maps.set(input[i], input[i].length);
  }

  // max length
  const maxLength = Math.max(...[...maps.values()]);

  return input.filter(word => word.length === maxLength);
};

// private
function sortNumber(a, b) {
  return a - b;
}

/**
 * @param {input: array of number} // e.g [1, 4, 2, 3, 5]
 * @return sum of integers on top 2
 * e.g: 9 (4 + 5)
 */
export const sumNumTop2 = input => {
  if (!input) return -1;

  const arrs = input.slice();
  // sort number from small to large
  arrs.sort(sortNumber);

  const first = arrs.pop();
  const second = arrs.pop();

  return first + second;
};
