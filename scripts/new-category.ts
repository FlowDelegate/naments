import * as readline from 'readline';
import { writeFileSync, readFileSync } from 'fs';
import { join } from 'path';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const ask = (q: string) => new Promise<string>((res) => rl.question(q, res));

async function main() {
  console.log('\n🎭 New naments category\n');

  const slug = (await ask('Category slug (kebab-case, e.g. "star-wars"): ')).trim().toLowerCase();

  if (!slug || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) {
    console.error('Invalid slug. Use kebab-case like "star-wars" or "90s".');
    process.exit(1);
  }

  const jsonPath = join(__dirname, '..', 'src', 'categories', `${slug}.json`);
  writeFileSync(jsonPath, '[\n  \n]\n');
  console.log(`\nCreated ${jsonPath}`);

  // Generate a valid JS identifier for the import
  const varName = slug.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase()).replace(/^(\d)/, '_$1');

  const barrelPath = join(__dirname, '..', 'src', 'categories', 'index.ts');
  const barrel = readFileSync(barrelPath, 'utf-8');

  const importLine = `import ${varName} from './${slug}.json';`;
  const registryLine = `  '${slug}': ${varName},`;

  // Add import after last import
  const lastImportIdx = barrel.lastIndexOf('import ');
  const endOfLastImport = barrel.indexOf('\n', lastImportIdx) + 1;
  let updated = barrel.slice(0, endOfLastImport) + importLine + '\n' + barrel.slice(endOfLastImport);

  // Add registry entry before closing brace
  const closingBrace = updated.lastIndexOf('};');
  updated = updated.slice(0, closingBrace) + registryLine + '\n' + updated.slice(closingBrace);

  writeFileSync(barrelPath, updated);
  console.log(`Updated ${barrelPath}`);

  console.log(`
Next steps:
  1. Add at least 10 sorted names to src/categories/${slug}.json
  2. Run: npm test
  3. Open a PR!
`);

  rl.close();
}

main();
