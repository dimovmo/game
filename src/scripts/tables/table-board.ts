import { TableBase } from './table-base'
import { Earning } from '../earnings/earning'

export class TableBoard {
  private parentNode: Element
  private tableEarning: TableBase
  private tableCosts: TableBase
  private tableCommon: TableBase

  constructor(parentNode: Element) {
    this.parentNode = parentNode

    this.render()
  }

  render() {
    // this.renderEarning()
    // this.renderCommon()
    // this.renderExpenses()
  }

  renderEarnings(earnings: any) {
    const rows: any = []

    Object.entries(earnings).forEach(([id, earning]) => {
      rows.push({
        id: id,
        title: (earning as any).title,
        value: (earning as any).value
      })
    })

    const options = {
      className: 'table--earning',
      title: 'Доходы',
      renderSum: true,
      rows: rows
    }

    if (this.tableEarning) {
      this.tableEarning.update(rows)
    } else {
      this.tableEarning = new TableBase(this.parentNode, options)
    }
  }

  renderCosts(costs: any) {
    const rows: any = []

    Object.entries(costs).forEach(([id, earning]) => {
      rows.push({
        id: id,
        title: (earning as any).title,
        value: (earning as any).value
      })
    })

    const options = {
      className: 'table--costs',
      title: 'Расходы',
      renderSum: true,
      rows: rows
    }

    if (this.tableCosts) {
      this.tableCosts.update(rows)
    } else {
      this.tableCosts = new TableBase(this.parentNode, options)
    }
  }

  renderCommon(cash: number, cashFlow: number, monthsInGame: number, goal: number) {
    const options = {
      className: 'table--common',
      title: 'Сводка',
      rows: [{
        id: 'cash',
        title: 'Наличность',
        value: cash
      }, {
        id: 'cashFlow',
        title: 'Денежный поток',
        value: cashFlow
      }, {
        id: 'monthsInGame',
        title: 'Месяцев в игре',
        value: monthsInGame
      }, {
        id: 'goal',
        title: 'Цель накопить',
        value: goal
      }]
    }

    this.tableCommon = new TableBase(this.parentNode, options)
  }

  getTableCommon(): TableBase {
    return this.tableCommon
  }
}