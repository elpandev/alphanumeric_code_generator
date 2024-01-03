export class CodeGenerator {
  public seed_length: number
  public first_chart: string

  constructor(public seed: string) {
    const unique = Array.from(new Set(seed.split(''))).join('')

    this.seed_length = unique.length
    this.first_chart = unique.charAt(0)
  }

  public calculate_max_value(length: number): number {
    return Math.pow(this.seed_length, length)
  }

  public generate_with_validation(value: number, length: number): string {
    const max_value = this.calculate_max_value(length)

    if (value <= 0) {
      throw new Error(`number must be greater than or equal to 1`)
    }

    if (value >= max_value) {
      throw new Error(`max value is: ${max_value}`)
    }

    return this.generate(value, length)
  }

  public generate(value: number, length: number): string {
    let text = ''
    let curr = value - 1
    let a    = 0
  
    for (let i = 0; i < length; i++) {
      a    = curr % this.seed_length
      curr = Math.floor(curr / this.seed_length)
      text = `${this.seed.charAt(a)}${text}`
    }
  
    return text.padStart(length, this.first_chart)
  }
}
