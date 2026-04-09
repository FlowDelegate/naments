import { describe, it, expect } from 'vitest';
import { getNames, getName, getCategories, hasCategory } from '../src/index.js';

describe('getCategories', () => {
  it('returns a sorted array of strings', () => {
    const cats = getCategories();
    expect(cats.length).toBeGreaterThan(0);
    const sorted = [...cats].sort();
    expect(cats).toEqual(sorted);
  });

  it('includes known categories', () => {
    const cats = getCategories();
    expect(cats).toContain('christmas');
    expect(cats).toContain('simpsons');
    expect(cats).toContain('90s');
  });
});

describe('hasCategory', () => {
  it('returns true for known categories', () => {
    expect(hasCategory('christmas')).toBe(true);
    expect(hasCategory('cats')).toBe(true);
  });

  it('returns false for unknown categories', () => {
    expect(hasCategory('dinosaurs')).toBe(false);
    expect(hasCategory('')).toBe(false);
  });
});

describe('getNames', () => {
  it('returns all names when no count given', () => {
    const names = getNames('christmas');
    expect(names.length).toBeGreaterThanOrEqual(10);
  });

  it('returns a copy, not the original array', () => {
    const a = getNames('christmas');
    const b = getNames('christmas');
    expect(a).toEqual(b);
    expect(a).not.toBe(b);
  });

  it('returns N random unique names when count given', () => {
    const names = getNames('christmas', 3);
    expect(names.length).toBe(3);
    expect(new Set(names).size).toBe(3);
  });

  it('caps at category size if count exceeds it', () => {
    const all = getNames('christmas');
    const names = getNames('christmas', 999);
    expect(names.length).toBe(all.length);
  });

  it('returns empty array for count 0', () => {
    expect(getNames('christmas', 0)).toEqual([]);
  });

  it('throws for unknown category', () => {
    expect(() => getNames('dinosaurs')).toThrow('Unknown category "dinosaurs"');
    expect(() => getNames('dinosaurs')).toThrow('Available:');
  });
});

describe('getName', () => {
  it('returns a string from the category', () => {
    const all = getNames('simpsons');
    const name = getName('simpsons');
    expect(typeof name).toBe('string');
    expect(all).toContain(name);
  });

  it('throws for unknown category', () => {
    expect(() => getName('dinosaurs')).toThrow('Unknown category "dinosaurs"');
  });
});
