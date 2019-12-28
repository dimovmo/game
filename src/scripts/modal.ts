export interface ShowModalOptions {
  title: string
  message: string
  modifier?: ModalModifiers
  actions?: any[]
}

export enum ModalModifiers {
  warning = 'warning',
  success = 'success',
  regular = 'regular',
}

export class Modal {
  parentNode: Element
  rootNode: Element
  headerNode: Element
  bodyNode: Element
  actionsNode: Element

  constructor(parentNode: Element) {
    this.parentNode = parentNode

    this.render()
  }

  render() {
    this.rootNode = document.createElement('div')
    this.rootNode.className = `modal`

    this.renderHeader()
    this.renderBody()
    this.renderActions()

    this.parentNode.appendChild(this.rootNode)
  }

  renderHeader() {
    this.headerNode = document.createElement('div')
    this.headerNode.className = 'modal-header'

    this.rootNode.appendChild(this.headerNode)
  }

  renderBody() {
    this.bodyNode = document.createElement('div')
    this.bodyNode.className = 'modal-body'

    this.rootNode.appendChild(this.bodyNode)
  }

  renderActions() {
    this.actionsNode = document.createElement('div')
    this.actionsNode.className = 'modal-actions'

    this.rootNode.appendChild(this.actionsNode)
  }

  clear() {
    this.headerNode.innerHTML = ''
    this.bodyNode.innerHTML = ''
    this.actionsNode.innerHTML = ''
    this.rootNode.classList.remove(ModalModifiers.warning)
    this.rootNode.classList.remove(ModalModifiers.success)
    this.rootNode.classList.remove(ModalModifiers.regular)
  }

  warn({title, message}: ShowModalOptions) {
    this.show({title, message, modifier: ModalModifiers.warning})
  }

  success({title, message}: ShowModalOptions) {
    this.show({title, message, modifier: ModalModifiers.success})
  }

  show({title, message, actions, modifier}: ShowModalOptions) {
    this.clear()

    if (actions && actions.length) {
      actions.forEach(item => {
        const button = document.createElement('button')
        button.className = 'modal-action'
        button.innerHTML = item.title

        this.actionsNode.appendChild(button)

        button.addEventListener('click', item.callback)
      })
    }

    this.headerNode.innerHTML = title
    this.bodyNode.innerHTML = message

    if (modifier) {
      this.rootNode.classList.add(modifier)
    }
  }
}