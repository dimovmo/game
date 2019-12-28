import { Day, DayTypes } from './day'

export interface MonthNodeOptions {
  shortName: string
  fullName: string
  index: number
}

export class MonthNode {
  days: Day[] = []
  parentNode: Element
  rootNode: Element
  shortName: string
  index: number

  constructor(parentNode: Element, options: MonthNodeOptions) {
    this.parentNode = parentNode
    this.shortName = options.shortName
    this.index = options.index
// console.log(options.index)
    this.renderRoot()
    this.renderDays()
  }

  renderRoot() {
    this.rootNode = document.createElement('div')

    this.rootNode.className = 'canvas-month'

    this.parentNode.appendChild(this.rootNode)
  }

  renderDays() {
    this.days.push(new Day(this.rootNode, {
      index: 0,
      month: this,
      title: this.shortName,
      type: DayTypes.first
    }))

    this.days.push(new Day(this.rootNode, {
      index: 1,
      month: this,
      type: DayTypes.business
    }))

    this.days.push(new Day(this.rootNode, {
      index: 2,
      month: this,
      type: DayTypes.unexpected
    }))

    this.days.push(new Day(this.rootNode, {
      index: 3,
      month: this,
      type: DayTypes.estate
    }))

    this.days.push(new Day(this.rootNode, {
      index: 4,
      month: this,
      type: DayTypes.unexpected
    }))

    this.days.push(new Day(this.rootNode, {
      index: 5,
      month: this,
      type: DayTypes.business
    }))

    this.days.push(new Day(this.rootNode, {
      index: 6,
      month: this,
      type: DayTypes.estate
    }))
  }

  getIndex(): number {
    return this.index
  }
}