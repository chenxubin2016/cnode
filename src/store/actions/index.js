// 网络请求
import qs from 'qs';
import {get} from '@assets/utils/request'

export const getList = (search) => {
  const {page = 1, tab = 'all', limit = 20, mdrender = false} = qs.parse(search.substr(1))
  return function (dispatch) {
    get('/topics', {
      page,
      tab,
      limit,
      mdrender
    }).then(res => {
      if (res.data.success) {
        dispatch({
          type: 'LIST_LOADOVER',
          data: res.data.data
        })
      }
    })
  }
}
