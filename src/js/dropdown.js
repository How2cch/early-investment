class DropdownMenu extends HTMLElement {
  static get observedAttributes() {
    return ['color', 'chart']
  }

  constructor() {
    super()
    this.button = document.createElement('button')
    this.button.className = 'dropdown-button'

    this.textSpan = document.createElement('span') // 新增 <span> 元素
    this.textSpan.textContent = 'Total' // 將 "總覽" 文字設定到 <span> 元素
    this.button.appendChild(this.textSpan) // 將 <span> 元素添加到按鈕中

    this.arrow = document.createElement('div')
    this.arrow.className = 'arrow'

    // 將按鈕和箭頭添加到元件中
    this.button.appendChild(this.arrow)
    this.appendChild(this.button)

    this.menuWrapper = this.querySelector('.menu-wrapper')
  }

  connectedCallback() {
    const color = this.getAttribute('color')
    if (color) {
      this.button.classList.add(color)
    }

    this.button.addEventListener('click', () => {
      this.toggleMenu()
    })

    this.addEventListener('click', (event) => {
      if (event.target.classList.contains('dropdown-item')) {
        this.selectItem(event.target)
      }
    })

    document.addEventListener('click', (event) => {
      if (!this.contains(event.target)) {
        this.closeMenu()
      }
    })
  }

  toggleMenu() {
    // 更改 menuWrapper 的 display 屬性
    const display = getComputedStyle(this.menuWrapper).getPropertyValue('display')
    this.menuWrapper.style.display = display === 'block' ? 'none' : 'block'
  }

  closeMenu() {
    this.menuWrapper.style.display = 'none'
  }

  selectItem(item) {
    const key = this.getAttribute('chart')

    if (key === 'chart_07') {
      const allItems = Array.from(this.menuWrapper.querySelectorAll('.dropdown-item'))
      const clickedIndex = allItems.indexOf(item)
      this.closest('[data-select]').setAttribute('data-select', clickedIndex)
    } else {
      const chart = window[this.getAttribute('chart')]
      const datasets = chart.data.datasets
      datasets.forEach((item) => {
        item.hidden = true
      })

      const allItems = Array.from(this.menuWrapper.querySelectorAll('.dropdown-item'))

      // 找出被點擊項目的索引
      const clickedIndex = allItems.indexOf(item) - 1

      if (clickedIndex === -1) {
        datasets.forEach((item) => {
          item.hidden = false
        })
      } else {
        datasets[clickedIndex].hidden = false
      }
      chart.update()
    }

    this.textSpan.textContent = item.textContent
    this.closeMenu()
  }
}

customElements.define('dropdown-menu', DropdownMenu)
