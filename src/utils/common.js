import './pinyin_dict_firstletter'
import './pinyinUtil'
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
  },
  getFullTime (ms) {
    let t = new Date(ms)
    let hh = t.getHours()
    let mm = t.getMinutes()
    let ss = t.getSeconds()
    if (hh < 10) { hh = '0' + hh }
    if (mm < 10) { mm = '0' + mm }
    if (ss < 10) { ss = '0' + ss }
    return `${hh}:${mm}:${ss}`
  },
  formatDocs (docs) {
    let format = []
    let hashArray = []
    for (let doc of docs) {
      let upper = window.pinyinUtil.getFirstLetter(doc.name)[0].toUpperCase()
      if (hashArray.includes(upper)) {
        for (let group of format) {
          if (group.name === upper) {
            group.items.push(doc)
          }
        }
      } else {
        hashArray.push(upper)
        let group = {
          name: upper,
          items: [doc]
        }
        format.push(group)
      }
    }

    format.sort((a, b) => {
      return a.name > b.name
    })
    return format
  },
  setCookie (name, value, expiredays) {
    var exdate = new Date()
    exdate.setTime(Number(exdate) + expiredays)
    document.cookie = name + '=' + escape(value) + ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString())
  },
  getCookie (name) {
    if (document.cookie.length > 0) {
      let start = document.cookie.indexOf(name + '=') // 获取字符串的起点
      if (start !== -1) {
        start = start + name.length + 1 // 获取值的起点
        let end = document.cookie.indexOf(';', start) // 获取结尾处
        if (Number.parseInt(end) === -1) end = document.cookie.length // 如果是最后一个，结尾就是cookie字符串的结尾
        return decodeURI(document.cookie.substring(start, end)) // 截取字符串返回
      }
    }
    return ''
  },
  delCookie (name) {
    var exp = new Date()
    exp.setTime(exp.getTime() - 1)
    var cval = this.getCookie(name)
    if (cval != null) {
      document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
    }
  }
}
