import { Cost } from './cost'
import { rand } from '../utils'

const costs = [
  { title: 'Украли ноутбук', value: 40000 },
  { title: 'Разбил телефон', value: 5000 },
  { title: 'Пригласили на ДР', value:  2000 },
  { title: 'Ремонт в квартире', value:  10000 },
  { title: 'Ремонт машины', value:  7000 },
  { title: 'Пригласили на сваьбу', value: 5000 },
  { title: 'Поход к стоматологу', value: 4000 },
  { title: 'Штраф за парковку', value: 1000 },
  { title: 'Поход к терапевту', value: 2000 },
  { title: 'Новый телефон', value: 25000 },
  { title: 'Покупка новой гитары', value: 12000 },
  { title: 'Поезка на море', value: 20000 },
]

export class CostManager {
  static getRandomCost(): Cost {
    const index = rand(0, costs.length - 1)
    return new Cost(costs[index])
  }
}