import { Business } from './business'
import { rand } from '../utils'

let business = [
  {
    id: 'shava',
    title: 'Ларек с веганской шавермой',
    description: 'Фалафель, тофу, нори. Лучшая шавуха на районе.',
    img: 'shava.jpg',
    cost: 150000,
    earning: 10000
  },
  {
    id: 'smoozi',
    title: 'Смузийная',
    description: 'Смузи из фруктов, фреши, витграс.',
    img: 'smoozi.jpg',
    cost: 100000,
    earning: 5000
  },
  {
    id: 'barber',
    title: 'Барбершоп',
    description: 'Стрижка бороды, подкрутка усов, расчесывание волос.',
    img: 'barber.jpg',
    cost: 100000,
    earning: 15000
  },
  {
    id: 'burger',
    title: 'Бургерная',
    description: 'Бургеры с соевым мясом и хумусом. Румяные и хрустящие булочки.',
    img: 'burger.jpg',
    cost: 250000,
    earning: 20000
  },
  {
    id: 'coffee',
    title: 'Кофейня',
    description: 'Капучино, кофе с собой, холодный кофе, тортики и панкейки.',
    img: 'coffee.jpg',
    cost: 300000,
    earning: 25000
  },
  {
    id: 'public',
    title: 'Паблик в VK',
    description: 'Паблик Вконтакте с котиками.',
    img: 'cat.jpg',
    cost: 50000,
    earning: 5000
  },
  {
    id: 'giro',
    title: 'Зарядка гироскутеров',
    description: 'Экспресс зарядка гироскутеров. Эвакуирование, развал, схождение колес.',
    img: 'giro.jpg',
    cost: 80000,
    earning: 6000
  },
  {
    id: 'apl',
    title: 'Магазин Эпл',
    description: 'Макбуки, макфоны, макплееры.',
    img: 'apl.jpg',
    cost: 500000,
    earning: 30000
  }
]

export class BusinessManager {
  static getRandomBusiness(): Business | null {
    if (business.length === 0) {
      return null
    }

    const index = rand(0, business.length - 1)
    return new Business(business[index])
  }

  static remove(id: string) {
    business = business.filter(item => item.id !== id)
  }
}