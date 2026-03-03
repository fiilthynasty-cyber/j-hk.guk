import { readFileSync } from 'node:fs'

try {
  const raw = readFileSync(new URL('../package.json', import.meta.url), 'utf8')
  JSON.parse(raw)
  console.log('package.json is valid JSON')
} catch (error) {
  console.error('Invalid package.json JSON syntax')
  console.error(error instanceof Error ? error.message : String(error))
  process.exit(1)
}
