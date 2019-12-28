import { MonthNode } from './month-node'

export enum DayTypes {
  regular = 'regular',
  unexpected = 'unexpected',
  first = 'first',
  estate = 'estate',
  business = 'business',
}

interface DayNodeOptions {
  title?: string
  type: DayTypes
  index: number
  month: MonthNode
}

export class Day {
  private rootNode: Element
  private parentNode: Element
  private type: DayTypes
  private title: string
  private index: number
  private month: MonthNode

  constructor(parentNode: Element, options: DayNodeOptions) {
    this.parentNode = parentNode
    this.type = options.type
    this.index = options.index
    this.month = options.month

    if (options.title) {
      this.title = options.title
    }

    this.render()
  }

  render() {
    this.rootNode = document.createElement('div')

    this.rootNode.className = 'canvas-day'

    if (this.title) {
      this.rootNode.innerHTML = this.title
    }

    this.rootNode.classList.add(this.getClassName())

    this.parentNode.appendChild(this.rootNode)
  }

  getClassName(): string {
    return `canvas-day--${this.type}`
  }

  setActive() {
    this.rootNode.classList.add('canvas-day--active')
  }

  clearActive() {
    this.rootNode.classList.remove('canvas-day--active')
  }

  getIndexInMonth(): number {
    return this.index
  }

  getIndexInYear(): number {
    return (this.month.index * 6) + this.index
  }

  getMonth(): MonthNode {
    return this.month
  }

  isUnexpected(): boolean {
    return this.type === DayTypes.unexpected
  }

  isRegular(): boolean {
    return this.type === DayTypes.regular
  }

  isBusness(): boolean {
    return this.type === DayTypes.business
  }

  isEstate(): boolean {
    return this.type === DayTypes.estate
  }
}