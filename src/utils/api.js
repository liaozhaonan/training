import axios from 'axios'
import qs from 'qs'
import { getCookie } from './common'
// import NProgress from 'nprogress'

axios.interceptors.request.use(config => {
  // 这里可以加一些动作, 比如来个进度条开始动作,
  // NProgress.start()
  if (!config.data.includes('key')) {
    let key = getCookie('key')
    config.data += `&key=${key}`
  }
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error)
})

function checkStatus (response) {
  // NProgress.done()
  if (response.status === 200 || response.status === 304) {
    return response
  }
  return {
    data: {
      code: -404,
      message: response.statusText,
      data: response.statusText
    }
  }
}

function checkCode (res) {
  if (res.data.code !== 200) {
    console.log(res.data.datas.error)
  }
  return res.data.datas
}

export default {
  post (url, data) {
    return axios({
      method: 'post',
      url,
      data: qs.stringify(data),
      timeout: 15000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(checkStatus).then(checkCode)
  },
  get (url, params) {
    return axios({
      method: 'get',
      url,
      params,
      timeout: 5000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(checkStatus).then(checkCode)
  }
}

/*
import api from '../api.js' // 改成对应的路径
export default {
  async mounted() {
    const { data: { code, data }} = await api.post('/api/comment/post', {title: 'title'})
    if (code === 200) {
        console.log(data)
    }
    const { data: { code, data }} = await api.get('/api/comment/get', {page: 1})
    if (code === 200) {
        console.log(data)
    }
  }
}
*/
