import { describe, expect, test } from 'vitest';
import { add, addButOverEngineered } from './math';

describe('add()', () => {
  test.concurrent('adds numbers together', () => {
    expect(add(5, 4)).toEqual(9);
  });

  test.concurrent('concatenates strings', () => {
    expect(add('ham', 'cheese')).toBe('hamcheese');
  });
});

describe('addButOverEngineered', () => {
  test.concurrent('adds numbers together', () => {
    expect(addButOverEngineered(5)(4)).toEqual(9);
  });

  test('throws an error on non-numbers', () => {
    // @ts-ignore intentionally sending the wrong types through
    expect(() => addButOverEngineered('ham')('cheese')).toThrowError();
  });
});
