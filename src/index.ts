import { registry } from './categories/index.js';

export function getCategories(): string[] {
  return Object.keys(registry).sort();
}

export function hasCategory(category: string): boolean {
  return category in registry;
}

export function getNames(category: string, count?: number): string[] {
  const names = registry[category];
  if (!names) {
    throw new Error(
      `Unknown category "${category}". Available: ${getCategories().join(', ')}`
    );
  }
  if (count === undefined) return [...names];
  if (count <= 0) return [];

  const shuffled = [...names];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

export function getName(category: string): string {
  const names = registry[category];
  if (!names) {
    throw new Error(
      `Unknown category "${category}". Available: ${getCategories().join(', ')}`
    );
  }
  return names[Math.floor(Math.random() * names.length)];
}
