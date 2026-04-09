import { describe, it, expect } from 'vitest';
import { readdirSync, readFileSync } from 'fs';
import { join, basename } from 'path';

const categoriesDir = join(__dirname, '..', 'src', 'categories');

const jsonFiles = readdirSync(categoriesDir).filter((f) => f.endsWith('.json'));

describe('category data integrity', () => {
  it('has at least one category file', () => {
    expect(jsonFiles.length).toBeGreaterThan(0);
  });

  for (const file of jsonFiles) {
    const slug = basename(file, '.json');

    describe(`${slug}`, () => {
      const raw = readFileSync(join(categoriesDir, file), 'utf-8');
      const data = JSON.parse(raw);

      it('is a non-empty array', () => {
        expect(Array.isArray(data)).toBe(true);
        expect(data.length).toBeGreaterThan(0);
      });

      it('has at least 10 entries', () => {
        expect(data.length).toBeGreaterThanOrEqual(10);
      });

      it('contains only non-empty strings', () => {
        for (const name of data) {
          expect(typeof name).toBe('string');
          expect(name.trim().length).toBeGreaterThan(0);
        }
      });

      it('has no duplicates (case-insensitive)', () => {
        const lower = data.map((n: string) => n.toLowerCase());
        expect(new Set(lower).size).toBe(lower.length);
      });

      it('is sorted alphabetically', () => {
        const sorted = [...data].sort((a: string, b: string) =>
          a.localeCompare(b)
        );
        expect(data).toEqual(sorted);
      });
    });
  }
});
