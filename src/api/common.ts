import { post } from '@/utils/http'

const list = {
  set: '/cats',
}

export function setCats(data: any) {
  console.log(data)
  return post(list.set, data)
}
