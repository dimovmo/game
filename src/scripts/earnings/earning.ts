export interface EarningOptions {
  description?: string
  title: string
  value: number
}

export class Earning {
  private description: string = ''
  private title: string
  private value: number

  constructor(options: EarningOptions) {
    this.title = options.title
    this.value = options.value

    if (options.description) {
      this.description = options.description
    }
  }

  getTitle(): string {
    return this.title
  }

  getDescription(): string {
    return this.description
  }

  getValue(): number {
    return this.value
  }
}