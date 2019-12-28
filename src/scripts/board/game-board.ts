import { MonthNode } from './month-node'
import { Day } from './day'

const months = [{
  index: 0,
  shortName: 'Jan',
  fullName: 'Jan',
}, {
  index: 1,
  shortName: 'Feb',
  fullName: 'February',
}, {
  index: 2,
  shortName: 'Mar',
  fullName: 'March',
}, {
  index: 3,
  shortName: 'Apr',
  fullName: 'April',
}, {
  index: 4,
  shortName: 'May',
  fullName: 'May',
}, {
  index: 5,
  shortName: 'Jun',
  fullName: 'May',
}, {
  index: 6,
  shortName: 'Jul',
  fullName: 'July',
}, {
  index: 7,
  shortName: 'Aug',
  fullName: 'August',
}, {
  index: 8,
  shortName: 'Sep',
  fullName: 'September',
}, {
  index: 9,
  shortName: 'Oct',
  fullName: 'October',
}, {
  index: 10,
  shortName: 'Nov',
  fullName: 'November',
}, {
  index: 11,
  shortName: 'Dec',
  fullName: 'December',
}]

export class GameBoard {
  private days: Day[] = []
  private months: MonthNode[] = []
  private northRegion: Element | any
  private regionOst: Element | any
  private regionSouth: Element | any
  private regionWest: Element | any
  private activeDayIndex: number = 0

  constructor() {
    this.northRegion = document.querySelector('#regionNorth')
    this.regionOst = document.querySelector('#regionOst')
    this.regionSouth = document.querySelector('#regionSouth')
    this.regionWest = document.querySelector('#regionWest')

    this.createMonths()
  }

  createMonths() {
    this.months.push(new MonthNode(this.northRegion, months[11]))
    this.months.push(new MonthNode(this.northRegion, months[0]))
    this.months.push(new MonthNode(this.northRegion, months[1]))
    this.months.push(new MonthNode(this.northRegion, months[2]))

    this.months.push(new MonthNode(this.regionOst, months[3]))
    this.months.push(new MonthNode(this.regionOst, months[4]))

    this.months.push(new MonthNode(this.regionSouth, months[5]))
    this.months.push(new MonthNode(this.regionSouth, months[6]))
    this.months.push(new MonthNode(this.regionSouth, months[7]))
    this.months.push(new MonthNode(this.regionSouth, months[8]))

    this.months.push(new MonthNode(this.regionWest, months[9]))
    this.months.push(new MonthNode(this.regionWest, months[10]))

    this.months.forEach(item => {
      this.days.push(...item.days)
    })
  }

  setActiveDay(index: number) {
    this.activeDayIndex = index
    this.getDayByIndex(this.activeDayIndex).setActive()
  }

  clearActiveDay(index: number) {
    this.getDayByIndex(index).clearActive()
  }

  getDayByIndex(index: number): Day {
    return this.days[index]
  }

  getActiveDay(): Day {
    return this.getDayByIndex(this.activeDayIndex)
  }

  getActiveMonth(): MonthNode {
    return this.getActiveDay().getMonth()
  }

  moveActiveDay(index: number, callback: Function) {
    if (this.activeDayIndex === index) {
      return
    }

    const interval = setInterval(() => {
      this.clearActiveDay(this.activeDayIndex)

      this.activeDayIndex += 1

      if (this.activeDayIndex >= this.days.length) {
        this.activeDayIndex = 0
      }

      this.setActiveDay(this.activeDayIndex)

      index -= 1

      if (index === 0) {
        clearInterval(interval)
        callback()
      }
    }, 100)
  }

  stop() {
    this.clearActiveDay(this.activeDayIndex)
  }
}