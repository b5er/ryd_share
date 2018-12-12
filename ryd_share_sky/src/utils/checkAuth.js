import decode from 'jwt-decode'
import { getStorageItem } from './storage.js'

export const checkAuth = () => {
  const token = getStorageItem('token')

  if(!token)
    return false
  try {
    const { exp } = decode(token)

    if(exp < (new Date().getTime() / 1000))
      return false
  } catch(e) {
    return false
  }
  return true
}

export const getId = () => {
  if(!getStorageItem('token'))
    return null
  const { _id } = decode(getStorageItem('token'))
  return _id
}
