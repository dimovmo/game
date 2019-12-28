import { Earning } from './earnings/earning'
import { Cost } from './costs/cost'

export interface GamerOptions {
  monthsInGame: number
  cash: number
  goal: number
}

export class Gamer {
  private monthsInGame: number
  private cash: number
  private cashFlow: number
  private goal: number
  private earnings: any = {}
  private costs: any = {}

  constructor({monthsInGame, cash, goal}: GamerOptions) {
    this.monthsInGame = monthsInGame
    this.cash = cash
    this.goal = goal
  }

  addMonthInGame(value: number) {
    this.monthsInGame += value
  }

  incomingPay(value: number) {
    this.cash += value
  }

  outgoingPay(value: number) {
    this.cash -= value
  }

  getCash(): number {
    return this.cash
  }

  getCashFlow(): number {
    let earnings = 0

    Object.entries(this.earnings).forEach(([id, earning]) => {
      earnings += (earning as any).value
    })

    let costs = 0

    Object.entries(this.costs).forEach(([id, cost]) => {
      costs += (cost as any).value
    })

    return earnings - costs
  }

  getEarningValue(): number {
    let earnings = 0

    Object.entries(this.earnings).forEach(([id, earning]) => {
      earnings += (earning as any).value
    })

    return earnings
  }

  getGoal(): number {
    return this.goal
  }

  getMonthsInGame(): number {
    return this.monthsInGame
  }

  isGoalAchieved(): boolean {
    return this.goal <= this.cash
  }

  addEarning(earningId: string, earning: Earning) {
    this.earnings[earningId] = earning
  }

  getEarnings(): any {
    return this.earnings
  }

  setCost(costId: string, cost: Cost) {
    this.costs[costId] = cost
  }

  getCosts(): any {
    return this.costs
  }

  hasEnoughCash(value: number): boolean {
    return this.cash >= value
  }
}