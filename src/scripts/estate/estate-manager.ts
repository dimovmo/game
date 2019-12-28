import { Estate } from './estate'
import { rand } from '../utils'

let estates = [
  {
    id: 'flat',
    title: 'Однушка в Купчино',
    description: 'Однушка для сдачи.',
    img: 'flat.jpg',
    cost: 1000000,
    earning: 35000
  },
  {
    id: 'flat2',
    title: 'Комната в коммуналке',
    description: 'Комната в коммуналке для сдачи.',
    img: 'flat2.jpg',
    cost: 700000,
    earning: 25000
  },
  {
    id: 'flat3',
    title: 'Комната в квартире',
    description: 'Комната в квартире для сдачи.',
    img: 'flat3.jpg',
    cost: 1200000,
    earning: 30000
  },
  {
    id: 'flat4',
    title: 'Квартира',
    description: 'Квартира для сдачи посуточно.',
    img: 'flat4.jpg',
    cost: 2000000,
    earning: 50000
  },
  {
    id: 'flat5',
    title: 'Хостел',
    description: 'Хостел для сдачи туристам. Находится в центре города.',
    img: 'flat5.jpg',
    cost: 2500000,
    earning: 75000
  },
]

export class EstateManager {
  static getRandomEstate(): Estate | null {
    if (estates.length === 0) {
      return null
    }

    const index = rand(0, estates.length - 1)
    return new Estate(estates[index])
  }

  static remove(id: string) {
    estates = estates.filter(item => item.id !== id)
  }
}