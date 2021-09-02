/**
 * shallowReactive（浅响应式）和reactive（深度响应式）
 */

// shallowHandler处理器
const shallowHandler =  {
  get(target, prop) {
    console.log(`get: ${prop}`)
    return Reflect.get(target, prop)
  },
  set(target, prop, value) {
    console.log(`set: ${prop}`)
    return Reflect.set(target, prop, value)
  },
  deletePropertype(target, prop) {
    console.log(`delete: ${prop}`)
    return Reflect.deleteProperty(target, prop, value)
  }
}
// 浅响应式
function shallowReactive(target) {
  if (target && typeof target === 'object') {
    return new Proxy(target, shallowHandler)
  } 

  return target
}
// 深度响应式
function reactive(target) {
  if (target && typeof target === 'object') {
    if (Array.isArray(target)) {
      target.forEach((item, index) => {
        target[index] = reactive(item)
      })
    } else {
      Object.keys(target).forEach(key => {
        target[key] = reactive(target[key])
      })
    }
    return new Proxy(target, shallowHandler)
  } 

  return target
}
/**
 * shallowReadonly(浅只读)和readonly（深只读）
 */
// shallowReadonlyHandler处理器
const shallowReadonlyHandler = {
  get(target, prop) {
    console.log(`get: ${prop}`)
    return Reflect.get(target, prop)
  },
  set(target, prop, value) {
    console.warn('can not set')
    return true
  },
  deletePropertype(target, prop, value) {
    console.warn('can not delete')
    return true
  }
}
// 浅只读
function shallowReadonly(target) {
  if (target && typeof target === 'object') {
    return new Proxy(target, shallowReadonlyHandler)
  }
  return target
}
// 深只读
function readonly(target) {
  if (target && typeof target === 'object') {
    if (Array.isArray(target)) {
      target.forEach((item, index) => {
        target[index] = readonly(item)
      })
    } else {
      Object.keys(target).forEach(key => {
        target[key] = readonly(target[key])
      })
    }
    return new Proxy(target, shallowReadonlyHandler)
  }
  return target
}
