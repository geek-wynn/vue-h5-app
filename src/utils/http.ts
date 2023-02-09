import request from '@/utils/request'

// post封装
export function post(url: string, params: object) {
  return request({
    url: url,
    method: 'post',
    data: params
  })
}

// get封装
export function get(url: string) {
  return request({
    url: url,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    method: 'GET'
  })
}
