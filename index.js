const inp = document.querySelector('input')

const div = document.createElement('div')
div.innerHTML = "Цей div з'являється при фокусуванні"
div.classList.add('div-blure')

inp.insertAdjacentElement('afterend', div)

function divFocus() {
  div.classList.remove('div-blure')
}

function divBlur() {
  div.classList.add('div-blure')
}

inp.addEventListener('focus', divFocus)
inp.addEventListener('blur', divBlur)
