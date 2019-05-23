import request from '@/util/request'
export function fetchOftenGoods () {
  return request({
    url: '/oftenGoods',
    method: 'get'
  })
}
export function fetchTypeGood () {
  return request({
    url: '/typeGoods',
    method: 'get'
  })
}
