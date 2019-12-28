import { toNumberWithSpaces } from '../utils'

interface EstateOptions {
  description: string
  title: string
  id: string
  cost: number
  earning: number
  img: string
}

export class Estate {
  private description: string
  private title: string
  private cost: number
  private earning: number
  private id: string
  private img: string

  constructor(options: EstateOptions) {
    this.title = options.title
    this.cost = options.cost
    this.earning = options.earning
    this.id = options.id
    this.img = options.img
    this.description = options.description
  }

  getTitle(): string {
    return this.title
  }

  getDescription(): string {
    return `<b>${this.title}</b><br/>${this.description}<br/><br/>Цена ${toNumberWithSpaces(this.cost)}<br/>Приносит в месяц ${toNumberWithSpaces(this.earning)}<br/><br/><img src="src/images/${this.img}"/>`
  }

  getCost(): number {
    return this.cost
  }

  getEarning(): number {
    return this.earning
  }

  getId(): string {
    return this.id
  }
}