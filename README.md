# @flowdelegate/naments

Themed name arrays for your agents, bots, and fixtures. Pass a category, get fun names.

> **nam**e + ag**ents** = **naments**

## Install

```bash
npm install @flowdelegate/naments
```

## Usage

```typescript
import { getNames, getName, getCategories, hasCategory } from '@flowdelegate/naments';

// Get all names in a category (sorted)
getNames('christmas');
// => ['Blitzen', 'Comet', 'Cupid', 'Dancer', 'Dasher', ...]

// Get N random unique names
getNames('simpsons', 3);
// => ['Homer', 'Bart', 'Krusty']

// Get one random name
getName('south-park');
// => 'Butters'

// List all available categories
getCategories();
// => ['80s', '90s', 'cats', 'christmas', 'easter', ...]

// Check if a category exists
hasCategory('cats');
// => true
```

## Categories

| Category | Examples |
|----------|----------|
| `80s` | Bueller, McFly, Maverick, Ripley |
| `90s` | Chandler, Morpheus, Buffy, Urkel |
| `cats` | Garfield, Luna, Whiskers, Salem |
| `christmas` | Rudolph, Frosty, Grinch, Tinsel |
| `easter` | Bunny, Cadbury, Peep, Cottontail |
| `movie-stars` | Bogart, Hepburn, Hanks, Streep |
| `presidents` | Lincoln, Kennedy, Washington, Roosevelt |
| `simpsons` | Homer, Bart, Burns, Flanders |
| `south-park` | Cartman, Kenny, Butters, Randy |
| `super-heroes` | Batman, Spidey, Thor, Wolverine |

## Add a Category

Want to add your own? It's easy:

```bash
npm run new-category
```

Or manually:

1. Create `src/categories/your-category.json` with a sorted array of at least 10 names
2. Add an import + registry entry in `src/categories/index.ts`
3. Run `npm test` to validate
4. Open a PR!

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## API

### `getNames(category: string): string[]`
Returns all names in the category, sorted alphabetically.

### `getNames(category: string, count: number): string[]`
Returns `count` random unique names from the category. If `count` exceeds the category size, returns all names (shuffled).

### `getName(category: string): string`
Returns one random name from the category.

### `getCategories(): string[]`
Returns all available category slugs, sorted.

### `hasCategory(category: string): boolean`
Returns `true` if the category exists.

All functions throw with a helpful message if the category doesn't exist.

## License

MIT
