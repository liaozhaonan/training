export default {
  showPopup (popupComponent) {
    const popup = popupComponent
    popup.show()
    setTimeout(() => {
      popup.hide()
    }, 2000)
  },
  getFullDate (s, n) {
    let date = s ? new Date(s) : new Date()
    if (n) { date = new Date(date.getTime() + n * 24 * 60 * 60 * 1000) }
    let y = date.getFullYear()
    let m = date.getMonth() + 1
    if (m < 10) { m = '0' + m }
    let d = date.getDate()
    if (d < 10) { d = '0' + d }
    return `${y}-${m}-${d}`
  }
}
