export default function Modal() {
  const modalWapper = document.querySelector('.modal-wrapper')
  const cancelButton = document.querySelector('.button.cancel')

  cancelButton.addEventListener('click', close)
  function open() {
    //Funcionalidade de atribuir a classe active para a modal
    modalWapper.classList.add('active')
  }
  function close() {
    //Funcionalidade de remover a classe active da modal
    modalWapper.classList.remove('active')
  }

  return {
    open,
    close
  }
}
