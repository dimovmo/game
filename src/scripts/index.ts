import { GameBoard } from './board/game-board'
import { rand, toNumberWithSpaces, getPercentage } from './utils'
import { TableBoard } from './tables/table-board'
import { Modal } from './modal'
import { Gamer } from './gamer'
import { CostManager } from './costs/cost-manager'
import { BusinessManager } from './business/business-manager'
import { Earning } from './earnings/earning'
import { Cost } from './costs/cost'
import { EstateManager } from './estate/estate-manager'

const gameBoard = new GameBoard()
gameBoard.setActiveDay(7)

const goButton = document.querySelector('#go')

if (goButton) {
  goButton.addEventListener('click', () => {
    tick()
  })
}

document.addEventListener('keyup', event => {
  if (event.keyCode === 32) {
    tick()
  }
})

const rootNode = document.querySelector('#root') as any
const tableBoard = new TableBoard(rootNode)

const modal = new Modal(rootNode)
modal.show({
  title: 'Начните игру',
  message: 'Жмите кнопку Go и Go!'
})

const tick = () => {
  modal.show({
    title: 'Ходим дальше...',
    message: ''
  })

  const step = rand(1, 6)

  gameBoard.moveActiveDay(step, () => {
    activeMonthIndex = gameBoard.getActiveMonth().getIndex()
    checkMonth()
    checkDay()
    prevMonthIndex = activeMonthIndex

    if (gamer.isGoalAchieved()) {
      modal.show({title: 'Победа!!!', message: 'Цель по накоплению денег достигнута! Поздравляем вас.'})
      gameBoard.stop()
    }
  })
}

let prevMonthIndex = 0
let activeMonthIndex = 0

const gamer = new Gamer({
  monthsInGame: 0,
  cash: 50000,
  goal: 5000000
})

gamer.addEarning('salary', new Earning({
  title: 'Работа',
  value: 30000
}))

gamer.setCost('car', new Cost({
  title: 'Машина',
  value: 3000
}))

gamer.setCost('food', new Cost({
  title: 'Корзина 30% от дохода',
  value: getPercentage(30, gamer.getEarningValue())
}))

gamer.setCost('rent', new Cost({
  title: 'Аренда квартиры',
  value: 7000
}))

gamer.setCost('gym', new Cost({
  title: 'Спорт зал',
  value: 2000
}))

tableBoard.renderCommon(gamer.getCash(), gamer.getCashFlow(), gamer.getMonthsInGame(), gamer.getGoal())
tableBoard.renderEarnings(gamer.getEarnings())
tableBoard.renderCosts(gamer.getCosts())

const checkMonth = () => {
  if (activeMonthIndex !== prevMonthIndex) {
    gamer.incomingPay(gamer.getCashFlow())
    gamer.addMonthInGame(1)
  }

  tableBoard.getTableCommon().updateRowValue('monthsInGame', gamer.getMonthsInGame())
  tableBoard.getTableCommon().updateRowValue('cash', gamer.getCash())
  tableBoard.getTableCommon().updateRowValue('cashFlow', gamer.getCashFlow())
}

const checkDay = () => {
  const activeDay = gameBoard.getActiveDay()

  if (activeDay.isUnexpected()) {
    const cost = CostManager.getRandomCost()
    modal.warn({
      title: 'Незапланированные расходы',
      message: `${cost.getTitle()} уносит <b>${toNumberWithSpaces(cost.getValue())}</b><br/><br/><img src="src/images/pain.jpg"/>`
    })

    gamer.outgoingPay(cost.getValue())
    tableBoard.getTableCommon().updateRowValue('cash', gamer.getCash())

    if (gamer.getCash() < 0) {
      modal.warn({
        title: 'Это фиаско, братан!',
        message: 'Вы банкрот, нет наличности, игра проиграна.'
      })
      gameBoard.stop()
    }
  }

  if (activeDay.isBusness()) {
    const business = BusinessManager.getRandomBusiness()

    if (!business) {
      modal.show({
        title: 'Нет бизнеса для покупки',
        message: 'Вы скупили все бизнесы на районе.',
      })

      return
    }

    if (!gamer.hasEnoughCash(business.getCost())) {
      modal.show({
        title: 'Недостаточно денег на покупку',
        message: business.getDescription(),
      })

      return
    }

    modal.show({
      title: 'Хотите купить бизнес?',
      message: business.getDescription(),
      actions: [
        {
          title: 'Купить!',
          callback: () => {
            if (gamer.hasEnoughCash(business.getCost())) {
              modal.success({
                title: 'Вы купили новый бизнес!',
                message: `${business.getTitle()} приносит +${toNumberWithSpaces(business.getEarning())} в месяц.<br/><br/><img src="src/images/success.jpg"/>`
              })

              gamer.addEarning(business.getId(), new Earning({
                title: business.getTitle(),
                value: business.getEarning()
              }))

              gamer.outgoingPay(business.getCost())
              gamer.setCost('food', new Cost({
                title: 'Корзина 30% от дохода',
                value: getPercentage(30, gamer.getEarningValue())
              }))
              tableBoard.renderCosts(gamer.getCosts())
              tableBoard.renderEarnings(gamer.getEarnings())
              tableBoard.getTableCommon().updateRowValue('cashFlow', gamer.getCashFlow())
              tableBoard.getTableCommon().updateRowValue('cash', gamer.getCash())
              BusinessManager.remove(business.getId())
            }
          }
        },
      ]
    })
  }

  if (activeDay.isEstate()) {
    const estate = EstateManager.getRandomEstate()

    if (!estate) {
      modal.show({
        title: 'Нет недвижимости для покупки',
        message: 'Вы скупили всю недвижимость на районе.',
      })

      return
    }

    if (!gamer.hasEnoughCash(estate.getCost())) {
      modal.show({
        title: 'Недостаточно денег на покупку',
        message: estate.getDescription(),
      })

      return
    }

    modal.show({
      title: 'Хотите купить недвижимость?',
      message: estate.getDescription(),
      actions: [
        {
          title: 'Купить!',
          callback: () => {
            if (gamer.hasEnoughCash(estate.getCost())) {
              modal.success({
                title: 'Вы купили новую недвижимость!',
                message: `${estate.getTitle()} приносит +${toNumberWithSpaces(estate.getEarning())} в месяц.<br/><br/><img src="src/images/success.jpg"/>`
              })

              gamer.addEarning(estate.getId(), new Earning({
                title: estate.getTitle(),
                value: estate.getEarning()
              }))

              gamer.outgoingPay(estate.getCost())
              gamer.setCost('food', new Cost({
                title: 'Корзина 30% от дохода',
                value: getPercentage(30, gamer.getEarningValue())
              }))
              tableBoard.renderCosts(gamer.getCosts())
              tableBoard.renderEarnings(gamer.getEarnings())
              tableBoard.getTableCommon().updateRowValue('cashFlow', gamer.getCashFlow())
              tableBoard.getTableCommon().updateRowValue('cash', gamer.getCash())
              BusinessManager.remove(estate.getId())
            }
          }
        },
      ]
    })
  }

  if (activeDay.isRegular()) {
    modal.show({
      title: 'Новый день',
      message: 'Вы попали на пустое поле.'
    })
  }
}