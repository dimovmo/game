import { toNumberWithSpaces } from '../utils'

export interface TableRow {
  title: string
  value: number | string
  id: string
}

export interface TableBaseOptions {
  title: string
  className: string
  renderSum?: boolean
  rows: TableRow[]
}

export class TableBase {
  parentNode: Element
  rootNode: Element
  headerNode: Element
  rowsNode: Element
  options: TableBaseOptions
  title: string
  className: string
  renderSum = false
  rows: TableRow[] = []

  constructor(parentNode: Element, options: TableBaseOptions) {
    this.parentNode = parentNode
    this.title = options.title
    this.className = options.className
    this.rows = options.rows

    if (options.renderSum) {
      this.renderSum = options.renderSum
    }

    this.render()
  }

  render() {
    this.rootNode = document.createElement('div')
    this.rootNode.className = `table ${this.className}`

    this.renderHeader()
    this.renderRows()

    this.parentNode.appendChild(this.rootNode)
  }

  renderHeader() {
    this.headerNode = document.createElement('div')
    this.headerNode.className = 'table-header'

    if (this.renderSum) {
      this.headerNode.innerHTML = `${this.title} ${toNumberWithSpaces(this.getSumm())}`
    } else {
      this.headerNode.innerHTML = `${this.title}`
    }

    this.rootNode.appendChild(this.headerNode)
  }

  updateSumm() {
    if (this.renderSum) {
      this.headerNode.innerHTML = `${this.title} ${toNumberWithSpaces(this.getSumm())}`
    } else {
      this.headerNode.innerHTML = `${this.title}`
    }
  }

  renderRows() {
    if (this.rowsNode) {
      this.rowsNode.remove()
    }

    this.rowsNode = document.createElement('div')

    this.rowsNode.className = 'table-rows'

    this.rows.forEach(item => {
      const row = document.createElement('div')
      row.className = 'table-row'

      const title = document.createElement('div')
      title.className = 'table-row-title'
      title.innerText = item.title
      row.appendChild(title)

      const value = document.createElement('div')
      value.className = 'table-row-value'

      if (Number.isInteger(item.value as any)) {
        value.innerText = `${toNumberWithSpaces(item.value as any)}`
      } else {
        value.innerText = item.value.toString()
      }

      row.appendChild(value)

      this.rowsNode.appendChild(row)
    })

    this.rootNode.appendChild(this.rowsNode)

    this.updateSumm()
  }

  getSumm(): number {
    let summ = 0

    this.rows.forEach(item => {
      summ += parseInt(item.value.toString(), 10)
    })

    return summ
  }

  updateRowValue(rowId: string, value: number | string) {
    const row = this.rows.find((item: TableRow) => item.id === rowId)

    if (row) {
      row.value = value
    }

    this.renderRows()
  }

  update(rows: TableRow[]) {
    this.rows = rows

    this.renderRows()
  }
}