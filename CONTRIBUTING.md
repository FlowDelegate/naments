# Contributing to naments

Adding a category is the #1 way to contribute. Here's how.

## Adding a New Category

### The easy way

```bash
npm run new-category
```

This scaffolds the JSON file and updates the barrel file for you.

### The manual way

1. **Create a JSON file** at `src/categories/your-category.json`:

```json
[
  "Alpha",
  "Bravo",
  "Charlie",
  "Delta",
  "Echo",
  "Foxtrot",
  "Golf",
  "Hotel",
  "India",
  "Juliet"
]
```

2. **Add it to the registry** in `src/categories/index.ts`:

```typescript
import yourCategory from './your-category.json';

// ... in the registry object:
'your-category': yourCategory,
```

3. **Run tests** to validate:

```bash
npm test
```

4. **Open a PR!**

## Category Rules

- **Minimum 10 names** per category
- **Sorted alphabetically** (CI enforces this)
- **No duplicates** (case-insensitive)
- **Non-empty strings** only
- **Family-friendly** — keep it fun for everyone
- **Short names preferred** — these are used for naming agents/bots, so single words or short phrases work best
- **Kebab-case slugs** for category file names (e.g., `star-wars.json`, `90s.json`)

## Development

```bash
npm install        # Install deps
npm test           # Run tests
npm run build      # Build for publishing
npm run lint       # Type check
```

## Questions?

Open an issue — we're happy to help!
