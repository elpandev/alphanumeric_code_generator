import { describe, expect, test,  } from 'vitest'
import { CodeGenerator } from '../src/index'

describe.each(['ABC', 'DTY', 'Sj7Yu8'])

('codes generated using seed "%s" must be uniques', (seed: string) => {
  const generator = new CodeGenerator(seed)

  test.each([1, 2, 3, 4, 5, 6, 7])

  ('codes generated using length = %i', (length: number) => {
    const codes     = {} as Record<string, number>
    const max_value = generator.calculate_max_value(length)

    for (let i = 1; i <= max_value; i++) {
      const code = generator.generate(i, length)
            
      expect(codes[code], `code "${code}" generated using number: ${i} <= max_value: ${max_value} is not unique`).toBe(undefined)

      codes[code] = i
    }

    for (let i = max_value + 1; i <= max_value + 3; i++) {
      const code = generator.generate(i, length)
  
      expect(codes[code], `code "${code}" generated using number: ${i} > max_value: ${max_value} is unique`).toBe(i - max_value)
    }
  })
})
