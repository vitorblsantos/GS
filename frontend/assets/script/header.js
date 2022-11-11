function handleMenuItens() {
  const menuItens = Array.from(document.querySelectorAll('.menu__item'))
  const menuItenHoverClassName = 'menu__item--hover'

  menuItens.map(el => el.addEventListener('mouseover', function () {
    if (el.classList.contains(menuItenHoverClassName)) return false
    return el.classList.add(menuItenHoverClassName)
  }))

  menuItens.map(el => el.addEventListener('mouseout', function () {
    if (!el.classList.contains(menuItenHoverClassName)) return false
    return el.classList.remove(menuItenHoverClassName)
  }))

}

(function () {
  handleMenuItens()
})()
