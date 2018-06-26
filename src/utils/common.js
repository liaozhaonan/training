export default {
  showPopup (popupComponent) {
    const popup = popupComponent
    popup.show()
    setTimeout(() => {
      popup.hide()
    }, 2000)
  }
}
