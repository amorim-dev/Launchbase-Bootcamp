const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal')

for (let card of cards) {
  card.addEventListener('click', () => {
    const bootId = card.getAttribute('id')
    modalOverlay.classList.add('active')
    modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${bootId}`
  })
}

document.querySelector('.close-modal').addEventListener('click', () => {
  modalOverlay.classList.remove('active')
  modalOverlay.querySelector('iframe').src = ""

  if(modal.classList.contains('launch'))
    modal.classList.remove('launch')
})

document.querySelector('.launch-modal').addEventListener('click', () => {
  modal.classList.toggle('launch')
})